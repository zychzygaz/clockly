


function setter(){
    fullDate = new Date()

    console.log(fullDate);

    h = fullDate.getHours()
    m = fullDate.getMinutes()
    s = fullDate.getSeconds()
    console.log(h, m, s);
    if (h < 10){
        h = "0"+ h
    }
    document.getElementById("h").innerHTML = h;
    if (m < 10){
        m = "0"+ m
    }
    document.getElementById("min").innerHTML = ":" + m;
    if (s < 10){
        s = "0"+ s
    }
    document.getElementById("sec").innerHTML = ":" + s;
}



setInterval(setter,1000);