function ajaxGet(url,callback,data){
    data = data ? data : {};
    var str = "";
    for(var i in data){
        str = str + `${i}=${data[i]}&`;
    }
    var d = new Date();
    url = url + "?" + str +"__qft="+ d.getTime();
    var xhr = new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.responseText);
        }
    } 
    xhr.send();
}

function ajaxPost(url,callback,data){
    data = data ? data : {};
    var str = "";
    for(var i in data){
        str = str + `${i}=${data[i]}&`;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("post",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.responseText);
        }
    } 
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(str);
}

function jsonp(url,callback,data){
    date = data ? data : {};
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    var d = new Date();
    url = url +"?" + str +"__qft="+d.getTime();
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);

    window[data[data.columnName]] = function(res){
        callback(res);
    }
}