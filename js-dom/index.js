let blogHeads = document.getElementsByClassName('blog');
for(let blog of blogHeads){
    blog.style.backgroundColor = '#f5f5f5';
    blog.style.fontSize = '2em';
    blog.style.border = '1px solid #000';
    blog.style.marginBottom = '1em';
    blog.parentElement.parentElement.parentElement.style.backgroundColor = 'red';
    // blog.firstChild.style.fontSize = '3em';
    blog.setAttribute('data', 'sani');
    blog.classList.add('shimu');
    blog.childNodes[1].style.fontSize = '3em';
    console.log(blog.childElementCount);
}

const ul = document.getElementById('myDiv')
const li = document.createElement('li');
li.innerText = 'Hello';
li.innerText = 'hi';
ul.appendChild(li);