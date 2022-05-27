import axios from "axios";
const baseUrl = 'https://restcountries.com/v3.1/';

// export function getData(path) {

//     return (
//         axios({
//             method: 'get',
//             url: baseUrl + path
//         })
//         .then(res => res.data)
//         // .catch(err => err.message)
//     )

// }

export async function getData(path) {
    try{
        const response = await axios({
            method: 'get',
            url: baseUrl + path
        })

        return response.data
    }catch(error){
        throw new Error(error.message)
    }
    
    

}