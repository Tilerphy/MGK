var id_base = 40000;
var weathers = {
         "flags":{
           "ignore_rainy": "ignore_rainy",
           "ignore_windy": "ignore_windy",
           "rainy_buff":"rainy_buff",
           "windy_buff":"windy_buff",
           "ignore_sunny":"ignore_sunny",
           "sunny_buff":"sunny_buff"
         },
         "objects":{
                           "rainy": [
                                                  {"id": id_base+1,
                                                  "effect_name": "Muddy",
                                                  "effect_on_filter": [],
                                                  "effect_off_filter":[weathers.flags.ignore_rainy],
                                                  "the_attribute_name":"speed",
                                                  "effect_level": 0,
                                                  "effect_type": "the_weather",
                                                  "effect_value": 0,
                                                  "effect_percent": 90},
                                                  {"id": id_base+2,
                                                  "effect_name": "Falling Spring",
                                                  "effect_on_filter": [weathers.flags.rainy_buff],
                                                  "effect_off_filter":[],
                                                  "the_attribute_name":"mana",
                                                  "effect_level": 0,
                                                  "effect_type": "the_weather",
                                                  "effect_value": 10,
                                                  "effect_percent": 100}
                           ],
                           "windy": [
                                                  {"id": id_base+3,
                                                  "effect_name": "Windy and Dusty",
                                                  "effect_on_filter": [],
                                                  "effect_off_filter":[weathers.flags.ignore_windy],
                                                  "the_attribute_name":"speed",
                                                  "effect_level": 0,
                                                  "effect_type": "the_weather",
                                                  "effect_value": 0,
                                                  "effect_percent": 90},
                                                  {"id": id_base+4,
                                                  "effect_name": "Dancing in Wind",
                                                  "effect_on_filter": [weathers.flags.windy_buff],
                                                  "effect_off_filter":[],
                                                  "the_attribute_name":"speed",
                                                  "effect_level": 0,
                                                  "effect_type": "the_weather",
                                                  "effect_value": 0,
                                                  "effect_percent": 120}
                                                  
                           ],
                           "sunny": [
                                                  {"id": id_base+5,
                                                  "effect_name": "Firing",
                                                  "effect_on_filter": [],
                                                  "effect_off_filter":[weathers.flags.ignore_sunny],
                                                  "the_attribute_name":"staying",
                                                  "effect_level": 0,
                                                  "effect_type": "the_weather",
                                                  "effect_value": 0,
                                                  "effect_percent": 80},
                                                  {"id": id_base+6,
                                                  "effect_name": "Sunny Day",
                                                  "effect_on_filter": [weathers.flags.sunny_buff],
                                                  "effect_off_filter":[],
                                                  "the_attribute_name":"stength",
                                                  "effect_level": 0,
                                                  "effect_type": "the_weather",
                                                  "effect_value": 0,
                                                  "effect_percent": 105}
                                                  
                           ]
         }
    };

module.exports.weathers = weathers;