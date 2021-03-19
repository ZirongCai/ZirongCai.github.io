
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/stand.png') {
        myImage.setAttribute('src','images/pow.png');
    } else {
        myImage.setAttribute('src','images/stand.png');
    }
}


let myHeading = document.querySelector('h2')
let myButton = document.querySelector('button')

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Dear ' + myName + ',';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dear ' + storedName + ',';

}

myButton.onclick = function() {
    setUserName();
}
