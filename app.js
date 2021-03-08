function setter(){
    let fullDate = new Date()
    // Clock
    h = fullDate.getHours()
    m = fullDate.getMinutes()
    s = fullDate.getSeconds()
    // console.log(h, m, s);
    if (h < 10){
        h = "0"+ h
    }
    document.getElementById("hour").innerHTML = h;
    if (m < 10){
        m = "0"+ m
    }
    document.getElementById("min").innerHTML = ":" + m;
    if (s < 10){
        s = "0"+ s
    }
    document.getElementById("sec").innerHTML = ":" + s;

    // Date
    day = fullDate.getDate();
    month = fullDate.getMonth();
    year = fullDate.getFullYear();
    month += 1

    if (day < 10){
        day = "0"+ day
    }
    document.getElementById("day").innerHTML = day;
    if (month < 10){
        month = "0"+ month
    }
    document.getElementById("month").innerHTML = ":" + month;
    if (year < 10){
        year = "0"+ year
    }
    document.getElementById("year").innerHTML = ":" + year;

    console.log(day, month, year);

}



setInterval(setter,1000);