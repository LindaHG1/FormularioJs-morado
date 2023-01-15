const FORM = document.getElementById('main__form')
const NAME = document.getElementById('nombre')
const EMAIL = document.getElementById('email')
const USER = document.getElementById('usuario')
const PASS = document.getElementById('contraseña')
const PARRAFO = document.getElementById('warnings')
const SENDBUTTON = document.getElementById('sendbtn')

FORM.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ''
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let enviado = ''
    PARRAFO.innerHTML = ''
    if(NAME.value.length <3){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    console.log(regexEmail.test(EMAIL.value))
    if(!regexEmail.test(EMAIL.value)){
        warnings += `El email no es valido <br>`
        entrar = true

    }
    if(PASS.value.length <8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        PARRAFO.innerHTML = warnings   
    }
})

// else{
//     PARRAFO.innerHTML = `Enviado Correctamente`
//     removeClass(warnings)
//     addClass(enviado)
// }
// campo de nombre solo con letras

//campo de apellidos solo letras

//campo usuario

//campo contraseña

//campo DNI

//boton enviar




