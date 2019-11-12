
var width = screen.width;
var height = $("#myVideo").height();
var about_us_content = $('#about_us_content')
var myVideo = $('#myVideo')
var about_us_throne = $('.about_us_throne')
var divTheme = $(".Theme")
var divStats = $(".Stats")
var divEvents = $(".Events")
var themeContent = $("#theme-content")
$(window).on("load", function() { console.log("Hey guyssss") });

var isPhone = false

var x = document.getElementsByClassName("sac")
var z =0;
for(i = 0;i<14;i++){
  z=x[i].getTotalLength()
  x[i].style.strokeDasharray = z
  x[i].style.strokeDashoffset = z
}

var doc = document, w = window;
var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
        doc.documentElement: doc.body;

var width = docEl.clientWidth;

if(width<720){
  isPhone = true
}


$( window ).resize(function() {
  if(!isPhone){
  var width = screen.width;
  height = $("#myVideo").height();
  $(".Theme").css("top", (about_us_content.height() + 2* height) + "px")
  divEvents.css("top", (about_us_content.height()+ themeContent.height() + divTheme.height() + 2* height) + "px")
  divTheme.css("top", (about_us_content.height() + 2* $("#myVideo").height()) + "px")
  divStats.css("top", (about_us_content.height()+ themeContent.height() + divTheme.height() + 3* height) + "px")
}});

if(!isPhone){
  divTheme.css("top", (about_us_content.height() + 2* $("#myVideo").height()) + "px")
  divEvents.css("top", (about_us_content.height()+ themeContent.height() + divTheme.height() + 2* height) + "px")
  divStats.css("top",  (about_us_content.height()+ themeContent.height() + divTheme.height() + 3* height) + "px")
}else{
  divTheme.css("top", (about_us_content.height() + 2 * $("#myVideo").height()) + "px")
  divEvents.css("top", (about_us_content.height()+ themeContent.height() + divTheme.height() + 2* height) + "px")
  divStats.css("top",  (about_us_content.height()+ themeContent.height() + divTheme.height() + divEvents.height() - 150) + "px")
}

  function show() {
   document.getElementById('intro-page').classList.add('show')
  }

  function aa() {
   document.getElementById('abc').classList.remove('overFlow')
  }


$(window).on("load",function () {
  if(!isPhone){

    document.getElementById("loading-div").classList.add('hide')
    document.getElementById("logo").classList.add('prati-logo-start')
    document.getElementById("table-images").classList.add('reveal-animation')
    for(var q = 0;q<80;q++)
    document.getElementsByClassName("grid-images")[q].classList.add('grid-images-animation')

    document.getElementById("intro-collage").classList.add('intro-collage-animation')
    document.getElementById("final-collage").classList.add('final-collage-animation')
    setTimeout(show, 2500);
    setTimeout(aa, 10500);

  }else{
    aa();
    document.getElementById("loading-div").classList.add('hide')
    document.getElementById("logo").classList.add('prati-logo-start')
  }
})

$(window).on('scroll',function(){

  var a
  var offsetY = $(window).scrollTop()

  if(!isPhone){

  if(offsetY<height){
    about_us_throne.css("bottom","0px")
    myVideo.css("top","0px")

  }else if(offsetY>height && offsetY<(height+$("#about_us_content").height())){
    myVideo.css("top", offsetY-height+"px")
    about_us_throne.css("bottom","-"+ (offsetY-height)+"px")
  }
  else if (offsetY>(height*2+$("#about_us_content").height())&&offsetY<(height*2.5+$("#about_us_content").height())) {
    myVideo.css("top", $("#about_us_content").height()+"px")
    about_us_throne.css("bottom","-"+ ($("#about_us_content").height())+"px")
    document.getElementById("theme-guns").classList.add("reveal-gun")
    document.getElementsByClassName("theme-row")[0].style.opacity = 1 - 2*(offsetY-(height*2+$("#about_us_content").height()))/height

  }else if (offsetY>(height*2.8+$("#about_us_content").height())&&offsetY<(height*3.8+$("#about_us_content").height())) {

    for(i = 0;i<14;i++){
      z=x[i].getTotalLength()
      x[i].style.strokeDashoffset =z- z*(offsetY-(height*2.8+$("#about_us_content").height()))/(height*1)
    }

  }else if (offsetY>(height*3.8+$("#about_us_content").height())&&offsetY<(height*5.5+$("#about_us_content").height())){
    for(i = 0;i<14;i++){
      x[i].style.strokeDashoffset = 0
    }

  }
}
else{

    if(offsetY>about_us_content.height() + 1.3* $("#myVideo").height() && offsetY<about_us_content.height() + 1.5* $("#myVideo").height()){
      document.getElementById("theme-guns").classList.add("reveal-gun")
      document.getElementsByClassName("theme-row")[0].style.opacity = 1
    }else if(offsetY>about_us_content.height() + 1.5* $("#myVideo").height() && offsetY<about_us_content.height() + 1.8* $("#myVideo").height()){

    }
    else if(offsetY>about_us_content.height() + 1.8* $("#myVideo").height() && offsetY<about_us_content.height() + 2.7* $("#myVideo").height()){
      document.getElementsByClassName("theme-row")[0].style.opacity = 1 - 2*(offsetY-(height*1.8+$("#about_us_content").height()))/(height)

                for(i = 0;i<14;i++){
                  z=x[i].getTotalLength()
                  x[i].style.strokeDashoffset =z- z*(offsetY-(height*1.8+$("#about_us_content").height()))/(height*0.9)
                }
    }else if(offsetY>about_us_content.height() + 2.7* $("#myVideo").height()){

      for(i = 0;i<14;i++){
        x[i].style.strokeDashoffset = 0
      }

    }

}

})


function showPoster() {
  $('#poster').addClass('put-it-front');
}

