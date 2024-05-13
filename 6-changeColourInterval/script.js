// const changeMe=function(){
//     console.log("HI",Date.now())
// }

// const setter =setInterval(changeMe,2000)

// clearInterval(setter)


const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(i=0;i<6;i++){
       color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalId
const startChangingColor=function(){
if(!intervalId){
    intervalId=setInterval(changeBgColor,1000);

}
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=NULL
}


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)