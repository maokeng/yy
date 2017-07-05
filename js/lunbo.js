var num=0;
var ull=document.getElementById("wrap")
var li=432;
var btnr=document.getElementById("btn_right")
var btnl=document.getElementById("btn_left")
var btn=document.getElementById("btn").children
btnr.onclick=function(){
	num++;
    if(num>=5){
    	num=1;
      ull.style.left = 0+"px";
    }
    for(let j=0;j<btn.length;j++){			
			btn[j].className=""	
		}
    if(num>=4){
    	btn[0].className="red"
    }else{
    	    btn[num].className="red"
    }

      move(ull,"left",-num*li)	
}
btnl.onclick=function(){
	num--;
	
    for(let j=0;j<btn.length;j++){
			
			btn[j].className=""
			
		}
    console.log(num)
    //$("#h_a1").html(num)
	if(num<0){
	    btn[3].className="red"
	}else{
	
	 btn[num].className="red"
	}
    	   
    
    if(num<0){
    	num=3;
      ull.style.left = -li*4+"px";
    }
   
    
    
    
    
    

      move(ull,"left",-num*li)	
}
for(let i=0;i<btn.length;i++){
	btn[i].onmouseover=function(){
		
		for(let j=0;j<btn.length;j++){
			
			btn[j].className=""
			
		}
		console.log(i);
		num=i;
		btn[i].className="red"
		 move(ull,"left",-i*li)
	}
}
function getStyle(DOM,name){
		if(DOM.currentStyle){
			return DOM.currentStyle[name];
		}else{
			return getComputedStyle(DOM,false)[name];
		}
	}
function move(DOM,attr,target){
  clearInterval(DOM.timer)
  DOM.timer=setInterval(function(){
    if(attr=='opacity'){
      var cur=Math.round(parseFloat(getStyle(DOM,attr))*100)
    }else{
      var cur=parseInt(getStyle(DOM,attr));
    }
    var speed=(target-cur)/8;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    if(cur==target){
      clearInterval(DOM.timer)
    }else{
      if(attr=='opacity'){
        DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
        DOM.style.opacity=(cur+speed)/100
      }else{
        DOM.style[attr]=cur+speed+'px';
      }
    }
  },30)
}