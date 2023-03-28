import Modal from "../classes/modal.js";
import changeDoctor from "./changeDoctor.js";
import visitValue from "./visitValue.js";

export const newVisitModal = new Modal('#visitModal')

function visitConstructor() {
    const visitBtn = document.querySelector('.visit-btn');
    const form = document.querySelector('.visit-card-form')
    const input = form.querySelectorAll('input, select')
    const container = form.querySelector('.container-doctor')
    visitBtn.addEventListener('click', () => {
        newVisitModal.openModal()
        container.innerHTML = ''
        input.forEach(elem => {
            elem.value = ''
        })

    })
    changeDoctor('.select-doctor', '.container-doctor');

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        visitValue()
    })
}
export default visitConstructor