import { FETCH_ALL, CREATE, DELETE, LIKE, UPDATE } from '../constants/actionTypes';

export default (users = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;  // because from post action, we are grabbing all of the posts 
                                    // and passing thru the payload
        case UPDATE:
            console.log(user);
            return users.map((user) => user._id === action.payload._id ? action.payload : user)

        default:
            return users;
    }
}