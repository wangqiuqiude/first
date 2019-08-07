require.config({
    baseUrl:"module",
    paths:{
        list:"http://localhost/wjl/module/list",
        floor:"http://localhost/wjl/module/floor",
        jq:"http://localhost/wjl/js/jquery1.12.4"
    }
})

require(["jq","floor","list"],function(_,f,l){
    var mylist = new l({
        allBtn:$(".aside-l"),
        ool:$(".aside-l").children("li")
    }) 
    new f({
        btns:mylist.btn,
        floor:$(".floor")
    })
})