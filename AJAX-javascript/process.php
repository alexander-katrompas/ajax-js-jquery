<?php

/*
 * this is simulating input, validation, processing, and output
 */
if (!empty($_POST["fname"]) && !empty($_POST["lname"])) {
    // this will be sent back to the calling function on the client
    echo "okay";
} else {
    // this will be sent back to the calling function on the client
    echo "error";
}
