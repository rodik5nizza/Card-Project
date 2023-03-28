import postCard from "../api/postCard.js";

export default function visitValue() {
    const form = document.querySelector('.visit-card-form');
    const input = form.querySelectorAll('input, select');
    const values = {}

    input.forEach((elem) => {
        values[elem.name] = elem.value
    })
    postCard(values)
    
}