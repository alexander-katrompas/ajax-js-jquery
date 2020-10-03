"use strict";

function clearForm() {
    /*
     * this function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    /* NOTE: This next line violates the division of concerns rule,
     but it's okay for now. We will fix this later.
     */
    document.getElementById("msg").innerHTML = "<br>";
}

function sendData(fname, lname){
    //bring the message area in to report errors or "Sent!"
    let msgArea = document.getElementById("msg");

    // creat an XMLHttpRequest object
    const XHR = new XMLHttpRequest();
    
    // bring the form in
    let formData = new FormData(document.getElementById("names-form"));

    /*
     * this is an asynchronous listener. it will not execute until after
     * the server responds with a load event. It may not execute.
     */
    XHR.addEventListener('load', function (event) {
        if (XHR.responseText === "okay") {
            console.log(XHR.responseText); // for debug
            // you have to clear the form here, not in the handler
            clearForm();
            msgArea.innerHTML = "Sent!";
        } else {
            msgArea.innerHTML = "Error";
        }
    });

    /*
     * this is an asynchronous listener. it will not execute until after
     * the server responds with ae error event. It may not execute.
     */
    XHR.addEventListener('error', function (event) {
        if (XHR.statusText !== "OK") {
            msgArea.innerHTML = "Error";
        }
    });

    // this opens the connection and sends the form
    XHR.open('POST', 'process.php');
    XHR.send(formData);
    
    return;
}

function validate() {
    // start with an empty error message
    let message = "";

    //bring the message area in to report errors
    let msgArea = document.getElementById("msg");

    //get all the elements into the function
    let fNameInput = document.getElementById("first-name");
    let lNameInput = document.getElementById("last-name");

    //get all the strings in the elements and trim them
    let fname = fNameInput.value.trim();
    let lname = lNameInput.value.trim();

    //put the trimmed versions back into the form for good user experience (UX)
    fNameInput.value = fname;
    lNameInput.value = lname;

    //test the strings from the form and store the error messages
    if (fname === "") {
        message += "First name cannot be empty.<br>";
    }

    if (lname === "") {
        message += "Last name cannot be empty.<br>";
    }

    if(message === ""){
        // no errors, so send the data to the server
        console.log("calling ajax");
        sendData(fname, lname);
    } else {
        // report errors if there are any
        console.log("errors");
        msgArea.innerHTML = message;
    }

    return;
}

//get the button into a JS object
let sendBtn = document.getElementById("names-send");

//create an event listener and handler for the send button
sendBtn.onclick = function () {
    // only need to call validate. validate will call sendData
    validate();
};

//get the button into a JS object
let clearBtn = document.getElementById("names-clear");

//create an event listener and handler for the clear button
clearBtn.onclick = function () {
    //call clear if the button is pressed
    clearForm();
};


