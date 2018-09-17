function update(){
     $(".column").each(function(){
        var column_id = $(this).data("columnid");
        url = 'https://teratail-loader.azurewebsites.net/api/HttpTriggerJS1?code=qd9LIjalN5rdlsXxvpRvsmDrbHl8BMCMAv3wr1SMlrCQhagxmuIL7g==&tagId='+ column_id;
        $.ajax({
            url: url,
            type: "GET",
            async: true
        }).done(function (data, textStatus, jqXHR) {
            $('#'+column_id).empty();
            for (var x = 0; x < data.length; x++){
                $('#'+column_id).append('<div class="column-content" data-url="' + data[x].link + '">'+ data[x].title +'</div>');
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
        });
    });
}

setInterval(update, 300000);