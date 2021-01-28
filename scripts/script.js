const localStore = () => {
  const getName = document.getElementById('username');
  const password = document.getElementById('password');

  if (getName.value.length === 0) {
    alert('Please try again');
  } else if (password.value.length === 0) {
    alert('Please try again');
  } else if (getName.value.length === 0 && password.value.length == 0) {
    alert('Please fill in email and password');
  } else {
    localStorage.setItem('name', getName.value);
    localStorage.setItem('password', password.value);
    alert('Your account has been created');
  }
};

//checking
const check = () => {
  const storedName = localStorage.getItem('getName');
  const storedPassword = localStorage.getItem('password');

  const userName = document.getElementById('username');
  const userPassword = document.getElementById('password');

  if (userName.value === storedName && userPassword.value === storedPassword) {
    alert('You are logged in.');
  } else {
    alert('Error on login');
  }
};
