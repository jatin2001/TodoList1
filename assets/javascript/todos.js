$("ul").on("click","li" , function(){

    $(this).toggleClass("completed")
})
$("ul").on("click","span" ,function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
 
    if(event.which===13){
        
        var newTodo = $(this).val() ;
        $(this).val("");
        $("ul").append("<li><span class='delete'><i class='fa fa-trash-o' aria-hidden='true'></i></span>"+newTodo+"</li>");
    }
      

})

$("#add" ).on("click",function(){
    $("input").fadeToggle();
})

