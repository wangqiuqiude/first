function Mag(){
    this.sBox = document.querySelector(".s_box");
    this.bBox = document.querySelector(".b_box");
    this.span = document.querySelector(".s_box span");
    this.bImg = document.querySelector(".b_box img");
    this.addEvent();

}
Mag.prototype.init= function(){
    var w = this.bBox.offsetWidth / this.bImg.offsetWidth * this.sBox.offsetWidth;
    var h = this.bBox.offsetHeight / this.bImg.offsetHeight * this.sBox.offsetHeight;
    this.span.style.width = w + "px";
    this.span.style.height = h + "px";
}
Mag.prototype.addEvent= function(){
    var that = this;
    this.sBox.addEventListener("mouseover",function(){
        that.over();
        that.init();
    })
    
    this.sBox.addEventListener("mousemove",function(eve){
        var e = eve || window.event;
        that.move(e);
    })

    this.sBox.addEventListener("mouseout",function(){
        that.out();
    })

}
Mag.prototype.over = function(){
    this.span.style.display = "block";
    this.bBox.style.display = "block";
}
Mag.prototype.move = function(e){
    
    var l = e.clientX - this.sBox.offsetLeft - this.span.offsetWidth;
    var t = e.clientY - this.sBox.offsetTop - this.span.offsetHeight ;
    var r = this.sBox.offsetWidth - this.span.offsetWidth;
    var b = this.sBox.offsetHeight - this.span.offsetHeight;
    var x = l / r;
    var y = t / b;
    if(l < 0)l = 0;
    if(t < 0)t = 0;
    if(l > r)l = r;
    if(t > b) t = b; 
    this.span.style.left = l + "px";
    this.span.style.top = t + "px";
    this.bImg.style.left = - x * (this.bImg.offsetWidth - this.bBox.offsetWidth) + 'px';
    this.bImg.style.top = - y * (this.bImg.offsetHeight - this.bBox.offsetHeight) + 'px';
    }
Mag.prototype.out = function(){
    this.span.style.display = "none";
    this.bBox.style.display = "none";
}

new Mag();

var one = document.getElementById("one"); 
var three = document.getElementById("three"); 
var img1 = document.querySelector(".s_box img")
var img2 = document.querySelector(".b_box img")
one.onclick = function(){
    img1.src = "../image/p.jpg";
    img2.src="../image/p.jpg";
}
two.onclick = function(){
    img1.src = "../image/q.jpg";
    img2.src="../image/q.jpg";
}



$(".aside").load("http://localhost/wjl/load/load.html .asi");
$(".logo").load("http://localhost/wjl/load/load.html .logo");
$(".head").load("http://localhost/wjl/load/load.html .header");
$(".quality").load("http://localhost/wjl/load/load.html .quality");
$(".guide").load("http://localhost/wjl/load/load.html .guide");
$(".footer").load("http://localhost/wjl/load/load.html .footer");