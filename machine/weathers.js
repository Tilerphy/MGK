var id_base = 40000;
var weathers = {
         "flags":{
           "ignore_rain": "ignore_rain",
           "ignore_wind": "ignore_wind",
           "rain_buff":"rain_buff",
           "wind_buff":"wind_buff",
         },
         "rain": [
                                {"id": id_base+1,
                                "effect_name": "Muddy",
                                "effect_on_filter": [],
                                "effect_off_filter":[weathers.flags.ignore_rain],
                                "the_attribute_name":"speed",
                                "effect_level": 4,
                                "effect_type": "the_weather",
                                "effect_value": 0,
                                "effect_percent": 90},
                                {"id": id_base+2,
                                "effect_name": "Falling Spring",
                                "effect_on_filter": [weathers.flags.rain_buff],
                                "effect_off_filter":[],
                                "the_attribute_name":"mana",
                                "effect_level": 4,
                                "effect_type": "the_weather",
                                "effect_value": 10,
                                "effect_percent": 100}
         ],
         "wind": [
                                {"id": id_base+3,
                                "effect_name": "Windy and Dusty",
                                "effect_on_filter": [],
                                "effect_off_filter":[weathers.flags.ignore_wind],
                                "the_attribute_name":"speed",
                                "effect_level": 4,
                                "effect_type": "the_weather",
                                "effect_value": 0,
                                "effect_percent": 90},
                                {"id": id_base+4,
                                "effect_name": "Dancing in Wind",
                                "effect_on_filter": [weathers.flags.wind_buff],
                                "effect_off_filter":[],
                                "the_attribute_name":"speed",
                                "effect_level": 4,
                                "effect_type": "the_weather",
                                "effect_value": 0,
                                "effect_percent": 120}
                                
         ],
    };

module.exports.weathers = weathers;