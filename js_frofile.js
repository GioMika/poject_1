
const post_btn = document.querySelector('.posts')
const albums_btn = document.querySelector('.albums')
const todos_btn = document.querySelector('.todos')
const back = document.querySelector('.btn_back')


post_btn.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/posts.html'
})

albums_btn.addEventListener('click', () => {

    window.location.href = 'http://127.0.0.1:5501/albums.html'
})

todos_btn.addEventListener('click', () => {

    window.location.href = 'http://127.0.0.1:5501/todos.html'
})

back.addEventListener('click', () => {
  
    window.location.href = 'http://127.0.0.1:5501/project_1/index.html'
})