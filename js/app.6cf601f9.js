(function(t){function i(i){for(var n,o,a=i[0],c=i[1],u=i[2],h=0,d=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(i);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,i=0;i<r.length;i++){for(var e=r[i],n=!0,a=1;a<e.length;a++){var c=e[a];0!==s[c]&&(n=!1)}n&&(r.splice(i--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},r=[];function o(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)o.d(e,n,function(i){return t[i]}.bind(null,n));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=i,a=a.slice();for(var u=0;u<a.length;u++)i(a[u]);var l=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";var n=e("85ec"),s=e.n(n);s.a},"0c0c":function(t,i,e){"use strict";var n=e("67ef"),s=e.n(n);s.a},"0ece":function(t,i,e){"use strict";var n=e("5306"),s=e.n(n);s.a},3185:function(t,i,e){t.exports=e.p+"media/123.8035fc0a.mp3"},"391d":function(t,i,e){t.exports=e.p+"img/759.9c4970bf.jpg"},5306:function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"app",attrs:{id:"app"}},[e("player")],1)},r=[],o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"view",staticClass:"player-view"},[n("div",{class:{maxWidth:t.isPC},attrs:{id:"player"},on:{mousemove:t.updateProgressDragging,mouseup:t.stopDragging}},[n("audio",{attrs:{src:this.songs[this.curIndex].url}}),n("div",{staticClass:"cover",class:{blur:t.show},style:{background:"url("+e("cd52")("./"+t.songs[t.curIndex].cover)+")"}},[n("div",{staticClass:"progress-bar",on:{mousedown:function(i){return i.stopPropagation(),t.startDragging(i)},click:t.updateProgress}},[n("div",{attrs:{id:"progress-container"}},[n("div",{ref:"progress",staticClass:"progress",style:{width:t.prog+"px"}})])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"control-container"},[n("span",{staticClass:"now"},[t._v(t._s(t._f("timeformatter")(t.currentTime)))]),n("span",{staticClass:"all"},[t._v(t._s(t._f("timeformatter")(t.duration)))]),n("div",{staticClass:"detail-container"},[n("p",{staticClass:"detail",staticStyle:{"font-weight":"bold","margin-bottom":"22px","margin-top":"20px"}},[t._v(" "+t._s(t.songs[t.curIndex].title)+" ")]),n("p",{staticClass:"detail",staticStyle:{color:"#666","font-size":"1.1rem"}},[t._v(" "+t._s(t.songs[t.curIndex].author)+" ")])]),n("div",{staticClass:"button-container"},[n("button",{staticClass:"round prev",on:{click:t.prev}}),t.playing?n("button",{staticClass:"stop",on:{click:t.pause}}):n("button",{staticClass:"play",on:{click:t.play}}),n("button",{staticClass:"round next",on:{click:t.next}})])])]),t.showPlaylist?n("Option",{attrs:{id:"option",songList:t.songs,current:t.curIndex,touching:t.touching},on:{clickPlaylist:t.onPlaylistClick}}):t._e(),n("transition",{attrs:{name:"slide"}},[t.show||t.isPC?n("lyrics",{class:{alignRight:t.isPC},attrs:{id:"lyrics",timestamp:t.currentTime,currentMusicIndex:t.curIndex,touching:t.touching,showing:t.show},on:{updateTimestampByLyrics:t.updateTimestamp}}):t._e()],1)],1)},a=[],c=(e("99af"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"playlist"}},[e("div",{staticClass:"dropdown"}),e("h1",[t._v("Playlist")]),e("ul",[t._l(t.songList,(function(i,n){return e("li",{key:i.title,class:{playing:t.current==n},on:{click:function(i){return i.stopPropagation(),t.onPlaylistClick(n)}}},[e("span",{staticClass:"index"},[t._v(t._s(n+1)+".")]),t._v(" "+t._s(i.author)+" - "+t._s(i.title)+" ")])})),e("li",[t._v("Lorem, ipsum dolor.")]),e("li",[t._v("Voluptatum, minima iusto.")]),e("li",[t._v("Suscipit, sequi architecto!")]),e("li",[t._v("Minima, natus possimus.")]),e("li",[t._v("Ipsam, incidunt obcaecati?")]),e("li",[t._v("Iste, quasi est!")])],2)])}),u=[],l={props:["songList","current"],data:function(){return{}},mounted:function(){},methods:{onPlaylistClick:function(t){this.$emit("clickPlaylist",t)}}},h=l,d=(e("0ece"),e("2877")),p=Object(d["a"])(h,c,u,!1,null,"21b3c48b",null),g=p.exports,f=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"lyrics",attrs:{id:"lyrics"}},[e("ul",{ref:"lyricsText",staticClass:"lyrics-view-wrapper"},t._l(t.lyricArray,(function(i,n){return e("li",{key:n,staticClass:"line-container",class:{highlight:n===t.curIndex},style:{opacity:Math.max(1-.3*(t.curIndex-n),0)}},[e("span",[t._v(t._s(i))])])})),0)])},m=[],y=(e("fb6a"),e("a9e3"),e("ac1f"),e("1276"),e("b85c")),v={props:["timestamp","currentMusicIndex","touching","showing"],data:function(){return{lyric:"[00:00.000] 作曲 : Toru/milet\n[00:01.000] 作词 : milet\n[00:03.64]Where you’re going\n[00:05.90]まだ明けない夜は\n[00:08.06]愛想を尽かして\n[00:10.41]期待はもうしない\n[00:13.38]あなたはもういない\n[00:17.78]凍りついた声\n[00:20.13]誰も溶かすことできずに\n[00:23.47]ただ広がるspace\n[00:26.07]青いままのflames\n[00:28.62]遠く消える テールライト 照らして\n[00:34.91]二つになった 影を残して\n[00:43.85]Tell me what is inside you inside you now\n[00:50.20]手に触れた 最初で最後でも\n[00:56.47]Tell me who is inside 許されるなら\n[01:03.74]Let me in you again\n[01:06.28]and just stay Please just stay\n[01:10.99]エンドロールは流れない時は\n[01:15.36]もう何も癒さない\n[01:17.62]繰り返しのscene\n[01:20.25]瞳の裏貼りついたscreen\n[01:22.91]Don’t say\n[01:23.98]it’s too late to say I need you\n[01:29.24]Don’t say\n[01:30.27]it’s too late to say I miss you\n[01:38.63]Tell me what is inside you inside you now\n[01:44.90]目に見えない 最初が最後でも\n[01:51.33]Tell me who is inside 許されるなら\n[01:58.47]Let me in you again\n[02:01.20]今だけ そばにいて\n[02:12.21]Maybe you’re right\n[02:13.68]Maybe your life’s better without me\n[02:18.72]でも知らない 誰も知らない\n[02:21.72]あなたがいたってoh\n[02:24.84]何度も確かめるほどに\n[02:28.59]砂のようにこぼれ落ちた\n[02:32.82]もうきっと 戻せないの\n[02:39.35]Tell me what is inside you inside you now\n[02:45.63]手に触れた 最初で最後でも\n[02:52.19]Tell me who is inside 許されるなら\n[02:59.33]Let me in you again\n[03:02.30]and just stay Please just stay\n[03:06.64]Maybe you’re right\n[03:08.17]Maybe your life’s better without me\n[03:12.96]I need you here so\n[03:14.53]I need to hear you more\n[03:16.29]never let you down\n[03:19.50]Maybe you’re right\n[03:20.97]Maybe your life’s better without me\n[03:25.82]Maybe You’re right\n[03:27.15]But let me in your life\n[03:28.93]just one night\n",lyricArray:[],timer:0,timeArray:[],positionTop:0,prevPosition:0,prevIndex:0,off:0,chosenTimestamp:0,onelineHeight:0,curIndex:0,scrollDis:0,timeout:null,offset:0}},mounted:function(){this.makeArray(),this.timer=this.timestamp;for(var t=0;t<this.timeArray.length;t++)if(this.timer>=this.timeArray[t]&&this.timer<this.timeArray[t+1]){this.curIndex=t;break}var i=this;setTimeout((function(){window.scrollTo(0,48*i.curIndex)}),300)},methods:{makeArray:function(){var t=this.lyric.split("\n");this.timeArray.push(0),this.lyricArray.push("");var i,e=Object(y["a"])(t);try{for(e.s();!(i=e.n()).done;){var n=i.value,s=n.split("]"),r=s[0],o=s[1];r=r.slice(1).split(":");var a=Number(r[0]),c=Number(r[1]),u=60*a+c;0===u||u?(this.timeArray.push(u),this.lyricArray.push(o)):(this.timeArray.push(999),this.lyricArray.push(""))}}catch(l){e.e(l)}finally{e.f()}},onScroll:function(){var t=this.prevPosition,i=this;this.offset=window.scrollY-t,null!=this.timeout&&window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){0!==i.offset&&(window.removeEventListener("scroll",i.onScroll),window.scrollTo(0,48*i.curIndex),i.chosenTimestamp=i.timeArray[i.curIndex],i.$emit("updateTimestampByLyrics",i.chosenTimestamp))}),200)}},watch:{timestamp:function(){this.timer=this.timestamp,this.timer+.2>this.timeArray[this.curIndex+1]&&this.timer+.2<this.timeArray[this.curIndex+2]&&(this.curIndex++,window.scrollBy({top:48,left:0,behavior:"smooth"}))},currentMusicIndex:function(){this.curIndex=0,window.scrollTo(0,0)},offset:function(){this.off=Math.round(this.offset/48),this.prevIndex+this.off<0?this.curIndex=0:this.prevIndex+this.off>this.timeArray.length-1?this.curIndex=this.timeArray.length-1:this.curIndex=this.prevIndex+this.off},touching:function(){this.touching&&(console.log("touching"),this.prevPosition=window.scrollY,this.prevIndex=this.curIndex,window.addEventListener("scroll",this.onScroll))}}},w=v,x=(e("698a"),Object(d["a"])(w,f,m,!1,null,"4bc0edc2",null)),b=x.exports,I={components:{Option:g,Lyrics:b},data:function(){return{all:0,prog:0,timer:null,currentTime:0,duration:0,cur:new Audio,songs:[{song:new Audio,author:"milet",title:"Inside You",cover:"cover.jpg",playing:!1,url:e("a50d")},{song:new Audio,author:"花澤香菜 (はなざわ かな)",title:"恋愛サーキュレーション (恋爱循环) (《化物语》TV动画片头曲) ",cover:"cover3.jpg",playing:!1,url:e("3185")}],curIndex:0,playing:!1,isScrolled:!1,dragging:!1,coverHeight:0,coverWidth:0,song:null,loading:!0,loadingStyle:{height:0,width:0,top:0,left:"30px"},windowHeight:0,windowWidth:0,isPC:!1,startX:0,startY:0,x:0,y:0,showPlaylist:!1,show:!1,offset:0,touching:!1,backgroundImg:""}},mounted:function(){var t=this;this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowWidth>800&&(this.isPC=!0),this.height=this.windowHeight/1.5,this.loadingStyle.width=this.coverWidth+"px",this.loadingStyle.height=this.coverWidth+"px",this.loadingStyle.lineHeight=this.coverWidth+"px",this.cur.src=this.songs[0].url,setTimeout((function(){t.getProgressBarWidth()}))},created:function(){this.coverWidth=.7*Math.min(window.innerWidth,570),this.coverHeight=this.coverWidth,window.addEventListener("touchstart",this.onTouchStart,{passive:!1}),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{onNext:function(){this.prog=this.all,this.next()},getProgressBarWidth:function(){this.all=document.getElementById("progress-container").clientWidth,console.log(this.all)},onPlaylistClick:function(t){if(this.curIndex!==t){t>=0&&t<this.songs.length&&(this.curIndex=t,this.pause(),this.cur.currentTime=0,this.cur.src=this.songs[this.curIndex].url),this.song=document.querySelector("audio");var i=this,e=function t(){console.log("good to go"),i.play(),i.song.removeEventListener("canplay",t)};this.song.addEventListener("canplay",e)}},togglePlaylist:function(){this.showPlaylist=!this.showPlaylist;var t=this,i=function i(){t.showPlaylist=!1,window.removeEventListener("click",i)};window.addEventListener("click",i)},play:function(){var t=this;console.log("play"),this.duration=this.cur.duration,this.currentTime=this.cur.currentTime,this.songs[this.curIndex].playing=!0,this.cur.play(),this.playing=!0,this.timer=setInterval((function(){t.currentTime=t.cur.currentTime}),100),this.cur.addEventListener("ended",this.onNext)},pause:function(){this.playing=!1,this.songs[this.curIndex].playing=!1,this.cur.pause(),clearInterval(this.timer)},next:function(){this.pause(),this.songs[this.curIndex].playing=!1,this.cur.removeEventListener("ended",this.onNext),this.cur.currentTime=0,this.curIndex++,this.curIndex>this.songs.length-1&&(this.curIndex=0),this.cur.src=this.songs[this.curIndex].url,this.song=document.querySelector("audio");var t=this,i=function i(){console.log("good to go"),t.play(),t.song.removeEventListener("canplay",i)};this.song.addEventListener("canplay",i)},prev:function(){this.pause(),this.songs[this.curIndex].playing=!1,this.cur.removeEventListener("ended",this.onNext),this.cur.currentTime=0,this.curIndex--,this.curIndex<0&&(this.curIndex=this.songs.length-1),this.cur.src=this.songs[this.curIndex].url,this.song=document.querySelector("audio");var t=this,i=function i(){console.log("good to go"),t.play(),t.song.removeEventListener("canplay",i)};this.song.addEventListener("canplay",i)},updateProgress:function(t){this.playing||this.play(),this.cur.currentTime=this.duration*(t.offsetX/this.all),this.currentTime=this.cur.currentTime,this.prog=this.all*(this.currentTime/this.duration);var i=this;this.timer=setInterval((function(){i.currentTime=i.cur.currentTime}),100)},startDragging:function(){this.dragging=!0,clearInterval(this.timer)},stopDragging:function(t){console.log(t),this.dragging&&(this.dragging=!1,this.updateProgress(t))},updateProgressDragging:function(t){this.dragging&&(this.prog=this.all*(this.duration*(t.offsetX/this.all)/this.duration))},onTouchStart:function(t){this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY,this.x=this.startX,this.y=this.startY,this.show&&(this.touching=!0)},onTouchMove:function(t){this.x=t.touches[0].clientX,this.y=t.touches[0].clientY,!0===this.show&&(this.offset=this.y-this.startY)},onTouchEnd:function(){var t=this.startX-this.x,i=this.startY-this.y,e=Math.abs(i)-Math.abs(t);this.touching=!1,e>0?i>0?i>.05*this.windowHeight&&this.show:i<-.1*this.windowHeight&&this.show:t>0?t>.1*this.windowWidth&&!this.showPlaylist&&(console.log("swipe left"),this.show=!0):t<-.1*this.windowWidth&&(console.log("swipe right"),this.show=!1)},updateTimestamp:function(t){this.cur.currentTime=t,this.currentTime=t}},watch:{currentTime:function(){this.prog=this.all*(this.currentTime/this.duration)},curIndex:function(){this.$emit("updateCurIndex",this.songs[this.curIndex].cover)}},computed:{playerleft:function(){return.05*this.windowWidth+"px"}},filters:{timeformatter:function(t){var i=0,e=0,n=0;return i=Math.floor(t/3600),t%=3600,e=Math.floor(t/60),n=Math.floor(t%60),0===i?"".concat(e,":").concat(n):"".concat(i,":").concat(e,":").concat(n)}}},T=I,_=(e("0c0c"),Object(d["a"])(T,o,a,!1,null,"447a976b",null)),P=_.exports,j={name:"App",components:{Player:P}},C=j,L=(e("034f"),Object(d["a"])(C,s,r,!1,null,null,null)),k=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)}}).$mount("#app")},"67ef":function(t,i,e){},"698a":function(t,i,e){"use strict";var n=e("f4da"),s=e.n(n);s.a},"85ec":function(t,i,e){},a50d:function(t,i,e){t.exports=e.p+"media/inside.11fbd03b.mp3"},afa4:function(t,i,e){t.exports=e.p+"img/cover2.dd3b364a.jpg"},cd52:function(t,i,e){var n={"./759.jpg":"391d","./cover.jpg":"d0cb","./cover2.jpg":"afa4","./cover3.jpg":"e393"};function s(t){var i=r(t);return e(i)}function r(t){if(!e.o(n,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="cd52"},d0cb:function(t,i,e){t.exports=e.p+"img/cover.13d1aa12.jpg"},e393:function(t,i,e){t.exports=e.p+"img/cover3.4f6fe30d.jpg"},f4da:function(t,i,e){}});
//# sourceMappingURL=app.6cf601f9.js.map