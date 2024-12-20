import React from "react";
import { Grid2, CircularProgress } from '@mui/material';
import { useSelector } from "react-redux";

import Post from './Post/Post'
import useStyles from './styles';


const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid2 className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map(((post) =>
                    <Grid2 key={post.id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid2>
                ))}
            </Grid2>
        )
    );
}

export default Posts;