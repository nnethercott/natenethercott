//SELECTORS (apologies to myself for using jquery halfway through)
const win = $(window);
const html = document.querySelector('html');
const blanket = $(".blanket");
const container = $('.container');
const nav = document.querySelector('.nav');
const cards = document.querySelectorAll('.card');
const menuBtn = $('.menu-btn');
const menu = $('.burger-list');
const menuList = $('.burger-list__ul');


let menu_open = false;


//descriptions for images
//const _titles = JSON.parse(localStorage.getItem("titles"));
//const _descriptions = JSON.parse(localStorage.getItem("descriptions"));

//EVENT LISTENERS
win.on('load', onload);

//win.addEventListener('scroll', _nav_);
//cards.forEach((card)=>{card.addEventListener('mouseenter', describe)});
//cards.forEach((card)=>{card.addEventListener('click', redirect)});


menuBtn.on('click', ()=>{
  if(!menu_open){
    menuBtn.addClass('open');
    menu.addClass('open');
    menuList.addClass('open');

    var height = document.body.offsetHeight;

    blanket.css({"min-height":height.toString() + "px", "background-color":"black","opacity":"0.4","display":"block"});
    menu.css({"min-height":height.toString() + "px", "pointer-events":"auto"})
    container.css({"pointer-events":"none"});

    menu_open = true;
  }

  else{
    menuBtn.toggleClass('open');
    menu.toggleClass('open');
    menuList.toggleClass('open');

    blanket.css({"pointer-events":"none", "opacity":"0"});
    menu.css({"pointer-events":"none"})
    container.css({"pointer-events":"auto"});

    menu_open = false;
  }
})

//niiiicceeeee :)))
menu.on("click", ()=>{
  if(menu_open == true && $(event.target).attr('class') == menu.attr('class')){

    menuBtn.toggleClass('open');
    menu.toggleClass('open');
    menuList.toggleClass('open');

    blanket.css({"pointer-events":"none", "opacity":"0"});
    menu.css({"pointer-events":"none"})
    container.css({"pointer-events":"auto"});

    menu_open = false;
  }
})


//FUNCTIONS
function onload(e){
  /*
  let color = getRandomColor();
  $(".line_1").css("stroke", color);
  $(".line_2").css("stroke", color);
  $(".circle").css("fill", color);
  $(".logo").css("display","block");*/
  setTimeout(()=>{blanket.addClass('blanket-transition')}, 400);
  blanket.on('transitionend', ()=>{
    blanket.css({"pointer-events":"none"});
    $('.logo').css({"opacity":"0"});
  });
}

//use during page transitions
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//unused
//nav bar opacity as a function of scroll height
var scroll_last=0;
function _nav_(e){
  const scroll_height = window.scrollY;
  const limit = 55;

  if (scroll_height>limit && scroll_height>scroll_last){
    nav.style.opacity = 0.12;
  }
  else if (scroll_height<limit && scroll_height<scroll_last){
    nav.style.opacity = 1;
  }
  scroll_last = scroll_height;
}

function redirect(e){
  const kwd = (e.target.parentElement.id);
  win.location.replace("./projects/"+kwd.toString()+".html")
}
function describe(e){
  //locate appropriate key for description dict
  const parent = e.target;
  key = parent.id;
  const title = _titles[key];
  const about = _descriptions[key];

  //goal: add text and position based off image specs
  a = parent.children[0];
  div = a.children[1];
  div.children[0].innerText = title;
  div.children[1].innerText = about;

  //shift to center;
  img_width = a.children[0].width;
  div_width = div.offsetWidth;

  div.style.right = ((img_width+div_width)/2).toString()+"px";
}
