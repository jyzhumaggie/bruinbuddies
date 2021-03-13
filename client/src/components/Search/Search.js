import React, { useState, useEffect } from 'react'
import './Search.css';
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';
import { Grid } from "@material-ui/core";
import { getPosts } from '../../actions/posts';

import { useDispatch } from 'react-redux';  //allow dispatch an action: HOOK






const Search = () => {
    const posts = useSelector((state) => state.posts);  // reducers/index.js: combineReducers posts

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    
    const dispatch = useDispatch(getPosts()); //hook
    
    const [currentId, setCurrentId] = useState(null);

    // where to dispatch the action, inside useEffect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]); // dependency array
 


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

    const [searchQuery, setSearchQuery] = useState(query | '' );
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
