import instance from "./instance.js";
import { newVisitModal } from "../function/visitConstructor.js";
import choiseDoctor from "../function/choiseDoctor.js";
import showInfo from "../function/showInfo.js";


const postCard = async(values) => {
    try {
        const {status, data} = await instance.post('', values);
        if(status === 200){
            newVisitModal.closeModal()
            choiseDoctor(data)
            showInfo()
        }
    } catch(err) {
        alert(`Error: ${err}`)
    }
}

export default postCard