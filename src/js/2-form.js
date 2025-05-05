let formData = {
 email: "",
 message: ""
}

const STORAGE_KEY = "feedback-form-state".trim(); 

const refs = {
 form: document.querySelector('.feedback-form'),
 input: document.querySelector('.feedback-form input'),
 textarea: document.querySelector('.feedback-form textarea'),
}

populateForm();

refs.form.addEventListener('submit', onFormSubmit);


refs.form.addEventListener('input', evt => {
 formData[evt.target.name] = evt.target.value;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})

// form
function onFormSubmit(evt) {
 evt.preventDefault();
 const form = evt.currentTarget;

 if (formData.email === '' || formData.message === '') {
  return  alert("Fill please all fields");
 } 
  console.log(formData);

  formData = {
   email: "",
   message: ""
  }

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
 };

function populateForm() {
 
 const savedMessageFromLocalStorage = localStorage.getItem(STORAGE_KEY);

 if (savedMessageFromLocalStorage === null) return;
 
 try {
   const parsedMessage = JSON.parse(savedMessageFromLocalStorage);

   formData = parsedMessage;
   refs.input.value = formData.email;
   refs.textarea.value = formData.message;
 } catch (error) {
  alert("Something went wrong!")
 }
}
