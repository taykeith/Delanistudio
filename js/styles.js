$(function(){
    $('block4showing').hide();

    $(".block4hidden").click(function() {
        $(".block4showing").show();
        $(".block4hidden").hide(500);
    });
    $(".block4bhidden").click(function() {
        $(".block4bshowing").show();
        $(".block4bhidden").hide(500);
    });
    $(".block4chidden").click(function() {
        $(".block4cshowing").show();
        $(".block4chidden").hide(500);
    });


    $(".block4showing").click(function() {
        $(".block4hidden").show();
        $(".block4showing").hide(500);
    });
    $(".block4bshowing").click(function() {
        $(".block4bhidden").show();
        $(".block4bshowing").hide(500);
    });
    $(".block4cshowing").click(function() {
        $(".block4chidden").show();
        $(".block4cshowing").hide(500);
    });

    $("#work1").hover(function() {
        $(this).css("background-color", "grey");
      
    });
});