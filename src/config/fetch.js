import { baseUrl } from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase()
    url = baseUrl + url

    if (type === 'GET') {
        let dataStr = ''
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
        }
    }

    if (window.fetch && method === 'fetch') {
        const requestConfig = {
            credentials: 'include',
            // credentials: 'true',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            cache: "force-cache"
        }

        if (type === 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data),
                writable: false
            })
        }

        try {
            const response = await fetch(url, requestConfig)
            const responseJSON = await response.json()
            return responseJSON
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestOBJ;

            if (window.XMLHttpRequest) {
                requestOBJ = new XMLHttpRequest()
            } else {
                //for old versions of Internet Explorer (IE5 and IE6)
                requestOBJ = new ActiveXObject("Microsoft.XMLHTTP")
            }

            let sendData = ''
            if (type === 'POST') sendData = JSON.stringify(data)

            requestOBJ.open(type, url, true)
            requestOBJ.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            requestOBJ.send(sendData)

            requestOBJ.onreadystatechange = () => {
                if (requestOBJ.readyState === 4) {
                    if (requestOBJ.status === 200) {
                        let OBJ = requestOBJ.response
                        if (typeof OBJ !== 'object') OBJ = JSON.parse(OBJ)
                        resolve(OBJ)
                    } else {
                        reject(requestOBJ)
                    }
                }
            }
        })
    }
}