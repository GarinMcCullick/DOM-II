// Your code goes here
/*let nav = document.getElementsByTagName("a");

nav.addEventListener("mouseover", function(event){
    nav.style.color = "pink";
});*/

//1
let title = document.querySelector("h1");

title.addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
});
//2
document.addEventListener('keydown', logKey);

function logKey(x) {
  console.log(`${x.code}`);
}

//3
let img = document.querySelector("img");
let scale = 1;

img.addEventListener("wheel", function(zoom){
    zoom.preventDefault();
    scale += zoom.deltaY * -0.01;
    scale = Math.min(Math.max(.120, scale), 1);
    img.style.transform = `scale(${scale})`;
});

//4
let copyright = document.querySelector("footer p");

copyright.addEventListener('load', (event) => {
    console.log(event+'copy right is loaded');
  });

  //5
  const message = document.querySelector("form");

  message.addEventListener("focus", (event) =>{
    event.target.style.background = "cyan";
  },true);

  message.addEventListener('blur', (event) => {
    event.target.style.background = '';
  }, true);

  //6
  const height = document.querySelector('#height');
const width = document.querySelector('#width');

function windowSize() {
  height.textContent = window.innerHeight;
  width.textContent = window.innerWidth;
}
  window.onresize = windowSize;
  window.addEventListener('resize', windowSize);

  //7
  //tells you when you hit the bottom of the page

  window.addEventListener("scroll", ()=> {
      const scrollLeft = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if(Math.ceil(scrolled)=== scrollLeft){
          console.log("you have reached the bottom!");
      }
  });

  //8
  //tells you what you highlight inside the form
  function highlight(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const form = document.querySelector('form');
  form.select = highlight;

//9
//changes color on double clicked portion
const h2 = document.querySelector('h2');

h2.addEventListener('dblclick', function () {
  h2.classList.toggle('dif');
});

//10
//prevents a link from opening a new url
const links = document.querySelectorAll("a");

links.addEventListener("click", function(event){
    event.preventDefault();
  });