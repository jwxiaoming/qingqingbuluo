















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
confId:10073207,
workDomain:'',
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:0,
_mark:'b2162a8697235854041d68ad66732f84d96faa85d407e540213beed1a0a76159ee1f500530af0c21'
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
index:1,
preferConfig:0,

title:'\u5728\u7ebf\u5ba2\u670d',
text:'\u5c0a\u656c\u7684\u5ba2\u6237\u60a8\u597d\uff0c\u6b22\u8fce\u5149\u4e34\u672c\u516c\u53f8\u7f51\u7ad9\uff01\u6211\u662f\u4eca\u5929\u7684\u5728\u7ebf\u503c\u73ed\u5ba2\u670d\uff0c\u70b9\u51fb\u201c\u5f00\u59cb\u4ea4\u8c08\u201d\u5373\u53ef\u4e0e\u6211\u5bf9\u8bdd\u3002',
auto:-1,
group:'10059146',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:0,
loop:0,
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
minBallon:0,
chatFollow:1,
backCloseChat:0
}


, panelParam:{
mobileIcon:'null',
mobileIconWidth:0,
mobileIconHeight:0,
category:'icon',
preferConfig:0,
position:0,
vertical:150,
horizon:5


,mode:1,
target:'10059146',
online:'http://static.soperson.com/default/images/floaticon/on_line_1.gif?131127&ver=110427',
offline:'http://static.soperson.com/default/images/floaticon/off_line_1.gif?131127&ver=110427',
width:89,
height:139,
status:1,
closable:0,
regions:[],
collapse:0



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
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?171117" charset="utf-8"></scr'+'ipt>');
}
}
