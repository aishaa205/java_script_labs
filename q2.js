
// Fetch JSON data and populate the dropdown
fetch('people.json')
  .then(response => response.json())
  .then(data => {
    const select = document.getElementById('nameSelect');
    data.forEach(person => {
      const option = document.createElement('option');
      option.value = person.name;
      option.textContent = person.name;
      select.appendChild(option);
    });

    // Add change event listener to the dropdown
    select.addEventListener('change', () => {
      const selectedName = select.value;
      const details = document.getElementById('output');
      
      if (selectedName) {
        const person = data.find(p => p.name === selectedName);
        if (person) {
          details.innerHTML = `
            <strong>Name:</strong> ${person.name}<br>
            <strong>Age:</strong> ${person.age}<br>
            <strong>Email:</strong> ${person.email}
          `;
        }
      } else {
        details.textContent = 'Select a name to see details.';
      }
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
