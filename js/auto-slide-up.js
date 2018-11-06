!function (){
    let specialTags = document.querySelectorAll('[date-x]')
    for(let i =0;i<specialTags.length; i++){
        specialTags[i].classList.add('animate')
    }
    AddandRemoveAnimate() 
    window.addEventListener('scroll',function(x){
        AddandRemoveAnimate()  
    })


    //跳转的方法
    function AddandRemoveAnimate(){
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
}.call()
