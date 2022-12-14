// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const button = document.getElementById('button');

// button.addEventListener('click', (event)=>{
//     event.defaultPrevented

//     const data = {
//         username: username.value,
//         password: password.value
//     }
//     console.log(data)
// })
//  const persona = {
//     nombre: "zulma",
//     apellido: "hernandez",
//     edad: 32
//  }
//  console.log(persona.nombre);

// password.addEventListener('click.button', (d) =>{
//     for(var i=0; i<=6; i++)
//         if(password.lenght [i]<5){
//             alert("ingrese 6 o mas digitos")
//         }
// })

// const email = document.getElementById('email');

// document.getElementById('email').addEventListener('input', function() {
//     campo = event.target;
//     valido = document.getElementById('emailOK');
//     emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//     //Se muestra un texto a modo de ejemplo, luego va a ser un icono
//     if (emailRegex.test(campo.value)) {
//       valido.innerText = "válido";
//     } else {
//       valido.innerText = "incorrecto";
//     }
// });

// expresion regular, es un conjunto de reglas que se usan para definir el formato de un string


// document.getElementById("myTextField").focus();
// Disabling a button
// document.querySelector('#button').disabled = true;
// Enabling a disabled button to enable it again
// document.querySelector('#button').disabled = false;



let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("button");
// a@a.a
username.addEventListener('input', (event) => {
    // console.log(event.target.value);
    if (event.target.value.length >= 7){
        // console.log(event.target.value);
        emailregex = new RegExp(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]/);
        emailisvalid = emailregex.test(event.target.value);
// el emailregex.test me guardo un true o un false
        if (!emailisvalid){
            document.getElementById("error-user").style.display ="block";
            btn.disabled = true;
        } else {
            document.getElementById("error-user").style.display ="none";
            btn.disabled = false;
        }
    }
})
btn.addEventListener('click', (event) => {
    if (password.value == "" || password.value.length < 6){
        document.getElementById("error-pw").style.display = "block";
        password.focus();
    } else if (username.value == ""){
        document.getElementById("error-user").style.display = "block";
        password.focus();
    }
    else {
        document.getElementById("error-pw").style.display = "none";
        window.location= "./bienvenida.html" ;
    }
})




