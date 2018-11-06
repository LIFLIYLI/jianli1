!function(){
    let liTags = document.getElementsByClassName('rrr')         //通过Class名字为rrr来获取所有的标签
    for(let i=0;i<liTags.length;i++){
        liTags[i].onmouseenter=function(h){             //监听鼠标附上去的事件
        h.currentTarget.classList.add('active')           //给目标新加一个class   
        }               
        liTags[i].onmouseleave=function(h){         //监听鼠标附出的事件
        h.currentTarget.classList.remove('active')
        }                
    }
}.call()