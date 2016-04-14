var world = {
        date: {
                X: "",
                Z: ""
            },
        areas:[
                {
                    "Quiet Grassland":{
                        "effects":[
                            {
                                
                                
                            }
                        ]
                    }
                    
                }
            ]
    };
mgk.world = world;
function update_world_areas() {
    //code
}
module.exports.step = function(tickId, engine){
         update_world_areas();
}