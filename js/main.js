const rings = document.querySelectorAll('.circle')
const emptyPlaces = document.querySelectorAll('.stick')
const counterSpan = document.querySelector('.counter span')
const resetBtn = document.querySelector('.reset')
let movementsNumber = 0;
let numberOfRingsGlobal = 5;

rings.forEach(ring => {
  ring.addEventListener('dragstart', () => {
    ring.classList.add('dragging');
  })
  ring.addEventListener('dragend', () => {
    ring.classList.remove('dragging')
  })

})

// drag functions
emptyPlaces.forEach(emptyPlace => {
  emptyPlace.addEventListener('dragover',
    e => {
      e.preventDefault()
    })
  emptyPlace.addEventListener('drop', () => {

    const ring = document.querySelector('.dragging')
    const childrenNumber = emptyPlace.childElementCount // number of rings on one stick
    if ((emptyPlace.childElementCount > 0) && (ring.id > emptyPlace.children[0].id)) {
      return alert('Movement forbidden!')
    }
    emptyPlace.prepend(ring)
    if (emptyPlace.childElementCount !== childrenNumber) {
      movementsNumber++; // condition which prevents from increasing number of movements if user do not move ring on another stick
      counterSpan.textContent = movementsNumber;
    }
    if (emptyPlaces[2].childElementCount === numberOfRingsGlobal) {
      rings.forEach(ring => ring.draggable = false)
      alert('Good job! You win!')
      return false
    }
    rings.forEach(ring => {
      if (ring.previousElementSibling) {
        ring.draggable = false
      } else {
        ring.draggable = true
      }
    })
  })


})

//reset function
const resetGame = () => {
  rings.forEach(ring => {
    emptyPlaces[0].append(ring)
  })
  rings[0].draggable = 'true'
  counterSpan.textContent = 0;
  movementsNumber = 0;
  //reset to default number of rings 
}
resetBtn.addEventListener('click', resetGame)

// select number of rings
const changeNumberOfRings = () => {
  let numberOfRings = parseInt(document.querySelector('.ringSelection').value)
  console.log(numberOfRings, numberOfRingsGlobal);
  for (let i = 0; i < numberOfRings; i++) {
    emptyPlaces[0].appendChild(rings[i])
  }
  for (let i = 0; i < (numberOfRingsGlobal - numberOfRings); i++) {
    emptyPlaces[0].removeChild(rings[numberOfRings + i])
  }
  numberOfRingsGlobal = numberOfRings;
}


const ringSelection = document.querySelector('.ringSelection');
ringSelection.addEventListener('change', changeNumberOfRings)