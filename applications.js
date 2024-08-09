function popup() {
  const messages = ["You're all set. Thank you for submitting your application!", "Your application has been sent. Thank you!", "You have submitted your application successfully.", "hi", "..."];
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
