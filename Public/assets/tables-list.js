$(document).ready(function() {
 console.log("Connected!")
$('form').on('submit', function() {
  console.log('Adding a new Task!');
  let newTable = $('#i1').val();
  let Waiter = $('#i2').val();

  let orders = {table: newTable, waiter: Waiter};
  $.ajax({
    type: 'POST',
    url: '/orders',
    data: orders,
    success: function(orders) {
      //Some code to do something with the Response
      console.log("Refresh Post");
      location.reload();
    }
  });
});
});
