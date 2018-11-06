!function(){
    var view = document.querySelector('nav')
    var controller={
        view:null,
        aTags:null,
        init:function(view){
            this.view=view            
            this.inirAnimation()
            this.bindEvents()
            
        },
        inirAnimation:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement:function(element){
            let Top=element.offsetTop       //让TOP=新目标标签的Y距离（距离页面顶部的绝对距离）            
            let first=window.scrollY        
            let two=Top-100
            let t=Math.abs(two-first)*2
            if (t>1500){t=1500}
             //平滑跳转代码：
                var coords = {  y: first }; 
                var tween = new TWEEN.Tween(coords) 
                        .to({y: two}, t)
                        .easing(TWEEN.Easing.Cubic.InOut) 
                        .onUpdate(function() { 
                        window.scrollTo(0,coords.y)            
                        })
                        .start();
        },
        bindEvents:function(){
            let aTags = this.view.querySelectorAll('nav>ul>li>a')   //通过路径获取标签
            for(let i=0;i<aTags.length;i++){                //遍历i
                aTags[i].onclick=(p)=>{                  //监听目标标签点击事件
                    p.preventDefault()                      //阻止系统默认设置
                    let a=p.currentTarget           //让A等于点击目标的标签  <a>                    
                    let href=a.getAttribute('href')     //让href= 点击目标标签的href对应的id                
                    let element=document.querySelector(href)   //通过href获得id为（目标标签对应的id）的标签
                    this.scrollToElement(element)
                    }
            }
        },
    }   
    controller.init(view)
}.call()
