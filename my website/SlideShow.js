$(function(){
    var information = $('.information');
    var degree = 0;
    $(information[1]).hide();
    $(information[2]).hide();
    var index = 0;
    console.log("ready")
    
    setInterval(function(){
        degree = degree + 120
        var curr = index - 1;
        rotate(degree, curr);
    }, 4000);

    $(".next").click(function(){
        degree = degree + 120;
        var curr = index - 1;
        rotate(degree, curr);
    });
    $(".prev").click(function(){
        degree = degree - 120;
        var curr = index + 1;
        rotate(degree, curr);
    });
    
    function rotate(degree, curr){
        if(curr >= 3)
            curr = 0;
        if(curr < 0 )
            curr = 2;
        $(information[index]).fadeOut(1000);
        $(information[curr]).fadeIn(1000);
        console.log(index + " " + curr);
        index = curr;
        $('.introduction').css({
            "transform" : "rotateY(" + degree + "deg) translateZ(" + 0 + "px)"
        })
    }

    $('.descriptions ').hide();

    var image = $('.Image')
    var descriptions = $('.descriptions');
    $('.chess').mouseover(function(){reveal($('.chess'), 0)});
    $('.timeTables').mouseover(function(){reveal($('.timeTables'), 1)});
    $('.minesweeper').mouseover(function(){reveal($('.minesweeper'), 2)});
    function reveal(target, n){
        $(target).animate({
            width: "30%",
            height: "300px"
        },2000)
        $(descriptions[n]).show(2000);
    }

    $(".nav-project, .nav-contact").click(function(e){
        if (this.hash !== ""){
            e.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            })
      }})
})