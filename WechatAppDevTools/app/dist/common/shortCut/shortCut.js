"use strict";function init(){var t=require("../actions/actions.js"),n=require("../log/log.js"),o="win32"===process.platform,r=[],e={key:"F5",active:function(){t.reload()},failed:function(t){n.info("shortCut.js "+t)}},i=new nw.Shortcut(e);if(r.push(i),o){var u={key:"Ctrl+B",active:function(){t.reBuild()}},s=new nw.Shortcut(u);r.push(s);var c={key:"Ctrl+R",active:function(){t.reload()},failed:function(t){n.info("shortCut.js "+t)}},f=new nw.Shortcut(c);r.push(f);var a={key:"Ctrl+Left",active:function(){t.goback()},failed:function(t){n.info("shortCut.js "+t)}},l=new nw.Shortcut(a);r.push(l);var h={key:"Ctrl+Right",active:function(){t.goforward()},failed:function(t){n.info("shortCut.js "+t)}};new nw.Shortcut(h);r.push(l);var p={key:"Ctrl+L",active:function(){t.focusAddressBar()},failed:function(t){n.info("shortCut.js "+t)}},w=new nw.Shortcut(p);r.push(w)}_exports={},_exports.register=function(){r.forEach(function(t){nw.App.registerGlobalHotKey(t)})},_exports.unRegister=function(){r.forEach(function(t){nw.App.unregisterGlobalHotKey(t)})}}var _exports;init(),module.exports=_exports;