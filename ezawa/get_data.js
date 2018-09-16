
// url: 'https://teratail.com/api/v1/questions/15',
// 最後の15の部分をそれぞれのタグに応じた番号に変更することで検索結果を変えることができる
//
$.ajax({
  type: 'GET',
  url: 'https://teratail.com/api/v1/questions/5',
  dataType: 'json'
}).done(function(result){
  var len = result.length;
  console.log("読み込み完了");
  for(var i=0; i < len; i++){
    $("#questions").append("<ul id=question" + i +" ></ul>");
    $("#id=question"+i).append('<li>'+result["body"]+'</li>');
    // $(".ajax").append('<li><a href="'+text[i].link+'">'+text[i].title+'</a></li>');
  }
  console.log(result);
}).fail(function(result){
  console.log("読み込みできなかった");
});
