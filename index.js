const pro = document.querySelector(".pro");
const percentageA = document.querySelector(".percentageA");
const percentageB = document.querySelector(".percentageB");
const percentageC = document.querySelector(".percentageC");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const ram = document.querySelector(".ram img");
// pro.addEventListener("mousemove", (e) => {
//     let xAxis = (window.innerWidth / 3 - e.pageX) / 22	;
//     let yAxis = (window.innerHeight / 3 - e.pageY) / 23;
//     pro.style.transform =`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
//   });

pro.addEventListener("mouseenter", (e)=>{
    pro.style.trasition="all 0.1s ease";
    pro.style.transform="translatex(0px) translatey(-10px)";
 }
 )
 pro.addEventListener("mouseleave", (e)=>{
    pro.style.trasition="all 0.1s ease-out";
    pro.style.transform="translatex(0px) translatey(0px)";
 }
 )

 percentageA.addEventListener("mouseenter", (e)=>{
   percentageA.style.trasition="all 0.1s ease";
   percentageA.style.transform="translatex(0px) translatey(10px)";
 }
 )
 percentageA.addEventListener("mouseleave", (e)=>{
    percentageA.style.trasition="all 0.1s ease-out";
    percentageA.style.transform="translatex(0px) translatey(0px)";
 }
 )
 percentageB.addEventListener("mouseenter", (e)=>{
   percentageB.style.trasition="all 0.1s ease";
   percentageB.style.transform="translatex(0px) translatey(10px)";
 }
 )
 percentageB.addEventListener("mouseleave", (e)=>{
    percentageB.style.trasition="all 0.1s ease-out";
    percentageB.style.transform="translatex(0px) translatey(0px)";
 }
 )
 percentageC.addEventListener("mouseenter", (e)=>{
   percentageC.style.trasition="all 0.1s ease";
   percentageC.style.transform="translatex(0px) translatey(10px)";
 }
 )
 percentageC.addEventListener("mouseleave", (e)=>{
    percentageA.style.trasition="all 0.1s ease-out";
    percentageA.style.transform="translatex(0px) translatey(0px)";
 }
 )
 card1.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
   card1.style.transform =`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
 });
 card2.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 1.2 - e.pageX) / 20;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
   card2.style.transform =`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
 });
 card3.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
   card3.style.transform =`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
 });
 card1.addEventListener("mouseenter", (e)=>{
   card1.style.trasition=" all 0.1s ease";
   card1.style.transform="translatex(-5px) translatey(-5px)";
}
)
card2.addEventListener("mouseenter", (e)=>{
   card2.style.trasition=" all 0.1s ease";
   card2.style.transform="translatex(-5px) translatey(-5px)";
}
)
card3.addEventListener("mouseenter", (e)=>{
   card3.style.trasition=" all 0.1s ease";
   card3.style.transform="translatex(-5px) translatey(-5px)";
}
)
card1.addEventListener("mouseleave", (e)=>{
   card1.style.transition="all 0.2s ease-Out" ;
   card1.style.transform=`rotate(0deg) rotate(0deg)`;
  
})
card2.addEventListener("mouseleave", (e)=>{
   card2.style.transition="all 0.2s ease-Out" ;
   card2.style.transform=`rotate(0deg) rotate(0deg)`;
  
})
card3.addEventListener("mouseleave", (e)=>{
   card3.style.transition="all 0.2s ease-Out" ;
   card3.style.transform=`rotate(0deg) rotate(0deg)`;
  
})
ram.addEventListener("mouseenter", (e)=>{
   ram.style.trasition="all 0.1s ease";
   ram.style.transform="translatex(-40px) translatey(-20px)";
}
)
ram.addEventListener("mouseleave", (e)=>{
   ram.style.trasition="all 0.1s ease";
   ram.style.transform="translatex(0px) translatey(0px)";
}
)