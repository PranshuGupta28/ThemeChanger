const buttons= document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target.id)

        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
         if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
             body.style.color ='black';
        }
         if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
             body.style.color ='red';
        }
         if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
             body.style.color ='white';
        }
         if(e.target.id==='black'){
            body.style.backgroundColor=e.target.id;
            body.style.color ='white';
        }
    })
});