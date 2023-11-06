"use strict"

let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#totScore');

upVote.addEventListener('click', () =>{
    input1.innerHTML = parseInt(input1.value) + 1;
});

downVote.addEventListener('click', () =>{
    input2.value = parseInt(input2.value) + 1;
});
