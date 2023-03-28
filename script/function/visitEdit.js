import putCard from "../api/putCard.js";

export default function visitEdit(id) {
    const form = document.querySelector('.option-card-form');
    const input = form.querySelectorAll('input, select');
    const values = {}

    input.forEach((elem) => {
        values[elem.name] = elem.value
    })

    return putCard(id, values)
    
}