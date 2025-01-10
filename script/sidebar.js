
$(document).ready(function(){

    $(".icon-link").click(function(){
      $(this).siblings(".sub-menu").slideToggle("fast", ()=>{
        $(this).parents("li").siblings().children(".icon-link").siblings(".sub-menu").slideUp();
        $(this).children("i.arrow").css("transform","rotate(-90deg)");
      });
    });

    // var icon = $(".icon-link").children("a")
    //   $("icon").click(function(){
    //     $(this).parents("li").siblings(".icon-link").children(".sub-menu").slideDown("slow", ()=>{
    //       $(this).parents("li").siblings().children(".icon-link").siblings(".sub-menu").slideUp();
    //       $(this).siblings("i.arrow").css("transform","rotate(-90deg)");
    //     })
    //   })
  //let sidebar = document.querySelector(".sidebar");

  $(".SideToggle").click(function(){
    $(this).find("i").toggleClass("fa-bars fa-times");
    $(".sidebar").toggleClass("close"); 
  })

  $("i.toggle").click(function(){
      $(".sidebar").toggleClass("close"); 
  })
  
  $("li.toggle").click(function(){
    $(this).find("i").toggleClass("fa-bars fa-times");
    $(".sidebar").toggleClass("expand");
  });

  $("i.fa-times").click(function(){
    $(".sidebar").removeClass("expand"); 
    // $("li.toggle").css("display","block");
  }) 
  
  $(".aside").click(function(){
    $(".sidebar").removeClass("expand"); 
    $("li.toggle").find("i").removeClass("fa-times");
    $("li.toggle").find("i").addClass("fa-bars");
  })

  $(".icon-link").click(function(){
    $(this).siblings(".sub-menu").toggleClass("showMenu");
  })

  //  var alter = document.getElementById("alternator").className;
    $("#alternator").click(function(){
     // alert(alter);
          $(".nav").children(".moreInfo").slideToggle("slow", ()=>{
          $(this).toggleClass("rotate");
          $(".content").toggleClass("blur");
          });
    });
    
    $(".aside").click(function(){
      // alert(alter);
           $(".nav").children(".moreInfo").slideUp("slow", ()=>{
           $("#alternator").toggleClass("rotate");
           $(".content").removeClass("blur");
           });
     });
})
    