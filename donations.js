function popup() {
  const messages = ["You're all set. Thank you for your donation! You will receive an invoice via email shortly.", "Your donation has been sent. Thank you! You will receive an invoice via email shortly.", "You have submitted your donation successfully. You will recieve an invoice via email shortly."];
  let randomnum = getRandomInt(5);
  if (randomnum == 0) {
    alert(messages[0]);
  }
  if (randomnum == 1) {
    alert(messages[1]);
  }
  if (randomnum == 2) {
    alert(messages[2]);
  }
  if (randomnum == 3) {
    alert(messages[3]);
  }
  if (randomnum == 4) {
    alert(messages[4]);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
