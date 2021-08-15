import axios from 'axios'

const getAllComments = async (id) => {
    const result = await axios({
        method: 'post',
        url: 'http://localhost:7000/comments',
        data: {
            id: id
        }
    })
    if(result.statusText === "OK")
        return result.data
    return ""
};

export default getAllComments
