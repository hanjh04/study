import axios from 'axios';

const git = {
    repo: 'https://api.github.com/repos/hanjh04/study/contents',
    content: 'https://raw.githubusercontent.com/hanjh04/study/master'
        //https://raw.githubusercontent.com/hanjh04/study/master/vue/vue_issues/index1.html
        //https://raw.githubusercontent.com/hanjh04/study/master/README.md
}

const api = {
    git
}

function fetchGitRepo(filepath) {
    filepath = filepath || ''
    return axios.get(api.git.repo + '/' + filepath);
}

function fetchGitContent(filepath) {
    filepath = filepath || ''
    console.log(api.git.content + '/' + filepath)
    return axios.get(api.git.content + '/' + filepath);
}

export {
    fetchGitRepo,
    fetchGitContent
}