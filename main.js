const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsE1 = document.querySelectorAll("img");
console.log(imgsE1);

const imageContaierEl = document.querySelector(".image-container");

let currentImg = 1;

let timeOut;
nextEl.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
})
prevEl.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
})
updateImg();
function updateImg(){
   if(currentImg>imgsE1.length){
    currentImg = 1;
   }else if(currentImg<1){
     currentImg = imgsE1.length;
   }
   imageContaierEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

   timeOut = setTimeout(()=>{
       currentImg++;
       updateImg();
   }, 3000)
}