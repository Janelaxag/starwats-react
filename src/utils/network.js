import { HTTP, HTTPS } from "@constants/api";

/*
* Изменяет протокол HTTP на HTTPS
* @param {String} url - url для изменения
* @returns {String} - url с HTTPS
* */
export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}
/*
* Отправляет запрос fetch
* @param {String} url - url для запроса
* @returns {Promise} - Promise с результатом запроса
* */
export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url)

        if(!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json()
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }

}

// getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))

//     (async () => {
//         const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
//         console.log(body)
//     })()