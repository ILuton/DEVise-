const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#typeEmailX').value.trim();
    const password = document.querySelector('#typePasswordX').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/teamDash');
        } else {
            alert(response.statusText);
        }
    }
};



document.querySelector('.btn').addEventListener('click', loginFormHandler);
