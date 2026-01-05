
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullName = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;

    if (fullName === '' || email === '' || message === '') {
        alert('Por favor completa todos los campos');
        return;
    }

    emailjs.send("default_service", "template_keahnas", {
        name: fullName,
        email: email,
        message: message
    })
    .then(function() {
        alert('Mensaje enviado con éxito ✅');
        document.getElementById('form').reset();
    }, function(error) {
        alert('Error al enviar el mensaje ❌');
        console.log(error);
    });
});
