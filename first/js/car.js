class Car{
    constructor(){
        this.tbody = document.querySelector("tbody");
        this.url = "http://localhost/wjl/data/list.json";
        this.load();
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.tbody.addEventListener("click",function(eve){
            var e = eve || window.event;
            if(e.target.className == "del"){
                that.id = eve.target.parentNode.getAttribute("index");
                e.target.parentNode.remove();
                that.changeCookie(function(i){
                    that.goods.splice(i,1);
                });
                
            }
        })
        this.tbody.addEventListener("input",function(eve){
            var e = eve || window.event;
            if(e.target.className == "num"){
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                that.changeCookie(function(i){
                    that.goods[i].num = eve.target.value;
                });
                
            }
        })
    }
    changeCookie(callback){
        var i = 0;
        this.goods.some((val,index)=>{
            i = index;
            return val.id == this.id;
        })
        callback(i);
        setCookie("goods",JSON.stringify(this.goods));
    }
    load(){
        var that = this;
        ajaxPost(this.url,function(res){
            that.res = JSON.parse(res);
            that.getCookie();
        })
    }
    getCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        this.display();
    }
    display(){
        var str = "";
        for(var i = 0; i< this.goods.length;i++){
            for(var j = 0;j<this.res.length;j++){
                if(this.res[j].goodsId == this.goods[i].id){
                    str += `<tr index = "${this.res[j].goodsId}">
                                <td><img src="${this.res[j].url}"></td>
                                <td>${this.res[j].name}</td>
                                <td>${this.res[j].price}</td>
                                <td><input type="number" min=1 class="num" value="${this.goods[i].num}"></td>
                                <td class="del">删除</td>
                            </tr>`
                }
            }
            
        }
        this.tbody.innerHTML = str;
    }
}
new Car();   






$(".aside").load("http://localhost/wjl/load/load.html .asi");
$(".head").load("http://localhost/wjl/load/load.html .header",head);
$(".quality").load("http://localhost/wjl/load/load.html .quality");
$(".guide").load("http://localhost/wjl/load/load.html .guide");
$(".footer").load("http://localhost/wjl/load/load.html .footer");


function head(){
    var a = localStorage.getItem("info");
    // console.log(a);
    if(a){
        $(".left-t").show().find("span").html(JSON.parse(a).user);
        $(".left").hide();
    }else{
        $(".left-t").hide();
        $(".left").show();
    }
    $(".left-t").find("a").click(function(){
        localStorage.removeItem("info");
        $(".left-t").hide();
        $(".left").show();
    })
}
