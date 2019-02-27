$(document).ready(function() {
    wideORland();
    $(window).resize(function(){
        wideORland();

        $(".project").each(function(index, element){
           //$(element).css("height", $(element).height());
        });
    });
    $("a.top").click(function(event) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $(document).scroll(function(){
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            $("#section_1").addClass("scrolled");
        } else {
            //$("#section_1").removeClass("scrolled");
            //$("#section_2").removeClass("view");
        }

        if($("#section_1").hasClass("scrolled")) //for
            view("#section_2", false);

        view("#section_3", false);
        view("#section_4", false);
        view("#section_5", false);

        view(".personal-quot", false);
        view(".quotation-1", false);
        view(".quotation-2", false);
        view(".quotation-3", false);
    });
});
function wideORland() {
    if(screen.width > screen.height){
        $("html").removeClass("land");
        $("body").removeClass("land");
        $("#section_1").removeClass("land");
        $("html").addClass("wide");
        $("body").addClass("wide");
        $("#section_1").addClass("wide");

        $("#section_2").css("margin-top","0");
    }
    else{
        $("html").removeClass("wide");
        $("body").removeClass("wide");
        $("#section_1").removeClass("wide");
        $("html").addClass("land");
        $("body").addClass("land");
        $("#section_1").addClass("land");

        $("#section_2").css("margin-top",screen.height*20/100);
    }
}
function  IsElementInScreen(element) {
    var top = $(element).offset().top;
    var bottom = $(element).offset().top + $(element).height();

    if(document.body.scrollTop + screen.availHeight >= top && document.body.scrollTop <= bottom){
        return true;
    }
    return false;
}
function view(element, repeat) {
    if(IsElementInScreen(element)){
        $(element).addClass("view");
    }
    else{
        if(repeat) {
            $(element).removeClass("view");
        }
    }
}