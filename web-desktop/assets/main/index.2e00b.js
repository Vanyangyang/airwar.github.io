window.__require=function t(e,o,n){function r(c,a){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var u=o[c]={exports:{}};e[c][0].call(u.exports,function(t){return r(e[c][1][t]||t)},u,u.exports,t,e,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({Bullet:[function(t,e,o){"use strict";cc._RF.push(e,"286850ZD0xOqJqAJX6l5FBr","Bullet");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Game"),a=t("./Player"),s=cc._decorator,l=s.ccclass,u=(s.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.step=10,e.canvasHeight=0,e}return r(e,t),e.prototype.onLoad=function(){var t=cc.find("Canvas");this.canvasHeight=t.height,this.init()},e.prototype.start=function(){},e.prototype.init=function(){this.node.x=a.default.instance.node.x,this.node.y=a.default.instance.node.y+50},e.prototype.update=function(){this.node.y+=this.step,this.node.y>=this.canvasHeight/2&&c.default.ins.bulletPool.put(this.node)},e.prototype.onCollisionEnter=function(){c.default.ins.bulletPool.put(this.node)},i([l],e)}(cc.Component));o.default=u,cc._RF.pop()},{"./Game":"Game","./Player":"Player"}],EndGameDialog:[function(t,e,o){"use strict";cc._RF.push(e,"3ed9afU52pD2oJkYGIXyKw0","EndGameDialog");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Game"),a=cc._decorator,s=a.ccclass,l=(a.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.score=null,e}return r(e,t),e.prototype.onLoad=function(){this.score=cc.find("\u63d0\u793a\u6846/\u5f97\u5206",this.node).getComponent(cc.Label),this.init()},e.prototype.init=function(){this.score.string="\u5f97\u5206\uff1a"+c.default.ins.scoreLabel.string},e.prototype.start=function(){},e.prototype.show=function(){this.node.active=!0,this.init()},e.prototype.hide=function(){this.node.active=!1},i([s],e)}(cc.Component));o.default=l,cc._RF.pop()},{"./Game":"Game"}],Enemy:[function(t,e,o){"use strict";cc._RF.push(e,"0badeFt4DFK1Kuqo4wtwjlo","Enemy");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Game"),a=cc._decorator,s=a.ccclass,l=a.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audio=null,e.label=null,e.score=0,e.health=0,e.level=20,e.step=4,e}return r(e,t),e.prototype.onLoad=function(){this.label=cc.find("hp",this.node).getComponent(cc.Label),this.init()},e.prototype.start=function(){},e.prototype.init=function(){this.score=Math.floor(Math.random()*this.level+1),this.health=this.score,this.labelFres()},e.prototype.labelFres=function(){this.label.string=this.health.toString()},e.prototype.update=function(){this.node.y-=this.step},e.prototype.onCollisionEnter=function(){this.health-=1,this.labelFres(),this.health<=0&&(c.default.ins.enemyPool.put(this.node),c.default.ins.scoreLabel.string=(parseInt(c.default.ins.scoreLabel.string)+this.score).toString(),cc.audioEngine.playEffect(this.audio,!1))},i([l(cc.AudioClip)],e.prototype,"audio",void 0),i([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./Game":"Game"}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"36592/gfFBMl4QHK1Yxg9HU","Game");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.audioSource=null,e.bulletPrefab=null,e.bulletPool=new cc.NodePool,e.bulletInterval=.1,e.enemyPrefab=null,e.enemyPool=new cc.NodePool,e.enemyInterval=2,e.canvas=null,e.scoreLabel=null,e.endGameDialog=null,e.player=null,e.pause=null,e.isPause=!1,e}var o;return r(e,t),o=e,e.prototype.onLoad=function(){o.ins=this,this.audioSource=cc.find("Canvas/\u6e38\u620f\u80cc\u666f").getComponent(cc.AudioSource),cc.director.getCollisionManager().enabled=!0,this.scoreLabel=cc.find("Canvas/\u94bb\u77f3/score").getComponent(cc.Label),this.endGameDialog=cc.find("Canvas/\u6e38\u620f\u7ed3\u675f").getComponent("EndGameDialog"),this.player=cc.find("Canvas/\u98de\u673a").getComponent("Player"),this.pause=cc.find("Canvas/\u6e38\u620f\u6682\u505c"),this.canvas=cc.find("Canvas"),console.log("canvas"+this.canvas.width),console.log("canvas"+this.canvas.height)},e.prototype.start=function(){},e.prototype.init=function(){this.isPause?(cc.director.resume(),this.pause.active=!1,this.isPause=!1):(this.pause.active=!1,this.scoreLabel.string="0",this.endGameDialog.hide(),this.player.show(),this.schedule(this.fire,this.bulletInterval),this.schedule(this.enemyWave,this.enemyInterval),this.audioSource.play())},e.prototype.creatBullet=function(){var t=null;return this.bulletPool.size()>0?(t=this.bulletPool.get()).getComponent("Bullet").init():t=cc.instantiate(this.bulletPrefab),t},e.prototype.fire=function(){this.canvas.addChild(this.creatBullet())},e.prototype.creatEnemy=function(){var t=null;return this.enemyPool.size()>0?(t=this.enemyPool.get()).getComponent("Enemy").init():t=cc.instantiate(this.enemyPrefab),t},e.prototype.enemyWave=function(){var t=Math.floor(4*Math.random());if(t>0)for(var e=this.canvas.width/t,o=0,n=0;n<t;n++){var r=this.creatEnemy(),i=Math.random()*e;0!=n&&i<180&&(i=180),o+=i,this.canvas.addChild(r);var c=cc.v2(o-this.canvas.width/2+r.width/2,this.canvas.height/2-this.node.height/2);r.setPosition(c)}},e.prototype.clearScreen=function(){for(var t=this.canvas.children,e=t.length-1;e>=0;e--)"\u5b50\u5f39"!=t[e].name&&"\u654c\u673a"!=t[e].name||t[e].destroy()},e.prototype.clickPauseButton=function(){this.pause.active=!0,this.isPause=!0,cc.director.pause()},e.prototype.endGame=function(){this.player.hide(),this.unschedule(this.fire),this.unschedule(this.enemyWave),this.clearScreen(),this.endGameDialog.show(),this.audioSource.stop()},e.prototype.quit=function(){cc.game.end()},e.ins=null,i([s(cc.Prefab)],e.prototype,"bulletPrefab",void 0),i([s(cc.Prefab)],e.prototype,"enemyPrefab",void 0),o=i([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],Player:[function(t,e,o){"use strict";cc._RF.push(e,"dc833B4gQdHnbZtD6vSgsz6","Player");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./Game"),a=cc._decorator,s=a.ccclass,l=(a.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var o;return r(e,t),o=e,e.prototype.onLoad=function(){o.instance=this,this.node.on("touchmove",this.moveWithCursor,this)},e.prototype.start=function(){},e.prototype.moveWithCursor=function(t){var e=t.getDelta();this.node.x+=e.x,this.node.y+=e.y},e.prototype.show=function(){this.node.active=!0},e.prototype.hide=function(){this.node.active=!1},e.prototype.onCollisionEnter=function(){c.default.ins.endGame()},e.instance=null,o=i([s],e)}(cc.Component));o.default=l,cc._RF.pop()},{"./Game":"Game"}]},{},["Bullet","EndGameDialog","Enemy","Game","Player"]);