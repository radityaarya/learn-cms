$(document).ready(function() {
  if (localStorage.getItem("token")) {
        $('#navbar').append(`  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
              <a href="index.html" class="navbar-brand" href="#" style="color: white">Content Management System</a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <a href="" class="nav-link" href="index.html" style="color: rgb(200, 200, 200)">Home<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="data.html" style="color: rgb(200, 200, 200)">Data</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="data-date.html"style="color: rgb(200, 200, 200)">Date</a>
                  </li>
              </ul>
              <div class="loginorlogout">
                <a onclick="loginPage()" id="login-submit" tabindex="1" class="form-control btn btn-danger">Log out</a>
              </div>
          </div>`)
        $('#welcome').append(`
          <h1 class="display-3">Selamat datang, ${localStorage.getItem('username')}!</h1>
          <hr class="my-4">
          <p class="lead">May the force be with you</p>`)
      }
  else {
    $('#welcome').append(`  <h4 class="display-4">Silakan register / login dahulu!</h4>
      <br>
      <div class="row">
          <div class="col-2">
              <a onclick="loginPage()" id="login-submit" tabindex="1" class="form-control btn btn-primary">Log In</a>
          </div>
      </div>`)
  }
})

function loginPage(){
  localStorage.clear()
  window.location.href = 'http://127.0.0.1:41981/login.html'
}

function home(){
  location.reload();
}

function data() {
  window.location.href = 'http://127.0.0.1:41981/data.html'
}

function date() {
  window.location.href = 'http://127.0.0.1:41981/data-date.html'
}
