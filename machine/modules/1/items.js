var id_base = 50000;
var items = {
        "flags":{},
        "objects":[]
    };
function initItems() {
    var fs = require("fs");
    var itemRootPath = __dirname + "/../../items";
    var files = fs.readdirSync(itemRootPath);
    for(var index in files){
        console.log("loading item: ", files[index]);
        var tmpItem = require(itemRootPath+"/"+files[index].replace(".js",""));
        for(var flagIndex in tmpItem.flags){
                items.flags[flagIndex] = tmpItem.flags[flagIndex];
        
        }
        
        for(var objectIndex in tmpItem.objects){
                items.objects[items.objects.length] = tmpItem.objects[objectIndex];
        }
    }
}
initItems();
mgk.items = items;
module.exports.step = function(tickid, engine){};