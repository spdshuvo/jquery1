$(function(){
    $("#hide").click(function(){
        $('#cheak').hide(1000)
    })

    $("#show").click(function(){
        $('#cheak').show(2000)
    })
    $("#toggle").click(function(){
        $('#cheak').toggle(2000)
    })
    $("#fadein").click(function(){
        $('#fade').fadeIn(2000)
    })
    $("#fadeout").click(function(){
        $('#fade').fadeOut(2000)
    })
})