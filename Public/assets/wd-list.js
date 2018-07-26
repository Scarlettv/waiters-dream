$(document).ready(function() {
 console.log("Connected!")
$('form').on('submit', function() {
  console.log('Adding a new Task!');
  let newItem = $('#inputbar1').val();
  let newPrice = $('#inputbar2').val();
  let newNotes = $('#inputbar3').val();
  let wd = {item: newItem,price: newPrice,notes: newNotes};
  $.ajax({
    type: 'POST',
    url: '/wd',
    data: wd,
    success: function(wd) {
      //Some code to do something with the Response
      console.log("Refresh Post");
      location.reload();
    }
  });
});

// Gonna be used to location reload back to home
// $('form').on('submit', function() {
//   console.log('Adding a new Task!');
//   let newItem = $('#inputbar1').val();
//   let newPrice = $('#inputbar2').val();
//   let newNotes = $('#inputbar3').val();
//   let wd = {item: newItem,price: newPrice,notes: newNotes};
//   $.ajax({
//     type: 'POST',
//     url: '/wd',
//     data: wd,
//     success: function(wd) {
//       //Some code to do something with the Response
//       console.log("Refresh Post");
//       location.reload();
//     }
//   });
// });

$('.deletebtn').on('click', function() {
  // alert("Task Completed!")
  let id = $(this).attr('id');
  // console.log(item);
  $.ajax({
    type: 'DELETE',
    url: '/' + id,
    success: function(wd) {
      //Some Code to do something with the Response
      console.log("Refresh Delete");
      location.reload();
    }
  });
});
});
