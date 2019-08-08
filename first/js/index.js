$(".ban").banner({
    items:$(".ban").find("img"),        //必传
    left:$(".ban").find("#btnL"),       //可选
    right:$(".ban").find("#btnR"),     //可选
    autoPlay:true,                          //可选，默认有自动播放
    delayTime:3000,                         //可选，默认2000
    moveTime:300,                          //可选，默认300
    index:0,
    list:true                                //可选，默认0
})

$(".col").find("li").hover(function(){
    $(this).css({background:"#ffcc00"})
    $(this).children(".hidelist").show()
},function(){
    $(this).css({background:"#fff"})
    $(this).children(".hidelist").hide()
})
$(".hidelist-l").find("a").find("span").hover(function(){
    $(this).css({color:"red"})
},function(){
    $(this).css({color:"#000"})
})

// 选项卡功能
$(".yester").on("click",function(){
    $(this).children("a").css({
        borderBottom:"2px solid #ff5500"
    }).end().prev(".today").children("a").css({
        borderBottom:0
    })
    $(".yester2").show().siblings(".today2").hide();
})
$(".today").on("click",function(){
    $(this).children("a").css({
        borderBottom:"2px solid #ff5500"
    }).end().siblings(".yester").children("a").css({
        borderBottom:0
    })
    $(".today2").show().siblings(".yester2").hide();
})

class Reqdata{
    constructor(){
        this.live = document.querySelector(".today2");
        this.url = "http://localhost/wjl/data/goods.json";
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
                <span class="p-after">${this.res[i].price}</span>
                <span class="p-before">${this.res[i].oldprice}</span>
            </p>
        </li>`
        }
        this.live.innerHTML = str;
    }
}
new Reqdata();

$(".aside").load("http://localhost/wjl/load/load.html .asi");
$(".logo").load("http://localhost/wjl/load/load.html .logo",fn);
$(".head").load("http://localhost/wjl/load/load.html .header",head);
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


    class Search {
        constructor(){
            this.ipt = document.getElementById("ipt");
            this.list = document.getElementById("list");
            this.init();
        }
        init(){
            var that= this;
            this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
            this.ipt.onkeyup = function(){
                that.v = this.value;
                that.list.style.display = "block";
                if(that.v == ""){
                    that.list.style.display = "none";
                }
                that.load();
            }
        }
        load(){
            var that = this;
            jsonp(this.url,function(res){
                that.res = res;
                that.display();
            },{
                wd:this.v,
                cb:"odjjawkdj",
                columnName:"cb"
            })
        }
        display(){
            // console.log(this.res.s);
            var str = "";
            for(var i =0;i<this.res.s.length;i++){
                str += `<li>${this.res.s[i]}</li>`;
            }
            this.list.innerHTML = str;
            
        }
    }
    new Search();

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


