import deleteCard from "../api/delete.js";
import modal from "../function/editModal.js";

export default class Visit {
    constructor() {
        this.containerForm = document.querySelector('.container-option-doctor')
        this.hidenState = true;
        this.wrapper = document.createElement('div');
        this.container = document.createElement('div');
        this.seeMore = document.createElement('a');
        this.card = document.createElement('div');
        this.buttonWrapper = document.createElement('div');
        this.buttonX = document.createElement('a');
        this.buttons = document.createElement('div')
        this.generalContainer = document.querySelector('.board')
        this.edit = document.createElement('a');
    }

    creatrElem() {
        this.wrapper.className = `ms-2 mt-3 col-12 col-sm-5 col-lg-3 d-inline-block ${this.id} card-block`

        this.card.className = 'card bg-light bg-gradient'
        this.wrapper.append(this.card)


        this.buttonWrapper.className = 'd-flex justify-content-end mt-2 me-2'

        this.card.append(this.buttonWrapper)

        this.buttonX.setAttribute('href', '#')
        this.buttonX.className = 'btn btn-outline-danger'
        this.buttonX.innerHTML = 'X'

        this.buttonWrapper.append(this.buttonX)

        this.container.classList.add('card-body')

        this.card.append(this.container)

        this.card.append(this.buttons)

        this.seeMore.setAttribute('href', '#')
        this.seeMore.className = 'btn btn-outline-secondary mb-3 ms-3'
        this.seeMore.innerHTML = 'Показать больше'


        this.edit.setAttribute('href', '#')
        this.edit.className = 'btn btn-outline-success mb-3 me-3 hidden-class hidden d-flex align-items-center'
        this.edit.innerHTML = 'Редактровать'

        this.buttons.append(this.seeMore)
        this.buttons.append(this.edit)

        this.buttons.className = 'd-flex justify-content-between'
        this.eventListenerF()
    }

    render() {
        this.creatrElem()
        this.generalContainer.append(this.wrapper)

    }

    eventListenerF() {
        this.edit.addEventListener('click', () => {
            this.editValue()
        })

        this.buttonX.addEventListener('click', (e) => {
            e.preventDefault()
            deleteCard(this.id, this.wrapper)
        })

        this.seeMore.addEventListener('click', (e) => {
            e.preventDefault()

            this.hidenState = !this.hidenState;
            this.seeMoreF()
            this.unhideF(this.hidenState)

        })
    }

    editValue() {
        modal.openModal()
        this.containerForm.innerHTML = '';
    }



    seeMoreF() {
        this.seeMore.innerHTML === 'Показать больше' ? this.seeMore.innerHTML = 'Свернуть' : this.seeMore.innerHTML = 'Показать больше';
    }

    unhideF(hidden = true) {
        const hiddenCollection = this.card.querySelectorAll('.hidden-class')
        hiddenCollection.forEach((elem) => {
            if (hidden) {
                elem.classList.add('hidden')
            } else {
                elem.classList.remove('hidden')
            }

        })
    }

}
