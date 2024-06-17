document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = new URLSearchParams();
    
    for (const pair of formData) {
      data.append(pair[0], pair[1]);
    }

    fetch('https://script.google.com/macros/s/AKfycbwSOXdA4Z6JFuhpFrsl85Zhw0-aSyOn51dgr1U5pBOnT9Hj-eWDHUTEvL6NycsRO6yz/exec', {
      method: 'POST',
      body: data
    })
    .then(response => response.text())
    .then(result => {
      if (result === 'Success') {
        alert('Submission successful!');
        event.target.reset(); // Reset the form after submission
      } else {
        alert('Submission failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('Submission failed. Please try again.');
    });
  });