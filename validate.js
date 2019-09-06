function ValidateForm(){
    var name= document.getElementById("name");
    var email= document.getElementById("email");
    var title= document.getElementById("title");
    var message= document.getElementById("message");
    var valid=true;
    if(name.value.length<4){
        name.className="wrong-input";
        name.nextElementSibling.innerHTML="Name Must Be At Least 4 Characters";
        valid=false;}
    if(email.value.length<4){
        email.className="wrong-input";
        email.nextElementSibling.innerHTML="Email Must Be At Least 4 Characters";
        valid=false;}
    if(title.value.length<4){
        title.className="wrong-input";
        title.nextElementSibling.innerHTML="Title Must Be At Least 4 Characters";
        valid=false;}
    if(message.value.length<20){
        message.className="wrong-input";
        message.nextElementSibling.innerHTML="Message Must Be At Least 20 Characters";
        valid=false;}
    return valid;
}