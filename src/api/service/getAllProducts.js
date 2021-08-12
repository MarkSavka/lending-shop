import axios from 'axios'

const getAllProducts = async () => {
    const result = await axios({
        method: 'get',
        url: 'http://localhost:7000/products',
        responseType: 'stream'
    })
    if(result.statusText === "OK")
        return result.data
    return ""
};

export default getAllProducts
