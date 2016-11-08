   window.onload=function()
{    
	// head
     var wechat=$("#wechat")
     var wechat1=$("#wechat1")
	     wechat.onmouseover=function(){
		 wechat1.style.display="block";
	 }
	     wechat.onmouseout=function(){
		 wechat1.style.display="none";
	 }
	 var app=$("#app")
     var app1=$("#app1")
	     app.onmouseover=function(){
		 app1.style.display="block";
	 }
	     app.onmouseout=function(){
		 app1.style.display="none";
	 }
	 var my=$("#my")
     var my1=$("#my1")
	     my.onmouseover=function(){
		 my1.style.display="block";
	 }
	     my.onmouseout=function(){
		 my1.style.display="none";
	 }
	 /*lunbotu*/
	 var banners=$(".banner")
	 var juxings=$("div",$(".juxing")[0])
	 var now=0;

	 banners[0].style.zIndex=4;
	 juxings[0].className="juxing2"
	 var ban=$(".ban")[0]
	 // var t=setInterval(moves,2000)
	 // ban.onmouseover=function()
		//  {
		//  clearInterval(t)
	 // }
		//   ban.onmouseout=function()
		//  {
		//  t=setInterval(moves,2000)
	 // }
	   


	   var tl=setInterval(move,2000)
      ban.onmouseover=function()
		 {
		 clearInterval(tl)
	 }
		  ban.onmouseout=function()
		 {
		 tl=setInterval(move,2000)
	 }
	  function move () {
			 
			 now++
				 if(now==banners.length)
			 {
				 now=0;
			 }
			 for(i=0;i<banners.length;i++)
			 {
				 animate(banners[i],{opacity:0})
				 juxings[i].className="juxing1"
				 
			 }
			   // banners[now].style.opacity=1;
			   animate(banners[now],{opacity:1})
			   juxings[now].className="juxing2"
			  
			 }
			 function move1 () {
			 
			 now--
				 if(now<0)
			 {
				 now=banners.length-1;
			 }
			 for(i=0;i<banners.length;i++)
			 {
				 animate(banners[i],{opacity:0})
				 juxings[i].className="juxing1"
				 
			 }
			   // banners[now].style.opacity=1;
			   animate(banners[now],{opacity:1})
			   juxings[now].className="juxing2"
			  
			 }
		
   /* 选项卡*/
          for(var i=0;i<juxings.length;i++)
	   {
			  juxings[i].index=i;
			  juxings[i].onclick=function()
			{     for(i=0;i<banners.length;i++)
			         {
				 animate(banners[i],{opacity:0})
				 juxings[i].className="juxing1"
				      }

				 animate(banners[this.index],{opacity:1})
				  this.className="juxing2";
				  now=this.index;
				  
			  }
		  }
			// 左右选项卡
			var left=$("#left");
			 console.log(left)
			 var right=$("#right");
			 left.onclick=function(){
				 move1();
			 }
			 right.onclick=function(){
				 move();
			}
			// lunbotu
			//function
			var temais=$(".functionlefttop")
            var span1=$(".spand",$(".functionleft")[0])
			var temaixias=$(".functionleftbot1")
			
			var ps=$("p",$(".functionleft")[0])
			var hxs=$(".hx",$(".functionleft")[0])
			 // temais.
             span1[2].style.display="block";
			 ps[2].style.color="#e5004f";
			 hxs[2].style.background="#e5004f";
			temaixias[2].style.display="block";
			 for(var i=0;i<temais.length;i++)
			 {
			 	temais[i].index=i
			 	temais[i].onmouseover=function()
			 	{   
			 		for(var i=0;i<temaixias.length;i++)
			 		{
			 			temaixias[i].style.display="none";
			 			ps[i].style.color="#333";
			 			hxs[i].style.background="#333";
                        span1[i].style.display="none"

			 		}
                    temaixias[this.index].style.display="block";
                    ps[this.index].style.color="#e5004f";
			 		           hxs[this.index].style.background="#e5004f";
                     span1[this.index].style.display="block";
			 	}
			 }
			 //function
			 //tk
	   var uls=$(".ul",$(".tkrt")[0]);
       var span2=$(".spand",$(".tkrt")[0]);
       span2[0].style.display="block";
			 var tkrbs=$(".tkrb1")
			 tkrbs[0].style.zIndex=10;
			 uls[0].classList.add("ul2");
			 for(var i=0;i<2;i++)
			 {
			 	uls[i].index=i
			 	uls[i].onmouseover=function()
			 	{   
			 		for(var i=0;i<2;i++)
			 		{
			 			tkrbs[i].style.zIndex="5";
			 			uls[i].classList.remove("ul2");
            span2[i].style.display="none";
			 		}
                    tkrbs[this.index].style.zIndex="10";
                    uls[this.index].classList.add("ul2");
                    span2[this.index].style.display="block";
			 	}
			 }
			 // 导航栏
			var navs=$(".na")
			var contents=$(".content")
			for(var i=0;i<navs.length;i++)
			{
				navs[i].index=i;
				navs[i].onmouseover=function()
				{
				for(var i=0;i<navs.length;i++)
				{
					contents[i].style.display="none";
				}
				    contents[this.index].style.display="block";
			    }
			    navs[i].onmouseout=function()
				{
				for(var i=0;i<navs.length;i++)
				{
					contents[i].style.display="none";
				}
				  
			    }
			}
		// 正文轮播	 
		var lunbo=$(".in1")
		for(var i=0;i<lunbo.length;i++)
		{
			remove(lunbo[i])
		}
		function remove(obj){
			var imgs=$("a",obj);
			var left1=$(".left1",obj)[0];
			var right1=$(".right1",obj)[0];
            var btn1s=$(".btn1",obj)
            var now=0;
            var next=0;
            var ww=parseInt(getStyle(imgs[0],"width"))
            btn1s[0].style.background="#e5004f";
            imgs[0].style.left=0;
            imgs[1].style.left=ww+"px";
            var flag6=true
            for(var i=0;i<btn1s.length;i++)
            {   btn1s[i].index=i;
            	btn1s[i].onmouseover=function(){
                if(now==this.index)
                {
                	return;
                }
                else if(now<this.index)
                {
                	imgs[this.index].style.left=ww+"px";
                	animate(imgs[now],{left:-ww});
                	animate(imgs[this.index],{left:0})
                	btn1s[now].style.background="#666"
                	this.style.background="#e5004f"
                }
                else if(now>this.index)
                {
                	imgs[this.index].style.left=-ww+"px";
                	animate(imgs[now],{left:ww});
                	animate(imgs[this.index],{left:0})
                	btn1s[now].style.background="#666"
                	this.style.background="#e5004f"
                }
                now=this.index;
                next=this.index;
            	}
            }
            obj.onmouseover=function(){
            	left1.style.display="block";
            	right1.style.display="block";
            }
            obj.onmouseout=function(){
            	left1.style.display="none";
            	right1.style.display="none";
            }
            function remove1(){
            	next++;
            	if(next==imgs.length)
            	{
            		next=0;
            	}
            	    imgs[next].style.left=ww+"px";
                	animate(imgs[now],{left:-ww});
                	animate(imgs[next],{left:0},function(){flag6=true})
                	btn1s[now].style.background="#666"
                	btn1s[next].style.background="#e5004f"
                	now=next;
            }
            function remove1l()
            {
            	next--;
            	if(next<0)
            	{
            		next=imgs.length-1;
            	}
            	    imgs[next].style.left=-ww+"px";
                	animate(imgs[now],{left:ww});
                	animate(imgs[next],{left:0},function(){flag6=true});
                	btn1s[now].style.background="#666";
                	btn1s[next].style.background="#e5004f";
                	now=next;
            }
            left1.onclick=function(){
            	if(flag6)
            	{remove1l();}
                flag6=false;
            }
            right1.onclick=function(){
            	if(flag6)
            	{remove1();}
                flag6=false;
            }
		}
		// 图标轮播
		var leftbot=$(".leftbot");
		var bland=$(".leftbotbox1");
		for(var i=0;i<9;i++)
		{
			zhuan(bland[i],leftbot[i])
		}
		function zhuan(obj1,obj2){
		var boxs=$(".leftbotbox", obj1)
		var licon=$(".licon",obj2)[0];
		var ricon=$(".ricon",obj2)[0];
		var now4=0;
		var next4=0;
		var flag4=true;
		var ow=parseInt(getStyle(boxs[0],"width"));
		for(var i=0;i<boxs.length;i++)
		{
			if(i==0)
			{
				continue;
			}
			boxs[i].style.left=ow+"px";
		}
		function move4(){
             next4++;
            	if(next4==boxs.length)
            	{
            		next4=0;
            	}
            	     boxs[next4].style.left=ow+"px";
                	animate(boxs[now4],{left:-ow});
                	animate(boxs[next4],{left:0},function(){flag4=true})
                	now4=next4;
		}
		 function move4l()
            {
            	next4--;
            	if(next4<0)
            	{
            		next4=boxs.length-1;
            	}
            	    boxs[next4].style.left=-ow+"px";
                	animate(boxs[now4],{left:ow});
                	animate(boxs[next4],{left:0},function(){flag4=true});
                	now4=next4;
            }
            licon.onclick=function(){
               if(flag4)
               {
               	move4l();
               }
               flag4=false;
            }
            ricon.onclick=function(){
               if(flag4)
               {
               	move4();
               }
               flag4=false;
            }
        }
        //jiaobiao
        var firsts=$(".first");
        var jiaobiaos=$(".jiaobiao")
        var jiaonavs=$(".jiao")[0]
        var imgs=$("img",jiaonavs)
        var sflag=true;
        var now;
        for(var i=0;i<firsts.length;i++)
        {
        	firsts[i].h=firsts[i].offsetTop;
        }    
        window.onscroll=function(){ 
     if(sflag)
        {var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(firsts[0].h<=obj.scrollTop+1200)
        {
              jiaonavs.style.display="block";
        }
        else
        {
        	jiaonavs.style.display="none";

        }
        // 楼层显示

        for(var i=0;i<firsts.length;i++)
        {    
        	if(firsts[i].h<=obj.scrollTop+300&&firsts[i].h>=obj.scrollTop-600)
        	{  
        		 for(var j=0;j<firsts.length;j++)
        	  {
        		 jiaobiaos[j].className="jiaobiao jiaobiao"+j
        		  }
        	   	jiaobiaos[i].className="jiaobiao jiaobiaov";
                 
        	}      	
        }
    }
}
  // 楼层跳转
    
    for(var i=0;i<jiaobiaos.length;i++)
    {   
    	jiaobiaos[i].index=i;
    	if(i<=8)
    	{   
    		jiaobiaos[i].onclick=function(){
    	    sflag=false;
    		animate(document.body,{scrollTop:firsts[this.index].h-100},function(){sflag=true})
    		animate(document.documentElement,{scrollTop:firsts[this.index].h-100},function(){sflag=true})
    		
    	} 
    	    
        }
        else if(i==9)
        {

    		jiaobiaos[i].onclick=function(){
    		sflag=false;
    		animate(document.body,{scrollTop:0},function(){sflag=true})
    		animate(document.documentElement,{scrollTop:0},function(){sflag=true})
    	    }
        }
    }
  //  for(var i=0;i<jiaobiaos.length;i++)
  // {
  //  	jiaobiaos[i].index=i;
  //  	jiaobiaos[i].onmouseover=function()
  //  	{
  //  		for(var i=0;i<jiaobiaos.length;i++)
  //  	    {   
  //  	    	if(i!=now&&i!=this.index)
  //  	    	{
  //  	    		jiaobiaos[i].className="jiaobiao jiaobiao"+i;
  //  	    	}	    
  //  	    }
  //      this.className="jiaobiao jiaobiaov";

  //  	}
  //  	 // jiaobiaos[now].className="jiaobiao jiaobiaov"
   	 
  //  	 jiaobiaos[i].onmouseout=function()
  //  	 {
  //  	 	if(now==this.index)
  //  	 	{
  //  	 		jiaobiaos[now].className="jiaobiao jiaobiaov";
  //  	 	}
  //      jiaobiao[this.index].className="jiaobiao jiaobiao"+i;
  //  	 }
  // }


  // 横线
  var shouji=$(".shouji");
  
  for(var i=0;i<8;i++)
  {
  	hx(shouji[i])
  }
  function hx(obj1){
  var xg=$(".xg",obj1);
  hover(obj1,over,out)
   function over(){
   	animate(xg[0],{width:220})
   	animate(xg[2],{width:220})
   	animate(xg[1],{height:260})
   	animate(xg[3],{height:260})
   }
   function out(){
   	animate(xg[0],{width:0})
   	animate(xg[2],{width:0})
   	animate(xg[1],{height:0})
   	animate(xg[3],{height:0})
   }
}
  var tuijian=$(".tuijian")
  console.log(tuijian)
  for(var i=0;i<tuijian.length;i++)
 { hx1(tuijian[i])}
  function hx1(obj1){
  var txg=$(".txg",obj1);
  hover(obj1,over,out)
   function over(){
   	animate(txg[0],{width:200})
   	animate(txg[2],{width:200})
   	animate(txg[1],{height:250})
   	animate(txg[3],{height:250})
   }
   function out(){
   	animate(txg[0],{width:0})
   	animate(txg[2],{width:0})
   	animate(txg[1],{height:0})
   	animate(txg[3],{height:0})
   }
}
  	var  small=$(".small")
    for(var i=0;i<small.length;i++)
	     {hx2(small[i]);}
 function hx2(obj1){
    var sxg=$(".sxg",obj1);
    hover(obj1,over,out)
    function over(){
   	animate(sxg[0],{width:270})
   	animate(sxg[2],{width:270})
   	animate(sxg[1],{height:182})
   	animate(sxg[3],{height:182})
   }
   function out(){
   	animate(sxg[0],{width:0})
   	animate(sxg[2],{width:0})
   	animate(sxg[1],{height:0})
   	animate(sxg[3],{height:0})
   }
}
}