window.addEventListener("load", () => {
    const currentDate = new Date();
    currentYear.innerText = currentDate.getFullYear();
});

const mensaje = document.getElementById('Mensaje');

const mensajeerror = document.getElementById('mensajeError');

const button = document.getElementById('boton');



button.addEventListener('click',(event) => {
    event.preventDefault();
    console.log(event);
    validateEmpy(mensaje.value, mensaje, mensajeerror);


    });

    function validateEmpy(valueInput, divInput, divError){
        if (valueInput.length == 0){
            showError(divInput, divError);
        }
        else {
            hideError(divInput, divError);
        }
    }

    function showError(divInput, divError){
        divInput.style.border = '1px solid red';
        divError.innerHTML = '<p class="error">No debe estar vacio para enviar</p>';
    }

    function hideError(divInput, divError){
        divInput.style.border = '1px solid black';
        divError.innerHTML = '<p class="enviado">Mensaje enviado</p>';
        formula.reset();
        
        

    }


    /*function action(){
        var ancla= document.getElementsByClassName('nav-enlace');
        for (var i=0; i< ancla.length; i++){
            ancla[i]=classList.togle('desaparece');
        }
    }*/


    function accion(){
        var ancla= document.getElementsByClassName('nav-enlace');
        for (var i=0; i< ancla.length; i++){
            ancla[i]=classList.togle('desaparece');
    }
}