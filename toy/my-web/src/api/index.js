import axios from 'axios';

const git = {
    repo: 'https://api.github.com/repos/hanjh04/study/contents',
}

const api = {
    git
}

function fetchGitRepo(filepath) {
    filepath = filepath || ''
    console.log(api.git.repo + '/' + filepath)
    return axios.get(api.git.repo + '/' + filepath);
}

export {
    fetchGitRepo
}