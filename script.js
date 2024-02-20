
let myText = document.getElementById("myText");



function show(){
    const hundred = document.getElementById('hundred').value;
    if(myText.textContent === ''){
        myText.textContent = '';
    }else{
        myText.textContent = '';
    }
    for(let i = 1; i <= hundred; i++){
       

        const newElement = document.createTextNode(`${i};`)
        myText.append(newElement);
    }

    
}
document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('myButton');
  

    document.addEventListener('keypress', function(event) {

      if (event.keyCode === 13) {
    
        button.click();
      }
    });
  });


