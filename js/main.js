const rings = document.querySelectorAll('.circle')
const emptyPlaces = document.querySelectorAll('.stick')


rings.forEach(ring => {
  ring.addEventListener('dragstart', () => {
    ring.classList.add('dragging')
  })
})
rings.forEach(ring => {
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
    emptyPlace.prepend(ring)
    const newRing = document.querySelector('.circle')
    newRing.draggable = 'true'
  })

})


// function dragStart() {
//   ring.classList.add('dragging')
//   setTimeout(() => (this.classList.add('invisible')), 0);
// }

// function dragEnd() {
//   ring.classList.remove('dragging')
//   this.classlist.remove('invisible');
// }

// function dragOver(e) {
//   e.preventDefault()
//   const ring = document.querySelector('dragging')
//   emptyPlaces.prepend(ring)
// }

// function dragEnter() {}

// function dragLeave() {}

// function dragDrop() {
//   rings.forEach(ring => console.log(ring))
//   console.log(this, rings);
// }



// emptyPlaces.forEach((emptyPlace) => {
//   emptyPlace.addEventListener('dragover', dragOver)
//   emptyPlace.addEventListener('dragenter', dragEnter)
//   emptyPlace.addEventListener('dragleave', dragLeave)
//   emptyPlace.addEventListener('drop', dragDrop)
// })