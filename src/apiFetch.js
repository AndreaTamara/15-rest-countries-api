const baseUrl ='https://restcountries.com/v3.1/';

export function getData (path){
    
    return (
        fetch(baseUrl + path)
            .then(res => res.json())
            .then((res) => res)
    )

}