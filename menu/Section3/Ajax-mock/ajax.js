$.ajax(
    {
        url:'https://easy-mock.com/mock/5bc540424902794864203461/example/mock',
        method:'GET'
    }
    ).done(function(relust){
        console.log(relust);
        console.log(JSON.stringify(relust));
        $('p').text(JSON.stringify(relust));
 
    }).fail(function(){

})

$.getJSON(
    'https://easy-mock.com/mock/5bc540424902794864203461/example/mock',
    function(relust){
        console.log(relust);
        console.log(JSON.stringify(relust));
        $('p').text(JSON.stringify(relust));
    }
);

$.get(
    'https://easy-mock.com/mock/5bc540424902794864203461/example/mock',
    function(relust){
        console.log(relust);
        console.log(JSON.stringify(relust));
        $('p').text(JSON.stringify(relust));
    },
    'json'
);
  