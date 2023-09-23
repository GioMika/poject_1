
const inputForm = document.querySelector('.inputForm')
const div_root = document.querySelector('#root')
const user_name = document.querySelector('.users')
const user_email = document.querySelector('.email')
const submit = document.querySelector('.submit')


async function asyncData(username, email) {
    const url = `https://jsonplaceholder.typicode.com/users/?username=${username}&email=${email}`;
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const not_found = document.createElement('p')
not_found.className = 'notFound'

const div_info = document.createElement('div')
div_info.className = 'divInfo'

const p_id = document.createElement('p')
const p_name = document.createElement('p')
const p_username = document.createElement('p')
const p_email = document.createElement('p')
const p_phone = document.createElement('p')
const p_web = document.createElement('p')
const input_web = document.createElement('input')
input_web.className = 'input_web'
const btn_search = document.createElement('button')


inputForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const username = user_name.value;
    const email = user_email.value;
    const userData = await asyncData(username, email)

    if (userData.length === 0) {
      div_info.innerHTML= ''

        not_found.innerText = 'Not found'
        div_root.append(not_found)
    }
    else {
        not_found.innerText = ''
        div_info.classList.remove('divInfo')
        p_username.innerText = 'User Name : ' + userData[0].username
        p_email.innerHTML = 'Email : ' + userData[0].email
        p_id.innerHTML = 'Id : ' + userData[0].id
        p_name.innerHTML = 'Name : ' + userData[0].name
        p_phone.innerHTML = 'Phone : ' + userData[0].phone
        p_web.innerHTML = 'Website : '
        input_web.value = userData[0].website

        div_info.append(p_id, p_name, p_username, p_email, p_phone, p_web, input_web,not_found)
        div_root.append(div_info)
        btn_search.className= 'search'
        btn_search.innerHTML = 'SEARCH'
        div_info.append(btn_search)
        div_info.append(input_web,btn_search)
    
    }
})

asyncData(user_name, user_email)

btn_search.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/profile.html'
})










