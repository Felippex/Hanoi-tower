const rings = document.querySelectorAll('.circle')
const emptyPlaces = document.querySelectorAll('.stick')

const firstRing = document.querySelector('.circle1');

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
    if ((emptyPlace.childElementCount > 0) && (ring.id > emptyPlace.children[0].id)) {
      return alert('niedozwolony ruch')
    }
    emptyPlace.prepend(ring)

    rings.forEach(ring => {
      if (ring.previousElementSibling) {
        ring.draggable = false
      } else {
        ring.draggable = true
      }
    })
    if (emptyPlace.children.length > 1) {

    }
  })


})