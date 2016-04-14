var util = require("util");
var events = require("events");
var uuid = require("node-uuid");
var fs = require("fs");
function World_Clock() {
    events.EventEmitter.call(this);
}
util.inherits(World_Clock, events.EventEmitter);
World_Clock.prototype.tick = function(){
    this.emit("sync", uuid.v4());
}
World_Clock.prototype.clockid = 0;
World_Clock.prototype.start = function(){
    var self = this;
    this.clockid = setInterval(function(){
            self.tick.call(self);
        }, 1000); // 1 second === 1 minute of game
    return this;
}
World_Clock.prototype.unset = function(){
    this.clockid = clearInterval(this.clockid);
    return this;
}

var engine = {      
        //node name
        node_name : "basic",
        //load list
        loaded: {},
        //world_clock
        clock: new World_Clock(),
        //load
        //load: function(args){
        //    for(var key in args){
        //        var modulePath =__dirname+"/modules/"+args[key];
        //        this.loaded[this.loaded.length] = require(modulePath);
        //        console.log("loaded module: ", modulePath);
        //    }
        //    return this;
        //},
        load:function(folder, level){
                var fixFolder = folder.endWith("/") ? (folder + level +"/"): (folder + "/" +level +"/");
                if (!fs.existsSync(fixFolder)) {
                    fs.mkdirSync(fixFolder);
                    return this;
                }else{
                    var files = fs.readdirSync(fixFolder);
                    for(var fileIndex in files){
                        var modulePath = fixFolder+files[fileIndex].replace(".js", "");
                        if (!this.loaded[level]) {
                            this.loaded[level] = [];
                        }
                        var tmpModule   =this.loaded[level][this.loaded.length]
                                        =require(modulePath);
                        this.appendTask(tmpModule);
                        console.log("loaded module: ", modulePath);
                    }
                    return this;
                }
            },        
        sync: function(module, tickid){
                module.step(tickid, this); 
        },
        start:function(){
                var self = this;
                self.clock.start();
                return this;
            },
        //prepare: function(tickid, func){
        //       if(mgk.engine.tasks){
        //            mgk.engine.tasks = {tickid:[func]};
        //       }else{
        //            var stepTasks = mgk.engine.tasks[tickid];
        //            stepTasks[stepTasks.length]= func;
        //       }
        //},
        //start
        appendTask: function(module){
            var self = this;
            self.clock.on("sync", function(tickid){
                        self.sync(module, tickid);
                });
            return this;
        }
    };
module.exports.engine = engine;
