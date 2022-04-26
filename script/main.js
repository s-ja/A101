let i = 0;
$(function(){
  popup();
  tab_menu();
//   carousel()
  let interval_id = setInterval(carousel, 3000);
  nav();
})

function nav(){
    $("#gnb > li").mouseenter(function(){
        // $(this).children(".lnb") : 하나만
        $(this).children("a").addClass("on")
        $(".lnb").stop().slideDown() //모두
    })
    $("#gnb > li").mouseleave(function(){
        $(this).children("a").removeClass("on")
        $(".lnb").stop().slideUp()
    })
    $(".lnb > li").mouseenter(function(){
        $(this).children("a").addClass("sub")
    })
    $(".lnb > li").mouseleave(function(){
        $(this).children("a").removeClass("sub")
    })
}

function carousel(){
    if(i >=3) i = 0;
    let y_pos = -300 * i;
    $("#items").css({
        marginTop: y_pos
    });
    i++;
}

function tab_menu(){
    $(".board_title a:first").click(function(){
        $(this).addClass("active");
        $(this).next().removeClass("active");
        $(".gallery").hide();
        $(".news").show();
    });
    $(".board_title a:last").click(function(){
        $(this).addClass("active");
        $(this).prev().removeClass("active");
        $(".gallery").show();
        $(".news").hide();
    });
}

function popup(){
    $(".news li:first").click(function(){
        $("#modal").show();
    });
    $("#modal button").click(function(){
        $("#modal").hide()
    })
}