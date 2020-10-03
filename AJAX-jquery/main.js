"use strict";

function clearForm() {
    /*
     * this function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    $('#first-name').val('');
    $('#last-name').val('');
    $('#msg').html('<br>'); // minor violation of concerns, but okay for now
}

function sendData(fname, lname) {
    //bring the message area in to report errors or "Sent!"
    let msgArea = document.getElementById("msg");

    $.ajax({
        url: 'process.php',
        type: 'POST',
        data: {fname: fname, lname: lname},
        success: function (val) {
            console.log(val);
            if (val === 'okay') {
                clearForm();
                msgArea.innerHTML = "Sent!";
            } else {
                msgArea.innerHTML = "Processing Error";
            }
        },
        error: function () {
            msgArea.innerHTML = "Server Error";
        }
    });

    return;
}

function validate() {
    var message = "";

    //bring the message area in to report errors
    let msgArea = document.getElementById("msg");

    //get the strings from the text boxes and trim them
    var fname = $('#first-name').val().trim();
    var lname = $('#last-name').val().trim();

    //put the trimmed versions back into the form for good iser experience (UX)
    $('#first-name').val(fname);
    $('#last-name').val(lname);

    //test the strings from the form and store the error messages
    if (fname === "") {
        message += "First name cannot be empty.<br>";
    }

    if (lname === "") {
        message += "Last name cannot be empty.<br>";
    }

    if (message === "") {
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

/*
 * This is the jQuery docready method. It automatically executes when the DOM
 * is ready. You should always put handlers and other auto-executed code in
 * a docready function. It protects you from "race-conditions" when the JS
 * tries to execute before the DOM is complete.
 */
$(document).ready(function () {

    // event handler for the clear button
    $("#names-clear").click(function () {
        clearForm();
    });

    // event handler for the send button
    $("#names-send").click(function () {
        // only need to call validate. validate will call sendData
        validate();
    });

});