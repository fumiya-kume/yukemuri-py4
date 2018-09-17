function add_tag() {
    $(".tag").toggle();
}

function tag(i,name){
    $(".tag").toggle();
    url = 'https://teratail-loader.azurewebsites.net/api/HttpTriggerJS1?code=qd9LIjalN5rdlsXxvpRvsmDrbHl8BMCMAv3wr1SMlrCQhagxmuIL7g==&tagId=' + i;
    $.ajax({
        url: url,
        type: "GET",
        async: true
    }).done(function (data, textStatus, jqXHR) {
        $('.column-holder').append('<div class="column" id= '+ i + '><div class="column-header"><div class="title"> '+ name + '</div></div></div>');
        for (x = 0; x < data.length; x++){
            $('#' + i).append('<div class="column-content" data-url="' + data[x].link + '">' + data[x].title +'</div>');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
    });
}