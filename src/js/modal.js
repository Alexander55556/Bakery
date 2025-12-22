const modal = document.querySelector('.backdrop')
const openButtons = document.querySelectorAll('.modal-btn-open')
const modalBtnClose = document.querySelector('.modal-btn-close')

if (modal && openButtons.length) {
  const openModal = () => {
    modal.classList.remove('is-hidden')
    document.body.classList.add('is-scroll-disabled')
  }
  const closeModal = () => {
    modal.classList.add('is-hidden')
    document.body.classList.remove('is-scroll-disabled')
  }

  openButtons.forEach((btn) => btn.addEventListener('click', openModal))
  if (modalBtnClose) {
    modalBtnClose.addEventListener('click', closeModal)
  }
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  })
}
