import api from "../utils/api/api"

export const loginPost = async (user_id, pass_word) => {
    debugger
    try {
        const response = await api({
            url: "/auth/login",
            method: "POST",
            data: {
                user_id, pass_word
            },
        }, {
            withCredentials: true
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}