var audio=document.getElementById("myaudio"),t2=999,play=!1;function run(){if(play)return!1;audio.currentTime=0,audio.volume=.5,audio.muted=!1,play=!0,setTimeout(function(){play=!1,audio.muted=!0},t2)}function k(e,o,l){var u=new Array,c=new Array,d=new Array;for(i=0;i<7;i++)u[i]=document.getElementById("kj"+String(i+1)),c[i]=document.getElementById("m"+String(i+1)),d[i]=document.getElementById("w"+String(i+1));var t,n,o=o,a=!1,s=e+":"+[880,881,882,883,884,885,886,887,889][Math.floor(9*Math.random())]+"/Ws.ashx?"+Math.random();function r(){try{(t=new WebSocket(s)).onclose=function(){console.log("链接关闭"),m()},t.onerror=function(){console.log("发生异常了"),m();var e=",连,接,,异,常,".split(",");for(i=0;i<7;i++)isNaN(e[i])?c[i].innerHTML="<div style='margin-top: -1px;font-size: 20px;'>"+e[i]+"</div>":c[i].innerHTML=e[i],u[i].className=hm_ys(e[i]),d[i].innerHTML=lhc.getZodiac("2024",e[i])},t.onopen=function(){v.start(),t.send(" ")},t.onmessage=function(e){var t,n,a,s=e.data,e=JSON.parse(s),r=trim(e.k).split(","),s=r[0].replace("2024",""),e=r[8].replace("2024","");for((1<r[1].length&&isNaN(r[2])||1<r[2].length&&isNaN(r[3])||1<r[3].length&&isNaN(r[4])||1<r[4].length&&isNaN(r[5])||1<r[5].length&&isNaN(r[6])||1<r[6].length&&isNaN(r[7])||1<r[7].length&&s==e)&&run(),1<r[7].length&&s==e&&(t=setTimeout(function(){$("#kj-sj").hide(),$("#kj-hm").hide(),$("#kj-sjts").show(),"xa"==l?($(".lotery-list").html(""),jl(xajlurl,2)):($(".lotery-list").html(""),jl(xgjlurl,1)),clearTimeout(t)},6e4)),q.innerHTML="2024"+r[0],nextq.innerHTML="2024"+r[8].replace("2024",""),nextsj.innerHTML="2024-"+r[9]+"-"+r[10]+" 星期"+r[11],s==e||r[7].length<=1?(a=new Date,s=a.getFullYear(),e=check(a.getMonth()+1),a=check(a.getDate()),e=s+"-"+e+"-"+a,a=new Array("日","一","二","三","四","五","六")[new Date(e).getDay()],sqsj.innerHTML=e+" 星期"+a):(a=o,(n=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(n.responseText).data.lotteryTime.split("T");const i=new Date(e[0]);var t=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][i.getDay()];sqsj.innerHTML=e[0]+" "+t}},n.open("GET",a+"&suiji="+Math.random(),!0),n.send()),jzsj="2024-"+r[9]+"-"+r[10]+" 21:31:01",countTime(),i=0;i<r.length;i++)"xa"==l?(void 0!==r[1]&&!isNaN(r[1])||(r[1]="新"),void 0!==r[2]&&!isNaN(r[2])||(r[2]="澳")):(void 0!==r[1]&&!isNaN(r[1])||(r[1]="香"),void 0!==r[2]&&!isNaN(r[2])||(r[2]="港")),void 0!==r[3]&&!isNaN(r[3])||(r[3]="六"),void 0!==r[4]&&!isNaN(r[4])||(r[4]="合"),void 0!==r[5]&&!isNaN(r[5])||(r[5]="彩"),void 0!==r[6]&&!isNaN(r[6])||(r[6]="开"),void 0!==r[7]&&!isNaN(r[7])||(r[7]="奖"),u[i].className=hm_ys(r[i+1]),(isNaN(r[1])||isNaN(r[7]))&&($("#kj-sj").show(),$("#kj-hm").show(),$("#kj-sjts").hide()),isNaN(r[i+1])?c[i].innerHTML="<div style='margin-top: -1px;font-size: 20px;'>"+r[i+1]+"</div>":c[i].innerHTML=r[i+1],d[i].innerHTML=lhc.getZodiac("2024",r[i+1]);v.start()}}catch(e){console.log("catch"),m()}}function m(){a||(a=!0,n&&clearTimeout(n),n=setTimeout(function(){r(),a=!1},2500))}var v={timeout:12e4,timeoutObj:null,serverTimeoutObj:null,start:function(){console.log("start");var e=this;this.timeoutObj&&clearTimeout(this.timeoutObj),this.serverTimeoutObj&&clearTimeout(this.serverTimeoutObj),this.timeoutObj=setTimeout(function(){t.send(" "),e.serverTimeoutObj=setTimeout(function(){console.log(111),console.log(t),t.close()},e.timeout)},this.timeout)}};r(),document.addEventListener("visibilitychange",function(){document.hidden||setTimeout(function(){m()},1e3)})}function lk(e,t,n){var v=new Array,h=new Array,g=new Array;for(i=0;i<7;i++)v[i]=document.getElementById("kj"+String(i+1)),h[i]=document.getElementById("m"+String(i+1)),g[i]=document.getElementById("w"+String(i+1));var p,N,f,T,a=e+"&a=",s=t+"?",r=n+"?",j=new XMLHttpRequest;j.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e,t,n,a=JSON.parse(this.responseText),s=new Date,r=s.getDate(),o=s.getHours(),l=s.getMinutes(),s=s.getSeconds(),r=check(r),o=(o=check(o))+":"+(l=check(l))+":"+(s=check(s)),l=new Date,s=new Date(l.getFullYear(),0,1),s=l-s,s="2024"+Math.ceil(s/864e5);function u(e){e=new Date(e);return e.setDate(e.getDate()-1),e.getFullYear()+"-"+check(e.getMonth()+1)+"-"+check(e.getDate())}function u(e){e=new Date(e);return e.setDate(e.getDate()-1),e.getFullYear()+"-"+check(e.getMonth()+1)+"-"+check(e.getDate())}n=1==a.code?(n=(p=a.data.liveDataResult).lotteryStr.split(" "),N=u(n[0]),t=e=n[0],void 0===(n=p.numbers.split(","))[0]&&(n[0]="老"),void 0===n[1]&&(n[1]="澳"),void 0===n[2]&&(n[2]="六"),void 0===n[3]&&(n[3]="合"),void 0===n[4]&&(n[4]="彩"),void 0===n[5]&&(n[5]="开"),void 0===n[6]&&(n[6]="奖"),f=n[0]+","+n[1]+","+n[2]+","+n[3]+","+n[4]+","+n[5]+","+n[6],T=p.expect,p.nextExpect):"1000"==a.t?(e="2024-"+(d=(p=trim(a.k)).split(","))[9]+"-"+d[10],N=u(e),t=isNaN(d[7])&&d[10]>r?N:e,void 0===d[1]&&(d[1]="老"),void 0===d[2]&&(d[2]="澳"),void 0===d[3]&&(d[3]="六"),void 0===d[4]&&(d[4]="合"),void 0===d[5]&&(d[5]="彩"),void 0===d[6]&&(d[6]="开"),void 0===d[7]&&(d[7]="奖"),f=d[1]+","+d[2]+","+d[3]+","+d[4]+","+d[5]+","+d[6]+","+d[7],T="2024"+d[0],"2024"+d[8]):(p=a.data,N=p.lotteryTime,t=e=p.nextLotteryTime,f=p.numberList[0].number+","+p.numberList[1].number+","+p.numberList[2].number+","+p.numberList[3].number+","+p.numberList[4].number+","+p.numberList[5].number+","+p.numberList[6].number,T=p.year+p.period,p.nextLotteryYear+p.nextLotteryNumber);var c,r=f.replace(/\s*/g,"").split(","),d=new Array("日","一","二","三","四","五","六"),a=d[new Date(e).getDay()],d=d[new Date(N).getDay()];jzsj=t+" 21:33:30",countTime(),nextq.innerHTML=n,nextsj.innerHTML=e+" 星期"+a,"21:30:30"<o&o<"21:36:00"&T<s&1<r[6].length?(c=f.replace(/\s*/g,""),q.innerHTML=n,sqsj.innerHTML=e+" 星期"+a):(c=f.replace(/\s*/g,""),q.innerHTML=T,sqsj.innerHTML=N+" 星期"+d),T==s&&r[6].length<=1&&(sqsj.innerHTML=e+" 星期"+a);var m=c.split(",");for(i=0;i<m.length;i++)void 0!==m[0]&&!isNaN(m[0])||(m[0]="老"),void 0!==m[1]&&!isNaN(m[1])||(m[1]="澳"),void 0!==m[2]&&!isNaN(m[2])||(m[2]="六"),void 0!==m[3]&&!isNaN(m[3])||(m[3]="合"),void 0!==m[4]&&!isNaN(m[4])||(m[4]="彩"),void 0!==m[5]&&!isNaN(m[5])||(m[5]="开"),void 0!==m[6]&&!isNaN(m[6])||(m[6]="奖"),v[i].className=hm_ys(m[i]),(isNaN(m[0])||isNaN(m[6]))&&($("#kj-sj").show(),$("#kj-hm").show(),$("#kj-sjts").hide()),isNaN(m[i])?h[i].innerHTML="<div style='margin-top: -1px;font-size: 20px;'>"+m[i]+"</div>":h[i].innerHTML=m[i],g[i].innerHTML=lhc.getZodiac("2024",m[i])}else if(4==j.readyState){m=",连,接,,异,常,".split(",");for(i=0;i<7;i++)isNaN(m[i])?h[i].innerHTML="<div style='margin-top: -1px;font-size: 20px;'>"+m[i]+"</div>":h[i].innerHTML=m[i],v[i].className=hm_ys(m[i]),g[i].innerHTML=lhc.getZodiac("2024",m[i])}},j.open("GET",a+Math.random(),!0),j.send(),setInterval(function(){var e=new Date,t=e.getHours(),e=e.getMinutes(),t=check(t),e=check(e);21==t&&33<=e&&e<=36&&(aurl=new Array,aurl[0]=s,aurl[1]=r,iurl=Math.random()*aurl.length,iurl=Math.floor(iurl),j.open("GET",aurl[iurl]+Math.random(),!0),j.send())},1e3),document.addEventListener("visibilitychange",function(){document.hidden||(j.open("GET",a+Math.random(),!0),j.send())});var o=setInterval(function(){var e=f.replace(/\s*/g,"").split(",");void 0!==e[0]&&null!==e[0]&&""!==e[0].trim()||(e[0]="中"),void 0!==e[1]&&null!==e[1]&&""!==e[1].trim()||(e[1]="中"),0<e[0]&&isNaN(e[1])&&(run(),clearInterval(o))},950),l=setInterval(function(){var e=f.replace(/\s*/g,"").split(",");void 0!==e[1]&&null!==e[1]&&""!==e[1].trim()||(e[1]="中"),void 0!==e[2]&&null!==e[2]&&""!==e[2].trim()||(e[2]="中"),0<e[1]&&isNaN(e[2])&&(run(),clearInterval(l))},950),u=setInterval(function(){var e=f.replace(/\s*/g,"").split(",");void 0!==e[2]&&null!==e[2]&&""!==e[2].trim()||(e[2]="中"),void 0!==e[3]&&null!==e[3]&&""!==e[3].trim()||(e[3]="中"),0<e[2]&&isNaN(e[3])&&(run(),clearInterval(u))},950),c=setInterval(function(){var e=f.replace(/\s*/g,"").split(",");void 0!==e[3]&&null!==e[3]&&""!==e[3].trim()||(e[3]="中"),void 0!==e[4]&&null!==e[4]&&""!==e[4].trim()||(e[4]="中"),0<e[3]&&isNaN(e[4])&&(run(),clearInterval(c))},950),d=setInterval(function(){var e=f.replace(/\s*/g,"").split(",");void 0!==e[4]&&null!==e[4]&&""!==e[4].trim()||(e[4]="中"),void 0!==e[5]&&null!==e[5]&&""!==e[5].trim()||(e[5]="中"),0<e[4]&&isNaN(e[5])&&(run(),clearInterval(d))},950),m=setInterval(function(){var e=f.replace(/\s*/g,"").split(",");void 0!==e[5]&&null!==e[5]&&""!==e[5].trim()||(e[5]="中"),void 0!==e[6]&&null!==e[6]&&""!==e[6].trim()||(e[6]="中"),0<e[5]&&isNaN(e[6])&&(run(),hm7sxx=setInterval(y,100),clearInterval(m))},950);function y(){hm7sxsy=setInterval(M,950),clearInterval(hm7sxx)}function M(){var e;0<f.replace(/\s*/g,"").split(",")[6]&&(run(),e=setTimeout(function(){$("#kj-sj").hide(),$("#kj-hm").hide(),$("#kj-sjts").show(),$(".lotery-list").html(""),jl(lajlurl,2),clearTimeout(e)},3e4),clearInterval(hm7sxsy))}}function countTime(){var e,t,i=(new Date).getTime(),n=new Date(jzsj).getTime()-i;0<=n?(e=Math.floor(n/1e3/60/60/24),t=Math.floor(n/1e3/60/60)-24*e,i=Math.floor(n/1e3/60%60),t<10&&(t="0"+t),(n=Math.floor(n/1e3%60))<10&&(n="0"+n),i<10&&(i="0"+i),$(".kj-djs").html('<span class="t-num" id="tian">'+e+'</span> <span class="t-tian">天</span> <span class="t-num" id="shi">'+t+'</span> <span class="t-dv">:</span> <span class="t-num" id="fen">'+i+'</span> <span class="t-dv">:</span> <span class="t-num" id="miao">'+n+"</span>")):$(".kj-djs").html('<span style="padding:2px 8px;background-color: #fc6162;border-radius: 5px;font-size: 16px;font-weight: 600;color: #fff;border: 1px solid rgba(0,0,0,0.1);letter-spacing: 1px;"><img src="/js/kjfc.gif" style="width:18px; height:18px;vertical-align: middle;margin-right:5px;">正在同步开奖</span>'),setTimeout(countTime,1e3)}
