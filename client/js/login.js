// template for login form
$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

// JQuery
function createUser(){
  $(document).ready(function(){
    $.ajax({
      url  : "http://localhost:3000/users/register",
      type : "POST",
      data: {
        username: $('#register-username').val(),
        password: $('#register-password').val()
      },
      success: function(data) {
        console.log(data.err);
        if (data.err) {
          alert(data.err)
        }
        else {
          alert("Register success! Please login to continue!")
        }

      }
    })
  })
}

function login(){
    $.ajax({
      url  : "http://localhost:3000/users/login",
      type : "POST",
      data: {
        username: $('#login-username').val(),
        password: $('#login-password').val()
      },
      success: function(data) {
        if (data.err) alert(data.err)
        else {
          localStorage.setItem("token", data.token)
          localStorage.setItem("username", data.username)

          window.location.href = 'http://127.0.0.1:8080/index.html'
        }
      }
    })
}
