mgk={};
console.log("start loading resources.");
console.log("load items...");
//load resources: items
mgk.item =require("./items").items;
console.log("load items...completed.");
console.log("run engine...");
//start game engine: time
mgk.engine= require("./server_engine").engine.start();
for(var i=0; i<10 ; i++)
{
    console.log("load module level: ", i );
    mgk.engine= mgk.engine
        .load(__dirname+"/modules", i);
}
console.log("engine is running...");