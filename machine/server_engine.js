var util = require("util");
var events = require("events");
var uuid = require("node-uuid");
function World_Clock() {
    events.EventEmitter.call(this);
}
util.inherits(World_Clock, events.EventEmitter);
World_Clock.prototype.tick = function(){
    this.emit("tick", uuid.v4());
}
World_Clock.prototype.clockid = 0;
World_Clock.prototype.set = function(){
    var self = this;
    this.clockid = setInterval(function(){
            self.tick.call(self);
        }, 1000);
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
                this.loaded[this.loaded.length] = require(__dirname+"/modules/"+args[key]);
            }
            return this;
        },
        //world_state
        world:{
                state : {},
                
                check: function(module, tickid){
                    this.state = module.step(tickid, this.state);
                    return this;
                }
            },
        //start
        start: function(){
            var self = this;
            self.clock.set();
            var self = this;
            self.clock.on("tick", function(tickid){
                    for(var key in self.loaded){
                        self.world = self.world.check(self.loaded[key], tickid);
                    }
                });
        }
    };
module.exports.engine = engine;