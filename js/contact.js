 // Your Web App URL for the Google Apps Script
 const scriptURL = 'https://script.google.com/macros/s/AKfycbyIs7i0uXX7wkxB2i5OyNRERTWwY4n-EEtBpA0skGSlQ4tpV2I0BLLLwAqGzyU2fD6h3g/exec'; // Update with your actual Web App URL

 // Reference to the form element
 const form = document.forms['contact_form']; 

 // Event listener for the form submit action
 form.addEventListener('submit', e => {
     e.preventDefault(); // Prevent the form from submitting in the traditional way

     // Create a FormData object to gather the form data
     const formData = new FormData(form);

     // Send the form data using Fetch API to the Google Apps Script Web App URL
     fetch(scriptURL, { method: 'POST', body: formData })
         .then(response => response.json()) // Parse the JSON response
         .then(response => {
             // Show success alert when the form is submitted successfully
             alert('Form Submitted Successfully!');
             form.reset(); // Reset the form after submission
         })
         .catch(error => {
             console.error('Error!', error.message); // Log the error in case of failure
         });
 });




// const scriptURL = 'https://script.google.com/macros/s/AKfycbyIs7i0uXX7wkxB2i5OyNRERTWwY4n-EEtBpA0skGSlQ4tpV2I0BLLLwAqGzyU2fD6h3g/exec'

// const form = document.forms['contact_form']

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => alert("Thank you! form is submitted successfully."))
//         .then(() => { window.location.reload(); })
//         .catch(console.error('Error! , error.message')
         

// })
