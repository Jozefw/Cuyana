$(document).ready(function(){
    var jsonURL = "scripts/books.json";
    $.getJSON(jsonURL,function(json){
        var imgList = '';
        $.each(json.book_list,function(){
            imgList += '<li class="image__wrapper"><span class="image__title">'+ this.title +'</span><img class="image_pic" src= "' + this.imageLink + '"></li>';

        });
        $('.center-section__book-list').append(imgList);
    });
});