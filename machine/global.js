mgk={};
console.log("start loading resources.");
console.log("load items...");
//load resources: items
mgk.item =require("./items").items;
console.log("load items...completed.");
console.log("run engine...");
//start game engine: time
mgk.engine= require("./server_engine").engine;
mgk.engine= mgk.engine.loadDir(__dirname+"/modules").start();
console.log("engine is running...");