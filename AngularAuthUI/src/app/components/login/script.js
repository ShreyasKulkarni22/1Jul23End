document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form-container').classList.remove('hidden');
    document.getElementById('register-form-container').classList.add('hidden');
  });
  
  document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('register-form-container').classList.remove('hidden');
    document.getElementById('login-form-container').classList.add('hidden');
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here
    console.log('Login button clicked');
  });
  
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle register logic here
    console.log('Register button clicked');
  });
  