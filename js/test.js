// function moveRight() {
//   var elem = document.getElementById('right');
//   var playerElem = document.getElementById('player-icon');

//   if (elem.classList.contains('move-right')) {
//     document.getElementById('player-icon').style.transform = 'translate(75px)';
//   } else if (elem.classList.contains('move-right') == false) {
//     document.getElementById('player-icon').style.transform = 'translate(75px)';
//     // playerElem.classList.add('move-right');
//   }
// };

function moveLeft(distanceLeft, distanceUp) {
  document.getElementById('player-icon').style.transform = `translate(${distanceLeft}px, ${distanceUp}px)`;
}

function moveRight(distanceRight, distanceUp) {
  document.getElementById('player-icon').style.transform = `translate(${distanceRight}px, ${distanceUp - 15}px)`;
}

function moveUp(distanceRight, distanceUp) {
  document.getElementById('player-icon').style.transform = `translate(${distanceRight}px, ${distanceUp}px)`;
}

var finish = document.getElementById('finish');

finish.addEventListener('click', function() {
  

  var emptyDiv = document.getElementById('empty');

  emptyDiv.insertAdjacentHTML = ('afterBegin', `
      <div class="modal" id="modal">
        <div class="modal-window">
            <h1>Congratulations!</h1>
            <h2>You're done :)</h2>

            <button class="btn-close">X</button>
        </div>

        <div class="overlay"></div>
      </div>
  `);
  
  moveUp(270, -300);
});