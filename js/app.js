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
