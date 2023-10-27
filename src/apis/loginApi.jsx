import api from "../utils/api/api"

export const loginPost = async (data) => {
    
    try {
        const response = await api({
            url: "/auth/login",
            method: "POST",
            data: {
                ...data
            },
        }, {
            withCredentials: true
        })
        
        return response.data
    } catch (error) {
        console.log(error)
    }
}