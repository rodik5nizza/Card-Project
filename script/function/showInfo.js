export default function showInfo(){
    const card = document.querySelectorAll('.card')
    const info = document.querySelector('.info')

    if (card.length === 0) {
        info.classList.remove('hidden')
    } else {
        info.classList.add('hidden')
    }
}