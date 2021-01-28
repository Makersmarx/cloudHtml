const storeUser = () => {
  const storeName = document.getElementById('username');
  const password = document.getElementById('password');

  if (storeName.value.length === 0 || password.value.length === 0) {
    alert('Please try again');
  } else {
    localStorage.setItem('username', storeName.value);
    localStorage.setItem('password', password.value);
    alert('Your account has been created');
    window.location.href = 'index.html';
  }
};

//check local storage for user
const checkUser = () => {
  const storedName = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  const userName = document.getElementById('userName');
  const userPassword = document.getElementById('userPassword');

  if (userName.value === storedName && userPassword.value === storedPassword) {
    window.location.href = '../index.html';
  } else {
    alert('Error on login');
  }
};
