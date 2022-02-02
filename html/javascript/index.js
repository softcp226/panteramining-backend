
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".tittle").innerHTML=""

    let text="High Returns With Calculated Risk"
let number=0
const typeWritter=()=>{
if(text.length>number){
   document.querySelector(".tittle").innerHTML+=text[number]
   number++
   console.log(number)
}
var id=setTimeout(()=>typeWritter(),100)
}

typeWritter()

})