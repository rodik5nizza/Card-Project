import choiseDoctor from "../function/choiseDoctor.js";
import instance from "./instance.js";
import showInfo from "../function/showInfo.js";

const wrapper = document.querySelector('.board')

const getCards = async() => {
    try {
        const {status, data} = await instance.get('');
        if(status === 200){
            data.forEach(elem => {
                 choiseDoctor(elem)
            });
            showInfo()
        }
    } catch(err) {
        alert(`Error: ${err}`)
    }
}

export default getCards