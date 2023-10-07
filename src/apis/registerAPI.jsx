import api from "../utils/api/api"

export const registerPost = async (user_name, password, full_name, number_phone, email) => {
    debugger
    try {
        const response = await api({
            url: "/user/register",
            method: "POST",
            data: {
                user_name, password, full_name, number_phone, email
            },
        }, {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}