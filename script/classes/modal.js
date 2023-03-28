export default class Modal{
    constructor(id){
        this.id = id;
        this.modal = new bootstrap.Modal(document.querySelector(this.id));
    }

    openModal(){
        this.modal.show();
    }

    closeModal(){
        this.modal.hide();
    }
}