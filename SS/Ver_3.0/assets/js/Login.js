
function user_change(){
    var input = document.getElementById("username").value.length
    var span = document.getElementById("user_point")
    if(input <8){
       span.style.display= "inline-block"
    }else {
        span.style.display= "none"
    }

}

function password_change(){
    var password = document.getElementById("password").value.length
    var spans = document.getElementById("password_point")
    if(password <8){
        spans.style.display= "inline-block"
     }else {
        spans.style.display= "none"
     }
}