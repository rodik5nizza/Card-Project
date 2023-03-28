import Visit from "./visit.js";
import { dentist } from "../function/addDoctorInput.js";
import visitEdit from "../function/visitEdit.js";

export default class VisitDantist extends Visit {
    constructor(id, doctor, name, target, description, urgency, date){
        super()
        this.id = id;
        this.doctor = doctor;
        this.name = name;
        this.target = target;
        this.description = description;
        this.urgency = urgency;
        this.date = date
    }

    createElem() {
        dentist(this.containerForm)
    }

    render(old = false){
        if(!old){
            super.render()
        }
        const htmlCard = `<h5 class="card-title">${this.name}</h5>
        <p class="card-text">Стоматолог</p>
        <p class="card-text hidden hidden-class"><strong>Цель визита: </strong>${this.target}</p>
        <p class="card-text hidden hidden-class"><strong>Описание: </strong>${this.description}</p>
        <p class="card-text hidden hidden-class"><strong>Срочность: </strong>${this.urgency}</p>
        <p class="card-text hidden hidden-class"><strong>Дата приема: </strong>${this.date}</p>`
        if(old){
            this.container.innerHTML = htmlCard;
            super.unhideF(false)
        }else{
            this.container.insertAdjacentHTML('beforeend', htmlCard)
        }
    }

    editValue(){
        super.editValue()
        this.createElem()

        const form = document.querySelector('.option-card-form')
        const input = form.querySelectorAll('input, select')
        input[0].value = this.doctor;
        input[1].value = this.name;
        input[2].value = this.target;
        input[3].value = this.description;
        input[4].value = this.urgency
        input[5].value = this.date

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            visitEdit(this.id).then((data) => {
                this.name = data.name;
                this.target = data.target;
                this.description = data.description;
                this.urgency = data.urgency;
                this.date = data.date;
                
                this.render(true)
            })
        })
    }


}