document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    try {
      const response = await fetch('http://127.0.0.1:5000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
  
      if (response.ok) {
        alert('User registered successfully!');
        document.getElementById('register-form').reset();
      } else {
        const error = await response.text();
        alert(error);
      }
    } catch (error) {
      alert('Error registering user');
    }
});


// async function fetchUsers() {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/users/users');
//       const users = await response.json();
//       const usersList = document.getElementById('users-list');
//       usersList.innerHTML = '';
//       users.forEach(user => {
//         const li = document.createElement('li');
//         li.textContent = `Name: ${user.name}, Email: ${user.email}`;
//         usersList.appendChild(li);
//       });
//     } catch (error) {
//       alert('Error fetching users');
//     }
// }

//   // Fetch users when the page loads
// fetchUsers();

  