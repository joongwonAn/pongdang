$(function(){
    var i = 0;
    var color = ["#ff4781", "black"];
    var iconClass = ["fas fa-heart", "far fa-heart"];

    $('.icon_good').click(function(){
        $(this).attr("class", iconClass[i]);
        $(this).css({"color": color[i], "font-size": "28px" });
        i++;
        if(i==2){i=0};
    });

    var j = 0;
    var color = ["#ff4781", "black"];
    var iconBookmark = ["fas fa-bookmark", "far fa-bookmark"]

    $('.icon_bookmark').click(function(){

        $(this).attr("class", iconBookmark[j]);
        $(this).css({"color": color[j], "font-size": "28px"});
        j++;
        if(j==2){j=0};
    });
});

//하트, 북마크 클릭시 분홍색으로 바뀌는 것

$(function(){
    $('.comment_more').click(function(){
        if($('.comment_more').hasClass('comment_more')){
            $('.comment_more').css("visibility", "hidden");
            $('.comment').css({"visibility":"visible", "display":"block"});
        }
    })
});
//댓글 더보기

$(function(){
    $('.post_more').click(function(){
        if($('.post_more').hasClass('post_more')){
            $('.post_more').css("visibility", "hidden");
        }
    })
});

//피드 내용 더보기

//더보기
$('.post_more').click(function(){
    $(this).parent().children('.diary_post_section').removeClass('diary_post_section').addClass('diary_post_default');
})

$(function(){
    $('.comment_button').mouseenter(function(){
        $(this).css('background-color','#ff4781');
        $(this).css('color','white');
    });

    $('.comment_button').mouseleave(function(){
        $(this).css('background-color','lightgray');
        $(this).css('color','darkgray');
    });

});