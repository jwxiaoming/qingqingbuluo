















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16)); } return id;
};

var doyoo={
env:{
secure:false,
mon:'http://m9107.looyu.com/monitor',
chat:'http://looyuoms7731.looyu.com/chat',
file:'http://yun-static.soperson.com/131221',
compId:20001151,
confId:10056432,
workDomain:'',
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:0,
_mark:'b2162a869723585497825555d301f704d96faa85d407e5401cbdba6d21a165dea9accf00fb124e8c'
},
chat:{
mobileColor:'',
mobileHeight:80,
mobileChatHintBottom:0,
mobileChatHintMode:0,
mobileChatHintColor:'',
mobileChatHintSize:0
}

, monParam:{
index:-1,
preferConfig:1,

style:{mbg:'http://a.looyu.com/20001151/db8d77ed9b9548069d8aa7649c64197c.jpg',mh:389,mw:580,
elepos:'0 0 0 0 0 0 0 0 107 40 178 51 298 40 178 51 0 0 0 0',
mbabg:'',
mbdbg:'',
mbpbg:''},

title:'',
text:'',
auto:-1,
group:'10059146',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:1,
loop:25,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[0,0,0],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0,
minBallon:1,
chatFollow:1,
backCloseChat:0
}




,sniffer:{
ids:'chat.png',
gids:'10059146'
}

};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?171107"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?171122" charset="utf-8"></scr'+'ipt>');
}
}
