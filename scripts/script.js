const storeUser = () => {
  const storeName = document.getElementById('userName');
  const password = document.getElementById('userPassword');

  if (storeName.value.length === 0 || password.value.length === 0) {
    alert('Please try again');
  } else {
    localStorage.setItem('userName', storeName.value);
    localStorage.setItem('userPassword', password.value);
    alert('Your account has been created');
    window.location.href = '../index.html';
  }
};

//check local storage for user
const checkUser = () => {
  const checkName = localStorage.getItem('username');
  const checkPassword = localStorage.getItem('password');

  const userName = document.getElementById('userName');
  const userPassword = document.getElementById('userPassword');

  if (userName.value === checkName && userPassword.value === checkPassword) {
    window.location.href = '../indexedDB.html';
  } else {
    alert('Error on login');
  }
};
