var express = require("express");
var cookie = require("cookie-parser");
var swig = require("swig");
var bodyParser = require("body-parser");
var mid = require("express-middlewares-js");
var app = express();
__ = {};
__.app = app;
app.use(bodyParser());
app.use(cookie());
app.use("/static", express.static("static"));
app.use("/auth", require("./auth"));
//app.use("/weixin", mid.xmlBodyParser({
//        type:"text/xml"
//    }));
//app.use("/weixin", require("./weixin"));
app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname+"/views");
app.set("view cache", false);
swig.setDefaults({cache:false});
require("./extensions");
var engine = require("./machine/server_engine").engine;
engine.load(["test"]).start();
//require("./json2sql");
var http = require("http").Server(app);
var socket = require("socket.io")(http);
__.socket = socket;
http.listen(8888);
