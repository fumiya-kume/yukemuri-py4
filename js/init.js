function init(){
    url = 'https://teratail-loader.azurewebsites.net/api/HttpTriggerJS1?code=qd9LIjalN5rdlsXxvpRvsmDrbHl8BMCMAv3wr1SMlrCQhagxmuIL7g==&tagId=' + 3;
    $.ajax({
        url: url,
        type: "GET",
        async: true
    }).done(function (data, textStatus, jqXHR) {
        for (x = 0; x < data.length; x++){
            $('#' + 3).append('<div class="column-content" data-url="' + data[x].link + '">'+ data[x].title +'</div>');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        alert("通信に失敗しました。再読込して下さい。");
        return 0;
    });

    url = 'https://teratail-loader.azurewebsites.net/api/HttpTriggerJS1?code=qd9LIjalN5rdlsXxvpRvsmDrbHl8BMCMAv3wr1SMlrCQhagxmuIL7g==&tagId=' + 2;
    $.ajax({
        url: url,
        type: "GET",
        async: true
    }).done(function (data, textStatus, jqXHR) {
        for (x = 0; x < data.length; x++){
            $('#' + 2).append('<div class="column-content" data-url="' + data[x].link + '">'+ data[x].title +'</div>');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        alert("通信に失敗しました。再読込して下さい。");
        return 0;
    });
}

$(document).on("click", ".column-content", function(){
    window.open($(this).data("url"));
});