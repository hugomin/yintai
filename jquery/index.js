$(document).ready(function(){
//  轮播图
   var banner=$(".banner");
   var ban=$(".ban")
   var juxings=$(".juxing div")
   console.log(juxings)
   juxings.eq(0).css("background","#e5004f");
   banner.eq(0).css("z-index",4)
   var now=0;
   var next=0;
   var left=$("#left")
   var right=$("#right")
   var flags=true;
   juxings.click(function(){
    var index=juxings.index($(this)) 
    if(index==now){
      return;
    }
    else{
      banner.eq(now).animate({opacity:0})
    juxings.eq(now).css("background","#211616");
    banner.eq(index).animate({opacity:1})
    juxings.eq(index).css("background","#e5004f");
    }
    
    now=index
   })
       function move(){
      next=now+1;
      if(next==banner.length)
      {
        next=0;
      }
          for(var i=0;i<banner.length;i++)
          {
            banner.eq(i).css({"opacity":0,"zIndex":0})
            juxings.eq(i).css("background","#211616")
           }
          banner.eq(next).css({"opacity":1,"zIndex":0}).end().eq(now).css({"opacity":1,"zIndex":1}).
          animate({"opacity":0},function(){flags=true;})
          juxings.eq(now).css("background","#211616").end().eq(next).css("background","#e5004f")
          now=next;
    }
    function movel(){
      next=now-1;
      if(next<0)
      {
        next=banner.length-1;
      }
          for(var i=0;i<banner.length;i++)
          {
            banner.eq(i).css({"opacity":0,"zIndex":0})
            juxings.eq(i).css("background","#211616")
           }
          banner.eq(next).css({"opacity":1,"zIndex":0}).end().eq(now).css({"opacity":1,"zIndex":1}).
          animate({"opacity":0},function(){flags=true;})
          juxings.eq(now).css("background","#211616").end().eq(next).css("background","#e5004f")
          now=next;
    }
      var t=setInterval(move,2000)
      left.click(function(){
        if(flags){
          movel();
        }
        flags=false;
      })
      right.click(function(){
        if(flags){
          move();
        }
        flags=false;
      })
      ban.hover(function(){
        clearInterval(t);
      },function(){
        t=setInterval(move,2000)
      })
      
      
//   temai
            var temais=$(".functionlefttop")
            var span1=$(".functionleft .spand")
      var temaixias=$(".functionleftbot1")
      
      var ps=$(".functionleft p")
      var hxs=$(".functionleft .hx")
      span1.eq(2).css("display","block")
       ps.eq(2).css("color","#E5004F")
       hxs.eq(2).css("background","#E5004F")
      temaixias.eq(2).css("display","block")
      temais.mouseover(function(){
      span1.css("display","none")
       ps.css("color","#333")
       hxs.css("background","#333")
       temaixias.css("display","none")
        var index=$(this).index(".functionlefttop")
        span1.eq(index).css("display","block")
        ps.eq(index).css("color","#E5004F")
        hxs.eq(index).css("background","#E5004F")
        temaixias.eq(index).css("display","block")
      })
      var shouji=$(".shouji")
      shouji.hover(function(){
        var xg=$(".xg",$(this))
        xg.eq(0).animate({"width":220}).end().eq(2).animate({"width":220}).end().
        eq(1).animate({"height":260}).end().eq(3).animate({"height":260})
      },function(){
        var xg=$(".xg",$(this))
        xg.eq(0).animate({"width":0}).end().eq(2).animate({"width":0}).end().
        eq(1).animate({"height":0}).end().eq(3).animate({"height":0})
      })
      
//   同款

            var uls=$(".tkrt .ul");
            var span2=$(".tkrt .spand");
            span2.eq(0).css("display","block")
      var tkrbs=$(".tkrb1")
      tkrbs.eq(0).css("z-index",10)
      uls.eq(0).addClass("ul2")
      uls.mouseover(function(){
        var index=$(this).index(".ul")
        tkrbs.css("z-index",5)
        uls.removeClass("ul2")
                span2.css("display","none")
                tkrbs.eq(index).css("z-index",10)
        uls.eq(index).addClass("ul2")
                span2.eq(index).css("display","block")
               
      })
      var tuijian=$(".tuijian")
      tuijian.hover(function(){
        var xg=$(".txg",$(this))
        xg.eq(0).animate({"width":200}).end().eq(2).animate({"width":200}).end().
        eq(1).animate({"height":250}).end().eq(3).animate({"height":250})
      },function(){
        var xg=$(".txg",$(this))
        xg.eq(0).animate({"width":0}).end().eq(2).animate({"width":0}).end().
        eq(1).animate({"height":0}).end().eq(3).animate({"height":0})
      })
      
//  楼层轮播
      var htu=$(".in1")
     
      for(var i=0;i<htu.length;i++){
          bianse(htu.eq(i))
      } 
      function bianse(obj)
      {
       var btns=$(".btn1",obj)
       var left1=$(".left1",obj)
       var right1=$(".right1",obj)
      btns.eq(0).css("background","#E5004F")
      var rnow=0;
      var rnext=0;
      var imgs=$("a",obj)
      var ww=imgs.width() 
      imgs.eq(0).css("left",0);
      imgs.eq(1).css("left",ww)
      function remove(){
        rnext=rnow+1;
              if(rnext==2)
              {
                return;
              }
                  imgs.eq(rnext).css("left",ww).end().eq(rnow).animate({"left":-ww}).
                  end().eq(rnext).animate({"left":0})
                  btns.eq(rnow).css("background","#666").end().eq(rnext).css("background","#E5004F")
                  rnow=rnext;
      }
      function removel(){
        rnext=rnow-1;
              if(rnext<0)
              {
                return;
              }
                  imgs.eq(rnext).css("left",-ww).end().eq(rnow).animate({"left":ww}).
                  end().eq(rnext).animate({"left":0})
                  btns.eq(rnow).css("background","#666").end().eq(rnext).css("background","#E5004F")
                  rnow=rnext;
      }
      left1.click(function(){
        removel();
      })
      right1.click(function(){
        remove();
      })
      btns.click(function(){
         var index=btns.index($(this));
         if(index==rnow){
          return
         }
         else if(index>rnow){
           imgs.eq(index).css("left",ww).end().eq(rnow).animate({"left":-ww}).
             end().eq(index).animate({"left":0})
             btns.eq(rnow).css("background","#666").end().eq(index).css("background","#E5004F")
             rnow=index;
         }
         else if(index<rnow)
         {
          imgs.eq(index).css("left",-ww).end().eq(rnow).animate({"left":ww}).
            end().eq(index).animate({"left":0})
            btns.eq(rnow).css("background","#666").end().eq(index).css("background","#E5004F")
            rnow=index;
         }
      })
      }
      var  small=$(".small")
      small.hover(function(){
        var xg=$(".sxg",$(this))
        xg.eq(0).animate({"width":270}).end().eq(2).animate({"width":270}).end().
        eq(1).animate({"height":182}).end().eq(3).animate({"height":182})
      },function(){
        var xg=$(".sxg",$(this))
        xg.eq(0).animate({"width":0}).end().eq(2).animate({"width":0}).end().
        eq(1).animate({"height":0}).end().eq(3).animate({"height":0})
      })

//图文轮播
      var leftbot=$(".leftbot");
    var bland=$(".leftbotbox1");
      for(var i=0;i<9;i++)
    {
      zhuan(bland.eq(i),leftbot.eq(i))
    }
     function zhuan(obj1,obj2){
      var boxs=$(".leftbotbox", obj1)
    var licon=$(".licon",obj2);
    var ricon=$(".ricon",obj2);
    var now4=0;
    var next4=0;
    var zflag=true;
    var ow=boxs.width();
    boxs.css("left",ow)
    boxs.eq(0).css("left",0)
    function move4(){
             next4++;
              if(next4==boxs.length)
              {
                next4=0;
              }
                  boxs.eq(next4).css("left",ow).end().eq(now4).animate({"left":-ow}).
                  end().eq(next4).animate({"left":0},function(){zflag=true})
                  now4=next4;
    }
    function move4l(){
             next4--;
              if(next4<0)
              {
                next4=boxs.length-1;
              }
                  boxs.eq(next4).css("left",-ow).end().eq(now4).animate({"left":ow}).
                  end().eq(next4).animate({"left":0},function(){zflag=true})
                  now4=next4;
    }
    licon.click(function(){
      if(zflag){
        move4l();
      }
      zflag=false
    })
    ricon.click(function(){
      if(zflag){
        move4();
      }
      zflag=false
    })
     }
     
     
//   loucengtiaozhuan
        var firsts=$(".first");
        var jiaobiaos=$(".jiaobiao2")
        var jiaonavs=$(".jiao")
        var imgs=$("img",jiaobiaos)
        var snow; 
        $(window).scroll(function(){
        
          var obj=document.body.scrollTop?document.body:document.documentElement;
           if(firsts.eq(0).offset().top<=obj.scrollTop+1200)
        {
              jiaonavs.css("display","block")
        }
        else
        {
          jiaonavs.css("display","none")

        }
        for(var i=0;i<firsts.length;i++)
        {    
          if(firsts.eq(i).offset().top<=obj.scrollTop+300&&firsts.eq(i).offset().top>=obj.scrollTop-600)
          {  
             for(var j=0;j<firsts.length;j++)
            {
                  imgs.eq(j).css("display","block")
              }
              
                 imgs.eq(i).css("display","none")  
          }       
        } 
        })
       
 
        jiaobiaos.click(function(){
           
          var index=jiaobiaos.index($(this));
          if(index<=8)
       {    
        $("body").animate({"scrollTop":firsts.eq(index).offset().top-100})          
        }       
           else{
//          $("body").animate({"scrollTop":0})  
           }
        })
        jQuery.backtop(jiaobiaos.eq(9),1000)
     
})
