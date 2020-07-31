'use strict';

$('#editButton').on('click', function() {
  $('.modifyForm').show();
  $('.modifyP').hide();
});

$('#plant-details').on('click', function() {
  $('#hide-details').toggle();
  if($('#plant-details').text() === 'See Plant Details'){
    $('#plant-details').text('Hide Plant Details');
  }
  else if($('#plant-details').text() === 'Hide Plant Details'){
    $('#plant-details').text('See Plant Details');
  }
});
