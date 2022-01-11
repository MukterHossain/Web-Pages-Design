// scroll top button
var btn = document.getElementById("mybtn");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
function topnow(){
    document.body.scrollTop =  0;
    document.documentElement.scrollTop = 0;
}
// scroll top button ended

//slider coding
var i= 0;
var slider =[];
    slider[0] = "image/slider1.jpg";
    slider[1] = "image/slider2.jpg";
    slider[2] = "image/slider3.jpg";
    slider[3] = "image/slider4.jpg";
    slider[4] = "image/slider5.jpg";
    slider[5] = "image/slider6.jpg";

var sliderbox = document.getElementById("slideris");
function changeImg(){
    sliderbox.style.background = 'url("'+slider[i]+'")';
    if(i< slider.length -1){
        i++;
    } else{
        i = 0;
    }
    
}
setInterval("changeImg()", 5000);

//slider coding 