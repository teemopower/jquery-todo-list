$(document).ready(function(){


$('button#add').on('click',function(){

  console.log('clicked');

  var newTask = $('#addDisplay').val(); // input value

  console.log(newTask);

  $('.success').html('<p>Added an item!</p>').fadeIn('slow').delay(2000).fadeOut('slow');

  var newTodo = '<li>';
      newTodo +='<input type="checkbox">';
      newTodo +='<label>'+ newTask +'</label>';
      newTodo +='<button class="delete">Delete</button>';
      newTodo +='</li>';
      
      $('ul#todoList').append(newTodo);
      
      $('#addDisplay').val('');
});

//CHECKBOX
  $('ul').on('change','input[type="checkbox"]', function(){
    var parent = $(this).parent();
    parent.remove();
    
    countTask();
  });

//DELETE
  $('ul').on('click','.delete',function(){
    $(this).parent().remove();
    countTask();
  });

//COUNTER
  function countTask(){
    var remainTask = $('#todoList li').length;
  };



});