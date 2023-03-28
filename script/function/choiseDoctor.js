import VisitDantist from "../classes/visitDantist.js";
import VisitTherapist from "../classes/visitTherapist.js";
import VisitCardiologist from "../classes/visitCardiologist.js";

export default function choiseDoctor(data){

    const {doctor} = data
    if(doctor === 'dentist'){
        const {id, doctor, name, target, description, urgency, date} = data
        new VisitDantist(id, doctor, name, target, description, urgency, date).render()
    } else if(doctor === 'therapist'){
        const {id, doctor, name, target, description, urgency, age} = data
        new VisitTherapist(id, doctor, name, target, description, urgency, age).render()
    } else if(doctor === 'cardiologist'){
        const {id, doctor, name, target, description, urgency, pressure, massIndex, diseases, age} = data
        new VisitCardiologist(id, doctor, name, target, description, urgency, pressure, massIndex, diseases, age).render()
    }
}