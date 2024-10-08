document.getElementById('contact-form').addEventListener('submit',
function(event) {
    event.preventDefault();

    alert('Mensaje enviado con exito');

    this.onsubmit();
});


function alertita(){
    alert ("Enviado con exito!")
}
