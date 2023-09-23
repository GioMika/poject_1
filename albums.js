// https://jsonplaceholder.typicode.com/albums





const div_root = document.querySelector('#root')
const post_value = document.querySelector('.albums')
const not_foun = document.createElement('p')
not_foun.className = 'not_found'
async function dataPost() {
const url = `https://jsonplaceholder.typicode.com/albums`
const response = await fetch(url)
const data =  await response.json()
return  data
}

function renderPOst(data) {
    div_root.innerHTML = ''
data.forEach(elem => {
    const p_title = document.createElement('p')
    p_title.innerHTML = elem.title 
    p_title.className = 'p_title'
    div_root.append(p_title);
});
}

post_value.addEventListener('keyup', async(e) => {
    e.preventDefault();
    not_foun.innerHTML = 'NOT FOUND';
    const res = post_value.value;
    const title_data = await dataPost();

    if (res === '') {
        div_root.innerHTML = ''; 
    } else {
        const result = title_data.filter((elem) => elem.title.includes(res));
      
        if (result.length) {
            renderPOst(result);
        } else {
            div_root.innerHTML = '';
            res.innerHTML = '';
            div_root.append(not_foun);
        }
    }
});




const back = document.querySelector('.btn_back')
back.addEventListener('click', () => {
  
    window.location.href = 'http://127.0.0.1:5501/project_1/index.html'
})