define(function(){
    // 下拉菜单的效果
    class List{
        constructor(options){
            this.btn = options.allBtn;
            this.ol = options.ool;
            this.data = "这是下拉菜单的数据";

            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.btn.on("mouseenter","li",function(){
                $(this).css({
                    background:"red",
                    color:"#fff"
                }).siblings("li").css({
                    background:"",
                    color:"#000"
                })
            })
        }
    }


    return List;
})