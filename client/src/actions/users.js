import { FETCH_ALL, UPDATE } from '../constants/actionTypes';

import * as api from '../api';

export const getUsers = () => async (dispatch) => {
    try{
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, user);
        console.log(data);
        dispatch({ type: UPDATE, payload: data });
    } catch(error) {
        console.log(error.message);
    }

}