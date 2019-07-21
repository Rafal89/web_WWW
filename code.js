document.addEventListener('DOMContentLoaded', function(){
    box = document.querySelector('#box');
})

box.addEventListener('click', function(){
    this.style.setProperty('background-color','red');
    console.log('dziala click');
})
