const loginForm = document.querySelector('#loginForm');
const allLoginFormFields = Array.from(document.querySelectorAll('#loginForm .input__group .field input'));
const loginFormSubmitBtn = document.querySelector('#loginSubmitBtn');
const showHidePassDom = Array.from(document.querySelectorAll('.showHide__Icon i'));

const patterns = { 
  username: /^[a-z]+\d?/,
  password: /^[^\d\W]\w+\d?\W?\w?/i,
};

loginForm.addEventListener('submit', (e) => {
 
  e.preventDefault();
 
  loginFormValidation();
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


function loginFormValidation() {
 
  allLoginFormFields.forEach(input => {
   
    const inputAttribueValueName = input.attributes.name.value;
    
    const inputValue = input.value.trim();
   
    const inputRegex = patterns[inputAttribueValueName].test(inputValue);

    
    if(inputValue === ''){
     
      setErrorFor(input, `${inputAttribueValueName} requis Enter votre response.`);
    }else if(inputRegex === false){ 
      
      setErrorFor(input, `${inputAttribueValueName} valid .`);
    }else{ 
      
      setSuccessFor(input);
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