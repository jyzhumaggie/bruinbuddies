// const reducer = (state = [], action) => {
//     switch(action.type) {
//         case 'FETCH_ALL':
//             return state;
//         case 'CREATE':
//             return state;
//         default:
//             return state;
//     }
// }

export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;  // because from post action, we are grabbing all of the posts 
                                    // and passing thru the payload
        case 'CREATE':
            return [ ...posts, action.payload ];

        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);

        case 'UPDATE':
        case 'LIKE':
            console.log("in reducer");
            return posts.map((post) => post._id === action.payload._id ? action.payload : post );

        default:
            return posts;
    }
}