(function()
{
  


var cards = document.getElementsByClassName("fadein");

let hideCards = function(){

for(var i=0;i<cards.length;i++){
  console.log(cards[i].getBoundingClientRect().top);
  console.log("inner " + window.innerHeight);
  (function(i){
    if(cards[i].getBoundingClientRect().top>window.innerHeight){
      cards[i].classList.add("hidden");
      console.log('hide');
     }})(i);}
     console.log('function hidecards')
     };


hideCards();
let showCards=function()
{if(!"classList"in document.documentElement){return;}

for(var i=0;i<cards.length;i++){
  (function(i){
    if(cards[i].classList.contains("hidden")
    && cards[i].getBoundingClientRect().top<=window.innerHeight){
      cards[i].classList.add("bounce-in");
 console.log("add")
      cards[i].classList.remove("hidden");
     
     }})(i);}};
      
var scrolling = false;
window.addEventListener("scroll",function(event){
  if(!scrolling){

    scrolling=true;
    (!window.requestAnimationFrame)?setTimeout(checkTimelineScroll,250):window.requestAnimationFrame(checkTimelineScroll);}});

function checkTimelineScroll(){
  showCards();
  scrolling=false;
  };


})();


