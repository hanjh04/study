import axios from 'axios';

const git = {
    repo: 'https://api.github.com/repos/hanjh04/study/contents'
}

const api = {
    git
}

function fetchGitRepo() {
    return axios.get(api.git.repo)
}


export {
    fetchGitRepo
}