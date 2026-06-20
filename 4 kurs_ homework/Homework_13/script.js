var overlayWelcome  = document.getElementById('overlay');
var btnOpenWelcome  = document.getElementById('btn-welcome');
var btnCloseWelcome = document.getElementById('btn-close');

var overlayTeam     = document.getElementById('overlay-team');
var btnOpenTeam     = document.getElementById('btn-team');
var btnCloseTeam    = document.getElementById('btn-close-team');

var overlayWork     = document.getElementById('overlay-work');
var btnOpenWork     = document.getElementById('btn-work');
var btnCloseWork    = document.getElementById('btn-close-work');

var track           = document.getElementById('slide-track');
var arrowLeft       = document.getElementById('arrow-left');
var arrowRight      = document.getElementById('arrow-right');
var dot0            = document.getElementById('dot-0');
var dot1            = document.getElementById('dot-1');


var currentPage = 0;   

function goToPage(pageNumber) {
  currentPage = pageNumber;

  track.style.transform = 'translateX(-' + (pageNumber * 50) + '%)';

  dot0.classList.remove('active');
  dot1.classList.remove('active');

  if (pageNumber === 0) {
    dot0.classList.add('active');
  } else {
    dot1.classList.add('active');
  }
}

arrowRight.addEventListener('click', function() {
  if (currentPage == 0) {
    goToPage(1);
  } else {
    goToPage(0);
  }
});

arrowLeft.addEventListener('click', function() {
  if (currentPage == 1) {
    goToPage(0);
  } else {
    goToPage(1);
  }
});

dot0.addEventListener('click', function() { goToPage(0); });
dot1.addEventListener('click', function() { goToPage(1); });



btnOpenWelcome.addEventListener('click', function() {
  overlayWelcome.classList.add('active');
  document.body.style.overflow = 'hidden';
});
btnCloseWelcome.addEventListener('click', function() { closePopup(overlayWelcome); });
overlayWelcome.addEventListener('click', function(e) {
  if (e.target === overlayWelcome) closePopup(overlayWelcome);
});

btnOpenTeam.addEventListener('click', function() {
  overlayTeam.classList.add('active');
  document.body.style.overflow = 'hidden';
});
btnCloseTeam.addEventListener('click', function() { closePopup(overlayTeam); });
overlayTeam.addEventListener('click', function(e) {
  if (e.target === overlayTeam) closePopup(overlayTeam);
});


btnOpenWork.addEventListener('click', function() {
  overlayWork.classList.add('active');
  document.body.style.overflow = 'hidden';
  goToPage(0);  
});
btnCloseWork.addEventListener('click', function() { closePopup(overlayWork); });
overlayWork.addEventListener('click', function(e) {
  if (e.target === overlayWork) closePopup(overlayWork);
});


var overlayContact  = document.getElementById('overlay-contact');
var btnOpenContact  = document.getElementById('btn-contact');
var btnCloseContact = document.getElementById('btn-close-contact');

btnOpenContact.addEventListener('click', function() {
  overlayContact.classList.add('active');
  document.body.style.overflow = 'hidden';
});
btnCloseContact.addEventListener('click', function() { closePopup(overlayContact); });
overlayContact.addEventListener('click', function(e) {
  if (e.target === overlayContact) closePopup(overlayContact);
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePopup(overlayWelcome);
    closePopup(overlayTeam);
    closePopup(overlayWork);
    closePopup(overlayContact);
  }
});

function closePopup(el) {
  el.classList.remove('active');
  document.body.style.overflow = '';
}