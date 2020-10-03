# form-validation-js-jquery

There are two complete simple websites (1 page each) in this repository. To
use either of them, place the files from either of the folders in the root of
your local project or in your public_html directory and load the index.html
page in your browser.

The sites are as follows:

 - AJAX-javascript/ contains an example of client-side processing that
   submits to the server using raw JS and AJAX.

 - AJAX-jquery/ contains an example of client-side processing that
   submits to the server using jQuery and AJAX.

jQuery is a library that "wraps" JavaScript with simpler syntax. jQuery is not a new language, it is simply a wrapper around JavaScript that uses JavaScript itself to create simpler JavaScript syntax. i.e. it makes JavaScript easier. For example...

This is how to get a text box's value into a variable in raw JavaScript:

#### let fname = document.getElementById("first-name").value

This is the exact same thing using jQuery:

#### let fname = $('#first-name').val()

For most complex things in JavaScript, there is a simpler, easier to use jQuery version, and you can replace them one for one. There is nothing else to it. jQuery simply allows you to write your JavaScript in a simpler more compact form. You can freely mix JavaScript and jQuery and they work perfectly together, because jQuery is JavaScript.

Study the two versions and it should be easy to see the connection between JavaScript and jQuery. Some things to note:

* To use jQuery you need to load the jQuery library. You can see this at the bottom of the index.html page in the jQuery version.
* You must load the library before anything that uses jQuery, which is why it comes before main.js
* You must include a map file with your jQuery. It is included here.
* The handlers in main.js are in a docready function in the jQuery version. This exists in raw JavaScript too, but it's more common to use it with jQuery (just because it's easier).
