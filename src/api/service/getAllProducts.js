import axios from 'axios'

const getAllProducts = async () => {
    const result = await axios({
        method: 'GET',
        url: 'http://localhost:7000/products'
    })
    if(result.statusText === "OK")
        return result.data
    return ""
};

export default getAllProducts
