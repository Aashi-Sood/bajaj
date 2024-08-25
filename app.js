document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('apiForm');
    const responseOutput = document.getElementById('responseOutput');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting in the traditional way
  
      const jsonData = document.getElementById('jsonData').value;
  
      try {
        // Parse the JSON data to ensure it's valid
        const parsedData = JSON.parse(jsonData);
  
        // Make the POST request to the Django backend
        fetch('http://localhost:8000/bfhl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(parsedData)
        })
        .then(response => response.json())
        .then(data => {
          // Display the response data in the frontend
          responseOutput.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
          console.error('Error:', error);
          responseOutput.textContent = 'Error: ' + error;
        });
  
      } catch (e) {
        responseOutput.textContent = 'Invalid JSON format. Please enter valid JSON.';
      }
    });
  });
  