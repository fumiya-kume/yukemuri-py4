function add_tag() {
    $(".tag").toggle();
}

function tag(i){
    $(".tag").toggle();
    url = '?id=' + i;
    $.ajax({
        url: url,
        type: "GET",
        async: true,
    }).done(function (data, textStatus, jqXHR) {
        data
    }).fail(function (jqXHR, textStatus, errorThrown) {
    });
}