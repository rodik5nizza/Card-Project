import {cardiologist, dentist, therapist} from "./addDoctorInput.js"

function changeDoctor(selectForm, containerForm) {
    const select = document.querySelector(selectForm);
    const container = document.querySelector(containerForm)

    select.addEventListener('change', () => {
        container.innerHTML = ''
        if (select.value === 'cardiologist') {
            cardiologist(container)
        } else if (select.value === 'dentist'){
            dentist(container)
        } else if (select.value === 'therapist'){
            therapist(container)
        } else {
            container.innerHTML = ''
        } 
        
    })
}

export default changeDoctor;
