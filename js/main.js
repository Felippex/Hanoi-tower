const rings = document.querySelectorAll('.circle')
const emptyPlaces = document.querySelectorAll('.stick')
const counterSpan = document.querySelector('.counter span')
let movementsNumber = 0;

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
    if (emptyPlaces[2].childElementCount === 5) {
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