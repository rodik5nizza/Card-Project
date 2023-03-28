import instance from "./instance.js";
import showInfo from "../function/showInfo.js";


const deleteCard = async(id, wrapper) => {
    try {
        const {status} = await instance.delete(`/${id}`);
        if(status === 200){
            wrapper.remove()
            showInfo()
        }
    } catch(err) {
        alert(`Error: ${err}`)
    }
}

export default deleteCard