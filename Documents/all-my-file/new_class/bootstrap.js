// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', () => {
        alert('Contact button clicked!');
    });
});


  // const dropdownButton = document.getElementById('dropdownMenuButton');
  // const dropdownIcon = document.querySelector('.dropdown-icon');

  // dropdownButton.addEventListener('click', () => {
  //     dropdownIcon.classList.toggle('open'); // Toggle class to change style
  //   });