import * as api from '../api';

// action creaters: functions that return actions
//                          async function 
//                          thunk allows us to use extra function
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // const response = await api.fetchPosts(); 
        //       response always contain data object
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
    
}


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data });
    } catch(error) {
        console.log(error.message);
    }

}