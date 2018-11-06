!function(){
        
        //加载小圆圈
    setTimeout(function(){
        kaishi.classList.remove('active')
    },500)

       //评论区数据库
    var view=  document.querySelector('section.massage')
    var model={
        fetch:function(){
            var query = new AV.Query('neirong');
            return query.find()
        },
        save:function(name,content){
            var neirong = AV.Object.extend('neirong');
            var llll=new neirong()
            return llll.save({
                    'name':name, 
                    'content':content
                })
        },
    }
    var controller = {
        view:null,
        model:null,
        messageList:null,
        init:function(view){
            this.view=view
            this.model=model
            this.messageList=view.querySelector('#messageList')
            this.form=view.querySelector('form')
            this.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        initAV:function(){
            var APP_ID = 'XHNb2aBz7oPiF6OMh45IpSpW-gzGzoHsz';
            var APP_KEY = 'lGauc7q47glzITY6hF6tqt1w';
            
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            });
        },
                    //读取
        loadMessages:function(){
            model.fetch().then(
                (todos)=> {
                let array=todos.map((item)=>item.attributes)
                    array.forEach((item)=>{
                    let li = document.createElement('li')
                    li.innerText =`${item.name}:${item.content}`
                    this.messageList.appendChild(li)
                    });
                }
            )
        },
        //存储       
        bindEvents:function(){         
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()//阻止刷新页面
                this.xl() 
            })           
        },
        xl:function(){
                let myForm=this.form
                let content=myForm.querySelector('input[name=content]').value
                let name=myForm.querySelector('input[name=name]').value
                model.save(name,content).then(function(object){
                    let li = document.createElement('li')
                    li.innerText =`${object.attributes.name}:${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value=''
                })
        }
    } 
controller.init(view,model)
}.call()
