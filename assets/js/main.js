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

// item 0
const texts_0 = document.querySelectorAll('.texts_0 > div');
let z = 0;
console.log(z , texts_0)
document.querySelector('.n_btn_0').addEventListener('click', function () {
  texts_0[z].classList.add('hide');
  z = (z + 1) % texts_0.length;
  texts_0[z].classList.remove('hide');
});

document.querySelector('.p_btn_0').addEventListener('click', function () {
  texts_0[z].classList.add('hide');
  z = (z - 1 + texts_0.length) % texts_0.length;
  texts_0[z].classList.remove('hide');
});
// item 1
const texts_1 = document.querySelectorAll('.texts_1 > p');
let a = 0;
console.log(a , texts_1)
document.querySelector('.n_btn_1').addEventListener('click', function () {
  texts_1[a].classList.add('hide');
  a = (a + 1) % texts_1.length;
  texts_1[a].classList.remove('hide');
});

document.querySelector('.p_btn_1').addEventListener('click', function () {
  texts_1[a].classList.add('hide');
  a = (a - 1 + texts_1.length) % texts_1.length;
  texts_1[a].classList.remove('hide');
});
// item 2

const texts_2 = document.querySelectorAll('.texts_2 > p');
let b = 0;
console.log(b , texts_2)
document.querySelector('.n_btn_2').addEventListener('click', function () {
  texts_2[b].classList.add('hide');
  b = (b + 1) % texts_2.length;
  texts_2[b].classList.remove('hide');
});

document.querySelector('.p_btn_2').addEventListener('click', function () {
  texts_2[b].classList.add('hide');
  b = (b - 1 + texts_2.length) % texts_2.length;
  texts_2[b].classList.remove('hide');
});
// item 3

const texts_3 = document.querySelectorAll('.texts_3 > p');
let c = 0;
console.log(c , texts_3)
document.querySelector('.n_btn_3').addEventListener('click', function () {
  texts_3[c].classList.add('hide');
  c = (c + 1) % texts_3.length;
  texts_3[c].classList.remove('hide');
});

document.querySelector('.p_btn_3').addEventListener('click', function () {
  texts_3[c].classList.add('hide');
  c = (c - 1 + texts_3.length) % texts_3.length;
  texts_3[c].classList.remove('hide');
});
// item 4

const texts_4 = document.querySelectorAll('.texts_4 > p');
let d = 0;
console.log(d , texts_4)
document.querySelector('.n_btn_4').addEventListener('click', function () {
  texts_4[d].classList.add('hide');
  d = (d + 1) % texts_4.length;
  texts_4[d].classList.remove('hide');
});

document.querySelector('.p_btn_4').addEventListener('click', function () {
  texts_4[d].classList.add('hide');
  d = (d - 1 + texts_4.length) % texts_4.length;
  texts_4[d].classList.remove('hide');
});
// item 5

const texts_5 = document.querySelectorAll('.texts_5 > p');
let e = 0;
console.log(e , texts_5)
document.querySelector('.n_btn_5').addEventListener('click', function () {
  texts_5[e].classList.add('hide');
  e = (e + 1) % texts_5.length;
  texts_5[e].classList.remove('hide');
});

document.querySelector('.p_btn_5').addEventListener('click', function () {
  texts_5[e].classList.add('hide');
  e = (e - 1 + texts_5.length) % texts_5.length;
  texts_5[e].classList.remove('hide');
});
// item 6

const texts_6 = document.querySelectorAll('.texts_6 > p');
let f = 0;
console.log(f , texts_6)
document.querySelector('.n_btn_6').addEventListener('click', function () {
  texts_6[f].classList.add('hide');
  f = (f + 1) % texts_6.length;
  texts_6[f].classList.remove('hide');
});

document.querySelector('.p_btn_6').addEventListener('click', function () {
  texts_6[f].classList.add('hide');
  f = (f - 1 + texts_6.length) % texts_6.length;
  texts_6[f].classList.remove('hide');
});

// item 7
const texts_7 = document.querySelectorAll('.texts_7 > p');
let g = 0;
console.log(g , texts_7)
document.querySelector('.n_btn_7').addEventListener('click', function () {
  texts_7[g].classList.add('hide');
  g = (g + 1) % texts_7.length;
  texts_7[g].classList.remove('hide');
});

document.querySelector('.p_btn_7').addEventListener('click', function () {
  texts_7[g].classList.add('hide');
  g = (g - 1 + texts_7.length) % texts_7.length;
  texts_7[g].classList.remove('hide');
});
// item 8
const texts_8 = document.querySelectorAll('.texts_8 > p');
let h = 0;
console.log(h , texts_8)
document.querySelector('.n_btn_8').addEventListener('click', function () {
  texts_8[h].classList.add('hide');
  h = (h + 1) % texts_8.length;
  texts_8[h].classList.remove('hide');
});

document.querySelector('.p_btn_8').addEventListener('click', function () {
  texts_8[h].classList.add('hide');
  h = (h - 1 + texts_8.length) % texts_8.length;
  texts_8[h].classList.remove('hide');
});

// item 9
const texts_9 = document.querySelectorAll('.texts_9 > p');
let i = 0;
console.log(i , texts_9)
document.querySelector('.n_btn_9').addEventListener('click', function () {
  texts_9[i].classList.add('hide');
  i = (i + 1) % texts_9.length;
  texts_9[i].classList.remove('hide');
});

document.querySelector('.p_btn_9').addEventListener('click', function () {
  texts_9[i].classList.add('hide');
  i = (i - 1 + texts_9.length) % texts_9.length;
  texts_9[i].classList.remove('hide');
});

// item 10
const texts_10 = document.querySelectorAll('.texts_10 > p');
let j = 0;
console.log(j , texts_10)
document.querySelector('.n_btn_10').addEventListener('click', function () {
  texts_10[j].classList.add('hide');
  j = (j + 1) % texts_10.length;
  texts_10[j].classList.remove('hide');
});

document.querySelector('.p_btn_10').addEventListener('click', function () {
  texts_10[j].classList.add('hide');
  j = (j - 1 + texts_10.length) % texts_10.length;
  texts_10[j].classList.remove('hide');
});


const pageHeight = document.body.clientHeight;
const pageWidth = document.body.clientWidth;
console.log(pageHeight)
console.log(pageWidth)


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
