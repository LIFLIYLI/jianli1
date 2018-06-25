setTimeout(function(){
 kaishi.classList.remove('active')
},000)

let specialTags = document.querySelectorAll('[date-x]')
for(let i =0;i<specialTags.length; i++){
    specialTags[i].classList.add('animate')
}

    hanshu() 
window.onscroll=function(){         //监听用户窗口滑动事件
    if(window.scrollY>0){
        topNavBar.classList.add('sticky')
    }else
   topNavBar.classList.remove('sticky')
     hanshu()   
}

function hanshu(){
    let specialTags=document.querySelectorAll('[date-x]')
   let minIndex=0
for(let i =1;i<specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) <Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
      minIndex = i     
    }
  }    
    specialTags[minIndex].classList.remove('animate') 
    let id = specialTags[minIndex].id
    let a=document.querySelector('a[href="#'+id+'"]')
    let li=a.parentNode
    let brothersAndMe=li.parentNode.children
    for(let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove('highlight') 
      
    }
    li.classList.add('highlight')
}


let liTags = document.getElementsByClassName('rrr')         //通过Class名字为rrr来获取所有的标签
for(let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(h){             //监听鼠标附上去的事件
    h.currentTarget.classList.add('active')           //给目标新加一个class   
    }               
    liTags[i].onmouseleave=function(h){         //监听鼠标附出的事件
    h.currentTarget.classList.remove('active')
    }                
}

let aTags = document.querySelectorAll('nav>ul>li>a')   //通过路径获取标签
for(let i=0;i<aTags.length;i++){                //遍历i
    aTags[i].onclick=function(p){                  //监听目标标签点击事件
        p.preventDefault()                      //阻止系统默认设置
        let a=p.currentTarget           //让A等于点击目标的标签  <a>
        let href=a.getAttribute('href')     //让href= 点击目标标签的href对应的id                
        let element=document.querySelector(href)   //通过href获得id为（目标标签对应的id）的标签
        let Top=element.offsetTop       //让TOP=新目标标签的Y距离（距离页面顶部的绝对距离）

        let first=window.scrollY        
        let two=Top-100
        let t=Math.abs(two-first)*2
        if (t>1500){
             t=1500
        }
         //平滑跳转代码：
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
            var coords = {  y: first }; 
            var tween = new TWEEN.Tween(coords) 
                    .to({y: two}, t)
                    .easing(TWEEN.Easing.Cubic.InOut) 
                    .onUpdate(function() { 
                    window.scrollTo(0,coords.y)            
                    })
                    .start();
        }
}

//动画条上面引用


portfolio1.onclick=function(){
    portfolio4.className='bar state-1'   
  }
  portfolio2.onclick=function(){
    portfolio4.className='bar state-2'   
  }
  portfolio3.onclick=function(){
    portfolio4.className='bar state-3'   
  } 
          

