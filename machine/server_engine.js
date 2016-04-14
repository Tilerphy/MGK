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
World_Clock.prototype.set = function(){
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
        loaded: [],
        //world_clock
        clock: new World_Clock(),
        //load
        load: function(args){
            for(var key in args){
                var modulePath =__dirname+"/modules/"+args[key];
                this.loaded[this.loaded.length] = require(modulePath);
                console.log("loaded module: ", modulePath);
            }
            return this;
        },
        loadDir:function(folder){
                var files = fs.readdirSync(folder);
                var fixFolder = folder.endWith("/") ? folder : folder + "/";
                for(var fileIndex in files){
                    var modulePath = fixFolder+files[fileIndex].replace(".js", "");
                    this.loaded[this.loaded.length]
                        = require(modulePath);
                    console.log("loaded module: ", modulePath);
                }
                return this;
            },        
        sync: function(module, tickid){
                module.step(tickid, this); 
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
        start: function(){
            var self = this;
            self.clock.set();
            var self = this;
            self.clock.on("sync", function(tickid){
                    for(var key in self.loaded){
                        self.sync(self.loaded[key], tickid);
                    }
                });
            return this;
        }
    };
module.exports.engine = engine;
