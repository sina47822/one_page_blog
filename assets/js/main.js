const items = document.querySelectorAll('.fullscreen-bg > div');
let currentIndex = 0;

document.querySelector('.next_btn').addEventListener('click', function () {
  items[currentIndex].classList.add('hide');
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.remove('hide');
});

document.querySelector('.previous_btn').addEventListener('click', function () {
  items[currentIndex].classList.add('hide');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.remove('hide');
});


function ChangeWidth(event) {
  var pageWidth = document.documentElement.clientWidth;
  var pageHeight = document.documentElement.clientHeight;

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  // Select all SVG elements with the class 'btn-svg'
  var mySVGs = document.querySelectorAll('.btn-svg');
  // Select all elements with the class 'menu-item'
  var menuItems = document.querySelectorAll('.menu-item');
  // Select the element with the class 'menu-bar'
  var menuBar = document.querySelector('.menu-bar');

  // Assuming pageWidth is defined elsewhere
  if (pageWidth < 900) {
    // Adjust the viewBox attribute for each SVG
    mySVGs.forEach(function(mySVG) {
      mySVG.setAttribute("viewBox", "-11 8 65 66");
    });

    // Show the menu bar
    menuBar.classList.remove('hide');
    // Hide each menu item
    menuItems.forEach(function(menuItem) {
      menuItem.classList.add('hide');
    });

    // Debounced event handlers
    const handleMouseOver = debounce(function() {
      menuBar.classList.add('hide');
      menuItems.forEach(function(menuItem) {
        menuItem.classList.remove('hide');
      });
    }, 200); // Adjust the debounce delay as needed

    const handleMouseOut = debounce(function() {
      menuBar.classList.remove('hide');
      menuItems.forEach(function(menuItem) {
        menuItem.classList.add('hide');
      });
    }, 3000); // Adjust the debounce delay as needed

    // Add mouseover and mouseout event listeners with debounce
    menuBar.addEventListener('mouseover', handleMouseOver);
    menuBar.addEventListener('mouseout', handleMouseOut);
  }
  else{
    mySVGs.forEach(function(mySVG) {
      mySVG.setAttribute("viewBox", "-11 -11.5 65 66");
    });

    // Show the menu bar
    menuBar.classList.add('hide');
    // Hide each menu item
    menuItems.forEach(function(menuItem) {
      menuItem.classList.remove('hide');
    });
  }
}

window.addEventListener("DOMContentLoaded", ChangeWidth)
window.addEventListener("resize", ChangeWidth)


var about = document.querySelector('#about').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-0').classList.remove('hide');
});
var Ecosystem = document.querySelector('#Ecosystem').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-1').classList.remove('hide');
});

var Biodiversity = document.querySelector('#Biodiversity').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-2').classList.remove('hide');
});

var Extinction = document.querySelector('#Extinction').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-3').classList.remove('hide');
});
var Six_mass_extinctions = document.querySelector('#Six_mass_extinctions').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-4').classList.remove('hide');
});
var Polar_bears = document.querySelector('#Polar_bears').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-5').classList.remove('hide');
});
var bees_1 = document.querySelector('#bees_1').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-6').classList.remove('hide');
});
var Underwater = document.querySelector('#Underwater').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-7').classList.remove('hide');
});
var Plant_extinction = document.querySelector('#Plant_extinction').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-8').classList.remove('hide');
});
var What_can_we_do = document.querySelector('#What_can_we_do').addEventListener('click',function(){
  const itemlist = document.querySelectorAll('.fullscreen-bg > div');
  itemlist.forEach(function(item){
    item.classList.add('hide');
  })
  document.querySelector('.item-9').classList.remove('hide');
});