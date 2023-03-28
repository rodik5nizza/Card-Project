import instance from "./instance.js";
import modal from "../function/editModal.js";

const putCard = (id, values) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { status, data } = await instance.put(`/${id}`, values);
            if (status === 200) {
                modal.closeModal()
                resolve(data)
            }else{
                reject()
            }
        } catch (err) {
            alert(`Error: ${err}`)
            reject()
        }
    })

}



export default putCard