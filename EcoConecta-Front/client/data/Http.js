

class Http {

    async get(url, id) {
        try {
            // const response = await fetch(url + (id || ''), { method: 'get' });
            const response = await fetch(url + (id || ''));
            return await response.json();
        } catch (error) {
            console.error('ERROR GET', error.message);
        }
    }

}

const http = new Http();

export default http;