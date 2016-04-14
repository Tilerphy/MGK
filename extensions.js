console.log("Start adding extensions.");
//format string
//reg and replace
String.prototype.format =  function(params){
    
    var reg = /{(\d+)}/gm;
    return this.replace(reg, function(match,sub){
            return params[sub];
        });
}

String.prototype.endWith = function (str){
    return (this)&&((this.indexOf(str, this.length -1)) === (this.length -1));
}
console.log("Extensions were added.");
