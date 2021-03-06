import { combineReducers } from 'redux';

import posts from './posts';

// export default combineReducers({
//     posts: posts,    // because both key and value are the same,
                        // can only keep the key
// });

export default combineReducers({ posts });