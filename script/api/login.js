import instance from "./instance.js";
import { newModalLogin } from "../function/loginModal.js";
import getCards from "./getCards.js";


const alert = document.querySelector('.alert');
const loginModal = document.querySelector('.login-modal');
const createCard = document.querySelector('.create-card');


const login = async(email, password) => {
    try{
        const {status, data} = await instance.post('/login', { email: `${email}`, password: `${password}` })
        if (status === 200) {
            localStorage.setItem('token', data);
            newModalLogin.closeModal()
            loginModal.style.display = 'none'
            createCard.classList.remove('hidden');
            getCards()
        }
    } catch(err) {
        alert.classList.remove('hidden')
    }

}


export default login;