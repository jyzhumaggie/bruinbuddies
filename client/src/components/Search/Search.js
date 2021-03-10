import React, { useState } from 'react'
import './Search.css';
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';
import { Grid } from "@material-ui/core";


const handleSearch = () => {
    
}




const Search = () => {
    const posts = useSelector((state) => state.posts);  // reducers/index.js: combineReducers posts
    const users = useSelector((state) => state.users);  // reducers/index.js: combineReducers posts
    
    const user = JSON.parse(localStorage.getItem('profile'));

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    
    const filterPosts = (posts, query) => {
        if (!query) {
            return null;
        } else {
            return posts.filter((post) => {
                const postTitle = post?.title?.toLowerCase() + post?.message?.toLowerCase() + post?.name?.toLowerCase();
                return postTitle.includes(query.toLowerCase());
            })
        }
    }
    // console.log(users);
    // const filterUsers = (users, query) => {
    //     if (!query) {
    //         return null;
    //     } else {
    //         return users.filter((post) => {
    //             const userTitle = user?.title?.toLowerCase() + user?.message?.toLowerCase() + user?.name?.toLowerCase();
    //             return userTitle.includes(query.toLowerCase());
    //         })
    //     }
    // }

    console.log(query);    
    console.log("query is " + query);

    const [searchQuery, setSearchQuery] = useState(query | ' ' );
    const filteredPosts = filterPosts(posts, searchQuery);
    



    return (
        <div>
            <form action="/search" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
            </label>
                <input
                    value={searchQuery} 
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Enter keywords"
                    name="s"
                />
                <button className="searchButton" type="submit">Search</button>
            </form>
            <div className="back">
                {
                    filteredPosts && (
                    <>
                        <p className="subsectionTitle"> Posts </p>
                        <Grid className="searchResultList" container alignItems="stretch" spacing={4}>
                        {filteredPosts.map(post => (
                            <Grid className="searchPostResult" item alignItems="stretch" spacing={4}>
                                <Post post={post} className="posts" />
                            </Grid>
                        ))}
                        </Grid>
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default Search
