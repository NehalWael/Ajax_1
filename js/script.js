
/////////****** attr()
// $(document).click(function(){

//     $("#myImage").attr('src' , 'images/portfolio-2.jpg')
// });


$(".image-item").click(function(e){
    let myImage =  $(e.target).attr('src' );
    $("#myImage").attr('src' , myImage)

});

/////****** css()

// $('body').click(function(){

//     $("body").css("backgroundColor" , 'red')
// })