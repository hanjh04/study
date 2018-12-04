import axios from 'axios';
import POSTS from './dummy-data/posts/posts.json'

const git = {
    repo: 'https://api.github.com/repos/hanjh04/study/contents',
    content: 'https://raw.githubusercontent.com/hanjh04/study/master'
        //https://raw.githubusercontent.com/hanjh04/study/master/vue/vue_issues/index1.html
        //https://raw.githubusercontent.com/hanjh04/study/master/README.md
}

const api = {
    git,
    posts: 'file///C:/Users/janghohan/Documents/GitHub/study/toy/my-web/src/api/dummy-data-posts/posts.json'
}

function fetchGitRepo(filepath) {
    filepath = filepath || ''
    return axios.get(api.git.repo + '/' + filepath);
}

function fetchGitContent(filepath) {
    filepath = filepath || ''
    return axios.get(api.git.content + '/' + filepath);
}

function fetchPosts() {
    // fake-api여서 주석처리. 12.04
    // return axios.get(api.posts);
    return POSTS;
}

export {
    fetchGitRepo,
    fetchGitContent,
    fetchPosts
}