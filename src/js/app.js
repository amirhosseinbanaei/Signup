const singIn = document.querySelector('.singIn');
const userNameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
singIn.addEventListener('click', function () {
   if (emailInput.value !== '' && passwordInput.value !== '' && userNameInput.value !== '') {
      const user = {
         username: userNameInput.value,
         email: emailInput.value,
         password: passwordInput.value
      }
      fetch('http://localhost:3000/amir', {
         method: 'POST',
         mode: 'no-cors',
         body: JSON.stringify(user)
      }).then(res => console.log(res))
   } else {
      console.log('error');
   }
})