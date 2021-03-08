import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';



export const signin = (formData, history) => async (dispatch) => {
    try {
        //log in user
        history.push('/auth');
    }
    catch (error) {
        console.log(error);
    }
}


export const signup = (formData, history) => async (dispatch) => {
    try {
        history.push('/auth');
    }
    catch (error) {
        console.log(error);
    }
}