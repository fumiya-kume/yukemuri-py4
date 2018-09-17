function add_tag() {
    $(".tag-holder").toggle();
}

function tag(i, name) {
    $(".tag-holder").toggle();
    url = 'https://teratail-loader.azurewebsites.net/api/HttpTriggerJS1?code=qd9LIjalN5rdlsXxvpRvsmDrbHl8BMCMAv3wr1SMlrCQhagxmuIL7g==&tagId=' + i;
    $.ajax({
        url: url,
        type: "GET",
        async: true
    }).done(function (data, textStatus, jqXHR) {
        var list_holder_width = $('.list-holder').width();
        $('.list-holder').css({width: list_holder_width + 300});
        $('.tag[data-id=' + i + ']').addClass('tag-hidden');
        $('.column-holder').append('<div class="column" data-columnid="'+ i +'"><div class="column-header"><div class="title"> ' + name + '</div><i class="fas fa-times cross" onclick="delete_tag('+ i +')"></i></div><ul class="column-contents" id="' + i + '"> </ul></div>');
        for (x = 0; x < data.length; x++) {
            $('#' + i).append('<div class="column-content" data-url="' + data[x].link + '">' + data[x].title + '</div>');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
    });
}

function delete_tag(i){
    $('.column[data-columnid='+ i +']').remove();
    $('.tag[data-id=' + i + ']').removeClass('tag-hidden');
    var list_holder_width = $('.list-holder').width();
    $('.list-holder').css({width: list_holder_width - 300});
}
