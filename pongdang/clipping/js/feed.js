$(function(){
    var x = 0;
    var color = ["#ff4781", "black"];
    var iconClass = ["fas fa-heart icon_good", "far fa-heart icon_good"];

    $(document).on('click', '.icon_good', function(){
        $(this).attr("class", iconClass[x]);
        $(this).css({"color": color[x], "font-size": "28px" });
        x++;
        if(x==2){x=0};
    });

    var y = 0;
    var color = ["#ff4781", "black"];
    var iconBookmark = ["fas fa-bookmark icon_bookmark", "far fa-bookmark icon_bookmark"]

    $(document).on('click', '.icon_bookmark', function(){

        $(this).attr("class", iconBookmark[y]);
        $(this).css({"color": color[y], "font-size": "28px"});
        y++;
        if(y==2){y=0};
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