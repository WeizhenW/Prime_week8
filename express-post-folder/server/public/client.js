$(document).ready(onReady);
function onReady() {
    console.log('in jq');
//jquery ajax method: async js and html
    $.ajax({
        method: 'GET',
        url: '/quotes'//promise
    }).then(function(response) {
        // $('ul').empty();
        console.log(response);
        for(let i = 0 ; i < response.length; i ++) {
            $('ul').append(`<li>${response[i].text} - ${response[i].author}</li>`);

        }
    });   
    //res.send => response

    $('#submitButton').on('click', addQuote);
}

function addQuote() {
    const newQuote = $('#quoteInput').val();
    const newAuthor = $('#authorInput').val();
    const newObj = {text: newQuote, author: newAuthor};
    $('input').empty();
    console.log(newObj);

    $.ajax({
        method: 'POST',
        url: '/new',
        data: newObj //whatever data is on the client, will be passed to the post route req.body
    }).then(
        $.ajax({
            method: 'GET',
            url: '/quotes'//promise
        }).then(function(response) {
            console.log(response);
            $('ul').empty();
            for(let i = 0 ; i < response.length; i ++) {
                $('ul').append(`<li>${response[i].text} - ${response[i].author}</li>`);
    
            }

        })
    )
}
