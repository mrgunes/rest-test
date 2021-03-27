var Request = require("request");
 
// Start of markdown
var textToConvert = `Heading
=======
## Sub-heading
 
Paragraphs are separated
by a blank line.
 
Two spaces at the end of a line  
produces a line break.
 
Text attributes _italic_, 
**bold**, 'monospace'.
A [link](http://example.com).
Horizontal rule:`;
 
// End of markdown
                    
Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:5000/convertmd",
    "body": JSON.stringify({
        "content": textToConvert,
        "username": "admin",
        "password": "smagazine"
    })
}, function(error, response, body){
    // If we got any connection error, bail out.
    if(error) {
        return console.log(error);
    }
    // Else display the converted text
    console.dir(JSON.parse(body));
});