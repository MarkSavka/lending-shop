import axios from 'axios'

const postNewProduct = async (data) => {
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:7000/new/product',
        data: {
            data
        }
    })
    if(result.statusText === "OK")
        return result.data
    return ""
};

export default postNewProduct
