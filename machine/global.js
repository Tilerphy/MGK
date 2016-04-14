var fs = require("fs");
mgk={};
//console.log("start loading resources.");
//console.log("load items...");
////load resources: items
//mgk.item =require("./items").items;
//console.log("load items...completed.");
console.log("run engine...");
//start game engine: time
mgk.engine= require("./server_engine").engine.start();
var folders = fs.readdirSync(__dirname+"/modules");
var maxLevel = parseInt(folders.sort(function(pre, next){
        return parseInt(pre) > parseInt(next);
    })[folders.length-1]);
console.log(maxLevel);
for(var i=0; i<maxLevel ; i++)
{
    console.log("load module level: ", i );
    mgk.engine= mgk.engine
        .load(__dirname+"/modules", i);
}
console.log("engine is running...");