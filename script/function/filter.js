import instance from "../api/instance.js";
import choiseDoctor from "../function/choiseDoctor.js"


export default async function filter() {
    const filterU = document.querySelector('.filter')
    const filterT = document.querySelector('.filter-text')
    const container  = document.querySelector('.board')
    const { data } = await instance.get('')

    filterT.addEventListener('input', (e) => {
        const result = data.filter((elem) => {
            for (let i in elem){
                if(elem[i].toString().toLowerCase().includes(e.target.value.toLowerCase())){
                    return elem
            }
            }
        })
        container.innerHTML = ''
        result.forEach(element => {
            choiseDoctor(element)
        })
    })

    filterU.addEventListener('change', (e) => {
            const result = data.filter(({urgency}) => urgency.includes(e.target.value))
            container.innerHTML = ''
            result.forEach(element => {
                choiseDoctor(element)
            })
    })


}
