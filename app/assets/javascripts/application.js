
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets

//= require_tree .


$(document).ready(function(){

  window.setInterval(function(){
    $("#contorno-title").html("<h1>MENOS MANUTENÇÃO</h1>");
    $("#contorno-texto").html("A inexistência de juntas ou aparelhos de apoio reduz drásticamente os custos de manutenção.");
    $('.banner-bebo').css("background-image" , "url(http://res.cloudinary.com/dib2nyadi/image/upload/c_scale,e_grayscale,h_800/v1490107121/BlocoD/Bridgehampton-Crossing_CT_BEBO_img_2.jpg)");
}, 3000);

  window.setInterval(function(){
    $("#contorno-title").html("<h1>    MENOS TEMPO    </h1>");
    $("#contorno-texto").html("A superestrutura pré-fabricada é rapidamente montada, agilizando a obra e encurtando o tempo de interdição das vias afetadas.")
    $('.banner-bebo').css("background-image" , "url(http://res.cloudinary.com/dib2nyadi/image/upload/c_scale,e_grayscale,h_800/v1490107119/BlocoD/9th-possession-017.jpg)");
}, 6000);

    window.setInterval(function(){
      $("#contorno-title").html("<h1>    MAIS CONFORTO   </h1>");
      $("#contorno-texto").html("Sem juntas. Sem descontinuidade no pavimento. Sem necessidade de laje de transição");
      $('.banner-bebo').css("background-image" , "url(http://res.cloudinary.com/dib2nyadi/image/upload/c_scale,e_grayscale,h_800/v1490107121/BlocoD/dsc00327.jpg)");
  }, 9000);

});
