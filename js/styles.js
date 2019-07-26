$(document).ready(function(){
    $("#design,#design-hide").click(function(){
    $("#design, #design-hide").toggle();
    });
    
    $("#dev,#dev-hide").click(function(){
      $("#dev, #dev-hide").toggle();
      });
    
      $("#prod,#prod-hide").click(function(){
        $("#prod, #prod-hide").toggle();
        prod
    });
    
    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });


  
      $("form").submit(function(){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('textarea').value;
        if (name !=="" && email !=="" && message !==""){
          alert("Thank you" + " "+ name + " "+ "we have received your message. Thank you for reaching out to us. ");
        }else{
          alert("Insert your name, email and message");
        }
        event.preventDefault();
        
      });
    });