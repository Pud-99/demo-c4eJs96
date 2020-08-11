let sologan = document.getElementById("sologan");
let about = document.getElementById("about");
window.onload = function(){
    showup();
    
function showup(){
    setTimeout(function(){
    sologan.style.display = "block";
    about.style.opacity = "1";
    },800)
}

let dbpic = document.getElementById("bdpic")
let abpic = document.getElementById("abpic")
let share = document.getElementById("share")
let rdText = document.getElementById("rdText")
let abText = document.getElementById("abText")
let am2 = document.getElementById("am2");
let spAnimate1 = document.getElementById("spAnimate1")
let spAnimate2 = document.getElementById("spAnimate2")
let spAnimate3 = document.getElementById("spAnimate3")
let spAnimate4 = document.getElementById("spAnimate4")
let spAnimate5 = document.getElementById("spAnimate5")
let spAnimate6 = document.getElementById("spAnimate6")
window.addEventListener("scroll",function(){
    let x = pageYOffset;
    if (x > 500 && x < 1000){
        am2.style.animation = "longbottom 1s ease-in-out";
        setTimeout(function(){
            bdpic.style.animation = "border-pic 1s ease-in-out";
            abpic.style.animation = "ab-pic 1s ease-in-out"
            rdText.style.animation = "random-text 1s ease-in-out ";
            share.style.animation = "share 1s ease-in-out";
        },200)
        setTimeout(function(){
            bdpic.style.display='block';
            abpic.style.display='block';
            abText.style.display='block';
            share.style.display='block';
            rdText.style.display='block';
        },300);
            setTimeout(function(){
            am2.style.width = "14vw";
        },900)
    }
    let y = pageYOffset
    if(y>1100 && y < 1300){
        spAnimate1.style.animation ='sp-animate1 1s ease-in-out';
        spAnimate2.style.animationDelay='1s';
        spAnimate2.style.animation ='sp-animate2 1s ease-in-out';
        spAnimate3.style.animation ='sp-animate1 1s ease-in-out';
        spAnimate4.style.animationDelay='1s';
        spAnimate4.style.animation ='sp-animate2 1s ease-in-out';
        spAnimate5.style.animation ='sp-animate1 1s ease-in-out';
        spAnimate6.style.animationDelay='1s';
        spAnimate6.style.animation ='sp-animate2 1s ease-in-out';
        setTimeout(function(){
            spAnimate1.style.width='6vw';
            spAnimate1.style.top='-4vh';
            spAnimate1.style.right='1vw';
            spAnimate2.style.display='block'
            spAnimate4.style.display='block'
            spAnimate6.style.display='block'
            spAnimate3.style.width='6vw';
            spAnimate3.style.top='-4vh';
            spAnimate3.style.right='1vw';
            spAnimate5.style.width='6vw';
            spAnimate5.style.top='-4vh';
            spAnimate5.style.right='1vw';
        },900)
    }
})
};

// function show(a){
//     document.getElementById(`show_${a}`);
// }
// for(let i= 1 ; i<5 ; i++){
//     fun
//  document.getElementById(`info_${i}`);
//  document.getElementById(`show_${i}`);
// }
