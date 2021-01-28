// register user in local storage

const storeUser = () => {
  const storeName = document.getElementById('userName');
  const password = document.getElementById('userPassword');

  if (storeName.value.length === 0 || password.value.length === 0) {
    alert('Please try again');
  } else {
    localStorage.setItem('userName', storeName.value);
    localStorage.setItem('userPassword', password.value);
    alert('Your account has been created');
    window.location.href = 'index.html';
    return false;
  }
};

//check local storage for saved user data

const checkUser = () => {
  const checkName = localStorage.getItem('userName');
  const checkPassword = localStorage.getItem('userPassword');

  const userName = document.getElementById('username');
  const userPassword = document.getElementById('password');

  if (userName.value === checkName && userPassword.value === checkPassword) {
    window.location.href = 'index.html';
    return false;
  } else {
    alert('Error on login');
  }
};
