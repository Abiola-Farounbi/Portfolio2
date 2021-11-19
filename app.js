// / Filter Tags
const blogs =  document.querySelectorAll(".blog");
const  vueTag = document.querySelectorAll(".vue");
const  cssTag = document.querySelectorAll(".css");
const  jsTag = document.querySelectorAll(".js");
const  pythonTag = document.querySelectorAll(".python");
const  devTag = document.querySelectorAll(".dev");

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener('click', ()=>{
    //Animate Link
navLinks.classList.toggle("open");
navLinks.style.display='flex'
links.forEach( link => {
link.classList.toggle("fade");
link.addEventListener('click' , () => {
    navLinks.style.display='none';
});
});
// Hamburger Animation
hamburger.classList.toggle("toggle");
});



var options = {
    strings: ["", "Farounbi~ ", "Abiola~",  "Farounbi Abiola" ],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
};

var typed = new Typed('.Text', options);




function hide_init(){
    // var blogs =  document.querySelectorAll('.blog');
    for (var i = 0; i < blogs.length; ++i) { 
            blogs[i].style.display = 'none'; }
 }

 function showAll(){  
    //loop through all items and show them
     for (var i = 0; i < blogs.length; ++i) { 
        blogs[i].style.display = 'block'; } 
  }

  function showVue(){  
    //call the inital hide function
    hide_init();
    //loop through red-tagged items and show them  
       for (var i = 0; i < vueTag.length; ++i) { 
            vueTag[i].style.display = 'block';  } 
    }

    function showCss(){ 
        hide_init();
           for (var i = 0; i < cssTag.length; ++i) { 
                cssTag[i].style.display = 'block';  } 
        }

    function showJs(){  
        hide_init();
           for (var i = 0; i < jsTag.length; ++i) { 
                jsTag[i].style.display = 'block';  } 
        }

    function showPython(){  
        hide_init();
           for (var i = 0; i < pythonTag.length; ++i) { 
                pythonTag[i].style.display = 'block';  } 
        }
        
    function showDev(){  
        hide_init();
           for (var i = 0; i < devTag.length; ++i) { 
                devTag[i].style.display = 'block';  } 
        }
    



