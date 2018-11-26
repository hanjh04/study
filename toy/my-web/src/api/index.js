import axios from 'axios';

const api = {
    git
}
const git = {
    repoHome: 'https://api.github.com/repos/hanjh04/study/contents'
}

function fetchGitRepoHome() {
    return axios.get(api.git.repoHome)
}


export {
    fetchGitRepoHome
}