

define(function(){
    // 楼层的效果
    class Floor{
        constructor(options){
            // btn这个属性保存的值，是在下拉菜单中获取，返回并传进来的
            this.btn = options.btns;
            this.f = options.floor;
            this.data = "这是楼层的数据";
            this.offTop=$(".live").offset().top;




            this.interTop = $(".interval").offset().top;
            this.hotTop = $(".hot-ac").offset().top;
            this.newTop = $(".new").offset().top;
            this.texTop = $(".textiles").offset().top;
            this.eleTop = $(".electric").offset().top;
            this.scTop=0;
            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.btn.on("click","li",function(){
                var index = $(this).index();
                var t = that.f.eq(index);
                // console.log(t.offset().top);
                
                // $(document).scrollTop(t.offset().top);

                $("html").stop().animate({
                    scrollTop:t.offset().top
                })
            })
            $(document).scroll(function(){
                that.scTop=$(this).scrollTop();//获取到滚动条拉动的距离
                //console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
                if(that.scTop>=that.offTop){
                //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
                    $(".aside-l").fadeIn()
                }else{
                    $(".aside-l").fadeOut();
                }
                if(that.scTop>that.offTop && that.scTop<=that.interTop){
                    $(".li").css({
                        background:"red",
                        color:"#fff"
                    }).siblings().css({
                        background:"",
                        color:""
                    })}
                if(that.scTop>=that.interTop && that.scTop<that.hotTop){
                    $(".int").css({
                        background:"red",
                        color:"#fff"
                    }).siblings().css({
                        background:"",
                        color:""
                    })
                }else if(that.scTop>=that.hotTop && that.scTop<that.newTop){
                    $(".ho").css({
                        background:"red",
                        color:"#fff"
                    }).siblings().css({
                        background:"",
                        color:""
                    })
                }else if(that.scTop>=that.newTop && that.scTop<that.texTop){
                    $(".ne").css({
                        background:"red",
                        color:"#fff"
                    }).siblings().css({
                        background:"",
                        color:""
                    })
                }else if(that.scTop>=that.texTop && that.scTop<that.eleTop){
                    $(".jf").css({
                        background:"red",
                        color:"#fff"
                    }).siblings().css({
                        background:"",
                        color:""
                    })
                }else if(that.scTop>=that.eleTop){
                    $(".el").css({
                        background:"red",
                        color:"#fff"
                    }).siblings().css({
                        background:"",
                        color:""
                    })
                }
    
            })
        }
    }

    return Floor;
})
        
