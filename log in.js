// get
let log_in = document.getElementById('sign_in')
let sign_up = document.getElementById('sign_up')

// defult
log_in.style.display = 'black'
sign_up.style.display = 'none'

// mode
function mode(set_mode){
    if(set_mode == 'sign_up' ){
        log_in.style.display = 'none'
        sign_up.style.display = 'block'
    }
    else if(set_mode == 'sign_in' ){
        log_in.style.display = 'block'
        sign_up.style.display = 'none'
    }
    console.log(set_mode)
}