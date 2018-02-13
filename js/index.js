function searchWiki(){
    var searchThis = $("#search").val();
    var jsonLink = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&titles=Main%20Page&srsearch=" + searchThis + "&callback=?";  
  
    $.getJSON(jsonLink, function(json){
        var html=""
        json.query.search.forEach(function(val){ //set timeout
          html+="<div class='result'>"
          html+="<a href='https://en.wikipedia.org/?curid=" + val.pageid + "'>";
          html+="<h2>" + val.title + "</h2>";
          html+="</a>";
          html+="<p>" + val.snippet + "...</p>";
          html+="</div>"
          html+="<br>";
          
          $(".results").html(html);
        });
        
      });
    if(searchThis == "")
      $(".results").html("");
  
};

$(".searchButton").click(function(){
    searchWiki();
});

$("input").keyup(function(){
    searchWiki();
    });