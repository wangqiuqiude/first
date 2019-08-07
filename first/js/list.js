
    
$(".aside").load("http://localhost/wjl/load/load.html .asi");
$(".logo").load("http://localhost/wjl/load/load.html .logo",fn);
$(".head").load("http://localhost/wjl/load/load.html .header",head);
class Reqdata{
    constructor(){
        this.url = "http://localhost/wjl/data/list.json";
        this.cen = document.querySelector(".cen")
        this.load()
    }
    load(){
        var that = this;
        ajaxPost(this.url,function(res){
            that.res =JSON.parse(res);
            that.display()
        })
    }
    display(){
        var str = "";
        for(var i = 0;i<this.res.length;i++ ){
            str += `<li>
            <a href=""><img src="${this.res[i].url}" alt=""></a>
            <p class="goodsName"><a href="">${this.res[i].tip}</a></p>
            <p class="price">
                <span class="pri">${this.res[i].price}</span>
            </p>
        </li>`
        }
        this.cen.innerHTML = str;
    }
}
new Reqdata();
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

