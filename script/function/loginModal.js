import Modal from "../classes/modal.js";
import login from "../api/login.js";
import getCards from "../api/getCards.js";

export const newModalLogin = new Modal('#loginModal');

function loginModal(){
    const token = localStorage.getItem('token');
    const loginModal = document.querySelector('.login-modal');
    const createCard = document.querySelector('.create-card');

    if(token){
        loginModal.style.display = 'none'
        createCard.classList.remove('hidden');
        getCards()
    } else {
        const btn = document.querySelector('.modal-btn');
        const form = document.querySelector('.login-form');
        const input = form.querySelectorAll('input');
    
        btn.addEventListener('click', () => {
            newModalLogin.openModal()
        })
    
        form.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = input[0].value;
        const password = input[1].value;
        login(email, password)
        })
    }
}


export default loginModal;