//header animation
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

//show/hide text btn
function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');
  // den tjekker basicly om der står læs mere eller skjul for om den skal vise "..." eller text
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
function myFunction2() {
  var dots2 = document.getElementById('dots2');
  var moreText2 = document.getElementById('more2');
  var btnText2 = document.getElementById('myBtn2');

  if (dots2.style.display === 'none') {
    dots2.style.display = 'inline';
    btnText2.innerHTML = 'Læs mere';
    moreText2.style.display = 'none';
  } else {
    dots2.style.display = 'none';
    btnText2.innerHTML = 'Skjul';
    moreText2.style.display = 'inline';
  }
}
function myFunction3() {
  var dots3 = document.getElementById('dots3');
  var moreText3 = document.getElementById('more3');
  var btnText3 = document.getElementById('myBtn3');

  if (dots3.style.display === 'none') {
    dots3.style.display = 'inline';
    btnText3.innerHTML = 'Læs mere';
    moreText3.style.display = 'none';
  } else {
    dots3.style.display = 'none';
    btnText3.innerHTML = 'Skjul';
    moreText3.style.display = 'inline';
  }
}

//auto scroll to a point on the page
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
