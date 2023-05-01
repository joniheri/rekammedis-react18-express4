// ShorPassword
$(document).ready(function() {
  $('#showPassword').click(function() {
    if ($(this).is(':checked')) {
      $('#inputPassword').attr('type', 'text');
  } else {
      $('#inputPassword').attr('type', 'password');
    }
  });
});

// ShowConfirmPassword
$(document).ready(function() {
  $('#showConfirmPassword').click(function() {
    if ($(this).is(':checked')) {
      $('#inputConfirmPassword').attr('type', 'text');
    } else {
      $('#inputConfirmPassword').attr('type', 'password');
    }
  });
});
