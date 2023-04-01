import { api } from "../../config/requester"
import { postsFill } from "../reducers/usersReducers"

export const authThunk = () => {
    return async (dispatch) => {
        const data = await api.get('posts')
        dispatch(postsFill(data.response.data))
    }
}