(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"settings"}},[l("b-table",{attrs:{items:e.items,fields:e.fields},on:{"row-clicked":e.selectAlarm},scopedSlots:e._u([{key:"cell(preview)",fn:function(e){return[l("audio",{attrs:{controls:"",src:"./alarms/"+e.item.file}})]}},{key:"cell(select)",fn:function(t){return[t.item.file==e.alarm?l("font-awesome-icon",{attrs:{icon:["fas","check"]}}):e._e()]}}])})],1)},s=[],a={data:function(){return{items:[{name:"鬧鈴",file:"alarm.mp3"},{name:"yay",file:"supercar_short.mp3"},{name:"John Cena",file:"johncena2_short.mp3"}],fields:[{key:"name",label:"名稱"},{key:"preview",label:"預覽"},{key:"select",label:"選擇"}]}},computed:{alarm:function(){return this.$store.getters.alarm}},methods:{selectAlarm:function(e){this.$store.commit("selectAlarm",e.file)}}},r=a,i=l("2877"),c=Object(i["a"])(r,n,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=settings.3cb6f76e.js.map