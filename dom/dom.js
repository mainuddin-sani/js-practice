const button = document.getElementById("blue-button");
button.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "blue";
});

function background(){
    document.body.style.backgroundColor = "red";
}

document.getElementById("text-change").addEventListener("click", function(e){
    let p = document.getElementById("paragraph-text");
    p.innerHTML = "You clicked me!";
});

document.getElementById("text-change-with").addEventListener("click", function(e){
    let p = document.getElementById("paragraph-text");
    p.innerHTML = "You duble clicked clicked me!";
});

document.getElementById('update').addEventListener('click', function(e){   
    let input = document.getElementById("input-value");
    document.getElementById('paragraph-text').innerHTML = input.value;
    input.value = '';
});


// addeventlistener to the button

document.getElementById('post-button').addEventListener('click', function(e){   
    // textarea value
    let textarea = document.getElementById('textarea');
    console.log(textarea.value);
    // create paragraph
    let createPost = document.createElement('p');
    createPost.innerHTML = textarea.value;
    // create a new div
    let container = document.getElementById('container');
    container.appendChild(createPost);
    textarea.value = ''

    
});



document.getElementById('change-input').addEventListener('keyup', function(e){
    console.log(e.target.value);
   const deleteButton = document.getElementById('delete');

    if (e.target.value == "delete") {
        deleteButton.removeAttribute('disabled');   
    }else {
        deleteButton.setAttribute('disabled', true);
    }
});

document.getElementById('delete').addEventListener('click', function(e){
    let paragraph = document.getElementById('paragraph-delete');
    paragraph.style.display = 'none';
});


