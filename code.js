document.addEventListener('DOMContentLoaded', function(){
    box = document.querySelector('#box');
})

box.addEventListener('click', function(e){
    this.style.setProperty('background-color','red');
    console.log('dziala click');
    console.log('e: '+e);
    console.log(e);
    console.log('this: '+this);
    console.log(this);
})
