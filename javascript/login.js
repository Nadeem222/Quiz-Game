document.getElementById("signUpBtn").addEventListener('click' , function(){
    document.getElementById("loginCard").style.display = "none"
    document.getElementById("signupCard").style.display = "flex"
});
document.getElementById("loginBtn").addEventListener('click' , function(){
    document.getElementById("loginCard").style.display = "flex"
    document.getElementById("signupCard").style.display = "none"
});



// Function to handle login
document.getElementById("loginSubmit").addEventListener("click", function() {
    const usernameInput = document.getElementById("loginUsername");
    const passwordInput = document.getElementById("loginPassword");

    const username = usernameInput.value;
    const password = passwordInput.value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
        swal("Welcome!","Succesfully Login", "success");
        window.location.href = "../HTMl/websiteUI.html"
        

        usernameInput.value = "";
        passwordInput.value = "";

    } else {
        swal("Oh No!","Invalid User Name Or Password", "error");
    }
});

// Function to handle sign-up
document.getElementById("signupSubmit").addEventListener("click", function() {
    const usernameInput = document.getElementById('signupUsername');
    const passwordInput = document.getElementById('signupPassword');
    const emailInput = document.getElementById("signupEmail");

    const username = usernameInput.value;
    const password = passwordInput.value;
    const email =    emailInput.value;


    // document.querySelector('.welcomeText').style.display = "block"
    
    if (username === ""){
        swal("Must be Enter User name.","", "info");
        
    }else if(password === ""){
        swal("Must be Enter Password.","", "info");
    }else if(email === ""){
        swal("Must be Enter Email.","", "info");
    }else{
        
        const storedUsername = localStorage.getItem("username");
        const storedEmail = localStorage.getItem("email");
        
        if(storedUsername === username && storedEmail === email){
            alert(`User ALready Exist`)
        }else{
            
           
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("email", email);
            
            swal("Welcome!","Succesfully Sig Up", "success");
            window.location.href = "../HTML.websiteUI.html"

            usernameInput.value = "";
            passwordInput.value = "";
            emailInput.value = "";
        }
    }
});