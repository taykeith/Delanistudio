(document).ready(function() {
            $(".block4hidden, .block4showing").click(function() {
                $(".block4showing").toggle();
                $(".block4hidden").toggle();
                $(".block4showing").slideToggle('fast');
                $(".block4hidden").slideToggle('fast');
            });
            $(".block4bhidden, .block4bshowing").click(function() {
                $(".block4bshowing").toggle();
                $(".block4bhidden").toggle();
                $(".block4bshowing").slideToggle('fast');
                $(".block4bhidden").slideToggle('fast');
            });
            $(".block4chidden, .block4cshowing").click(function() {
                $(".block4cshowing").toggle();
                $(".block4chidden").toggle();
                $(".block4cshowing").slideToggle('fast');
                $(".block4chidden").slideToggle('fast');
            });
            $("#work1").hover(function() {
                $(this).css("background-color", "grey");
              }
