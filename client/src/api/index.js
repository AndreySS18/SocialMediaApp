import axios from 'axios';

const url = 'htttp://localhost:5000/posts';

const fetchPosts = () => axios.get(url);