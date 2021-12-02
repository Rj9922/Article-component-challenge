const shareIcon = document.getElementById('share');
const socialMedia = document.getElementById('social');
const closeBtn = document.getElementById('close')

if (shareIcon) {
    shareIcon.addEventListener('click', () => {
        socialMedia.classList.add('show-menu')
        shareIcon.classList.add('show-bg')
    })
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        socialMedia.classList.remove('show-menu')
        shareIcon.classList.remove('show-bg')
    })
}