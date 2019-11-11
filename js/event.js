
window.onscroll  = animate1;

var eventName = document.getElementsByClassName('event-name')

function animate1()
{
  var offsetY = window.scrollY;
  var divHeight = document.getElementById('1').offsetHeight;


  if(divHeight > offsetY && offsetY <= divHeight) {
    for (var i = 0; i < 5; i++) {
     eventName[i].classList.add('ani-' + (i+1) );
    }
  }
  if (offsetY >= (divHeight) && offsetY <= (2*divHeight)) {
    boxAnimateDiv2Next();
  }

   if (offsetY >= 2*divHeight && offsetY <= 3*divHeight) {
    boxAnimateDiv3Next();
  }
  if (offsetY >= 3*divHeight) {
   boxAnimateDiv4Next();
 }
};

function boxAnimateDiv2Next(){
  for (var i = 0; i < 8; i++) {
   eventName[i+5].classList.add('ani-' + (i+1));
  }
}
//
function boxAnimateDiv3Next() {
  for (var i = 0; i < 6; i++) {
   eventName[i+13].classList.add('ani-' + (i+1) );
  }
}

for (var i = 0; i < 5; i++) {
 eventName[i].classList.add('ani-' + (i+1) );
}
//
function boxAnimateDiv4Next() {
  for (var i = 0; i < 5; i++) {
   eventName[i+19].classList.add('ani-' + (i+1) );
  }
}
