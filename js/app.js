var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-80px';
  }
  prevScrollpos = currentScrollPos;
};
function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Læs mere';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Skjul';
    moreText.style.display = 'inline';
  }
}
function myFunction1() {
  var dots1 = document.getElementById('dots1');
  var moreText1 = document.getElementById('more1');
  var btnText1 = document.getElementById('myBtn1');

  if (dots1.style.display === 'none') {
    dots1.style.display = 'inline';
    btnText1.innerHTML = 'Læs mere';
    moreText1.style.display = 'none';
  } else {
    dots1.style.display = 'none';
    btnText1.innerHTML = 'Skjul';
    moreText1.style.display = 'inline';
  }
}
