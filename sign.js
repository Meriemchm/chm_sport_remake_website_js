const signUpForm = document.querySelector('#signUpForm');
const allSignUpFormFields = Array.from(document.querySelectorAll('#signUpForm .input__group:not(.confirm__group) .field input'));
const passwordField = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#signUpConfirmPassword');
const signUpFormSubmitBtn = document.querySelector('#signUpSubmitBtn');
const showHidePassDom = Array.from(document.querySelectorAll('.showHide__Icon i'));


const patterns = { 
  username: /^[a-z]+\d?/,
  email: /^[^\W\d\.-_]+\w\d?@[a-z0-9]+\.([a-z0-9]{2,6})(\.[a-z0-9]{2,6})?$/,
  password: /^[^\d\W]\w+\d?\W?\w?/i,
};

signUpForm.addEventListener('submit', (e) => {
 
  e.preventDefault();
 
  signUpFormValidation();
});

// Show Hide Password
(function showHidePass() {

  showHidePassDom.forEach(icon =>{
   
    icon.addEventListener('click', () => {
      
      const targetAreaInput = icon.parentElement.parentElement.querySelector('.field input');
      
      if(icon.className === 'icon-hide'){
        
        icon.className = 'icon-show';
      
        targetAreaInput.setAttribute('type', 'text');
      }else{ 
        
        icon.className = 'icon-hide';
        
        targetAreaInput.setAttribute('type', 'password');
      };
    });
  });
})();

function signUpFormValidation() {

  allSignUpFormFields.forEach(input => {
    
    const passwordFieldValue = passwordField.value.trim();
    const conifrmPassValue = confirmPassword.value.trim();
   
    const inputAttribueValueName = input.attributes.name.value;
   
    const inputValue = input.value.trim();
    
    const inputRegex = patterns[inputAttribueValueName].test(inputValue);

  
    if(inputValue === ''){
    
      setErrorFor(input, `${inputAttribueValueName}  requis Entrer votre response.`);
    }else if(inputRegex === false){ 
      setErrorFor(input, `${inputAttribueValueName} valid .`);
    }else{ 
    
      setSuccessFor(input);
    };

    // Validation The Confirm Password
    if(conifrmPassValue === ''){ 
      setErrorFor(confirmPassword, `Mot de passe confirmer  est requis. Voyez entrer votre reponse.`);
    }else if(conifrmPassValue !== passwordFieldValue){ 
  
      setErrorFor(confirmPassword, `le mot de passe confirmer ne match pas`);
    }else{ 
  
      setSuccessFor(confirmPassword);
    };

  });
};

function setErrorFor(input, message){

  const targetParentInput = input.parentElement.parentElement;
 
  const targetErrorMessage = targetParentInput.querySelector('.input__error_message');

 
  targetParentInput.classList.remove('formSuccess');
  
  targetParentInput.classList.add('formError');
  
  targetErrorMessage.innerHTML = message;
};

function setSuccessFor(input){
  
  const targetParentInput = input.parentElement.parentElement;
  const targetErrorMessage = targetParentInput.querySelector('.input__error_message');

  targetParentInput.classList.remove('formError');
  targetParentInput.classList.add('formSuccess');
  targetErrorMessage.innerHTML = '';
};