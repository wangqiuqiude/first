
    
$(".aside").load("http://localhost/wjl/load/load.html .asi");
$(".logo").load("http://localhost/wjl/load/load.html .logo",fn);
$(".head").load("http://localhost/wjl/load/load.html .header",head);
class Shopping{
    constructor(){
        this.cen = document.querySelector(".cen");
        this.url = "http://localhost/wjl/data/list.json";
        this.init();
        this.addEvent();
    }
    init(){
        var that = this;
        ajaxPost(this.url,function(res){
            that.res = JSON.parse(res);
            that.display();
        })
    }
    addEvent(){
        var that = this;
        this.cen.addEventListener("click",function(eve){
            var e = eve || window.event;
            if(e.target.className == "btn"){
                that.id = e.target.parentNode.getAttribute("qwe");
                //存 cookie
                that.setCookie();
            }
        })
    }
    setCookie(){
        // console.log(this.id);
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        if(this.goods.length == 0){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var i = 0;
            var onoff = this.goods.some((val,index)=>{
                i = index;
                return val.id == this.id;
            })
            //有一个正确即返回true，就停止
            if(onoff){
                //onoff为true说明里面已经有数据了，所以，老商品
                this.goods[i].num++;
            }else{
                this.goods.push({
                id:this.id,
                num:1
                })
            }
            //后来存

            //第一次存
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
    display(){
        var str = "";
        for(var i = 0;i<this.res.length;i++ ){
            str += `<li>
            <a href="details.html"><img src="${this.res[i].url}" alt=""></a>
            <p class="goodsName"><a href="">${this.res[i].tip}</a></p>
            <p class="price" zxc="${this.res[i].goodsId}">
                <span class="pri">${this.res[i].price}</span>
                <b class="btn">加入购物车</b>
                <a href="car.html">去结算<a>
            </p>
            
        </li>`
        }
        this.cen.innerHTML = str;
    }
}
new Shopping();

$(".quality").load("http://localhost/wjl/load/load.html .quality");
$(".guide").load("http://localhost/wjl/load/load.html .guide");
$(".footer").load("http://localhost/wjl/load/load.html .footer");
function fn(){
    $(".center").find("i,span").on("click",function(){
        $(".opt").slideToggle(100).find("li").hover(function(){
            $(this).css({
                background:"#ccc"
            })
        },function(){
            $(this).css({
                background:"#fff"
            })
        })
    })
    $(".opt").find("li").click(function(){
        $(this).parent().prev(".center").find("span").html($(this).html()).end().end().hide()
    })
    $(".call").find("p").hover(function(){
        $(this).css({background:"#ffcc00"})
    },function(){
        $(this).css({background:"#f9f9f9"})
    })
    $(".navlist").find("li").hover(function(){
        $(this).find("a").css({color:"#ff3000"})

    },function(){
        $(this).find("a").not(".aaa").css({color:"#000"})
    })

}

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

