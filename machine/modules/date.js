var moment = require("moment");
var _real_base = moment("2016-4-10 0:0:0", "YYYY-MM-DD HH:mm:ss");
var _real_offset_seconds = -1 ;
var X_base = moment("1118-1-1 0:0", "YYYY-MM-DD HH:mm");
var Z_base = moment("118-1-1 0:0", "YYYY-MM-DD HH:mm");

module.exports.step = function(tickid, engine){
    var _real_now = moment();
    _real_offset_seconds = Math.floor((_real_now - _real_base)/1000);
    var X_now = X_base.add(_real_offset_seconds, "m");
    var Z_now = Z_base.add(_real_offset_seconds, "m");
    mgk.date = {
            X_Display: "X"+X_now.format("YYYY年MM月DD日 HH:mm"),
            Y_Display:  "Z"+Z_now.format("YYYY年MM月DD日 HH:mm"),
            X:X_now,
            Z:Z_now
        };
    console.log(mgk.date);
}