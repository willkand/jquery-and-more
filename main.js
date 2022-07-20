//crate a <div> jquery
let div = $('<div>Hello World!</div>');

//add <div> to body of Doc
let body = $('body');
body.append(div);

//click listener to div (alert hello world)
div.on('click', function() {
    alert("Hello World")
})



