const createTeamFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#typeNewTeamNameX').value.trim();
    const password = document.querySelector('#typeNewTeamPasswordX').value.trim();

    if (name && password) {
        const response = await fetch('/api/teams/', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/teamDash');
        } else {
            alert(response.statusText);
        }
    }
};

const joinTeamFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#typeExistTeamNameX').value.trim();
    const password = document.querySelector('#typeJoinTeamPasswordX').value.trim();

    if (name && password) {
        const response = await fetch('/api/teams/jointeam', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/teamDash');
        } else {
            alert(response.statusText);
        }
    }
};

const chooseTeamHandler = async (event) => {
    event.preventDefault();

    const button = event.target;
    console.log(button.id);
    const team_id = button.id;
    if (button.matches(".btn")) {
        const response = await fetch('/api/teams/chooseTeam', {
            method: 'POST',
            body: JSON.stringify({ team_id }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
        document.location.replace('/teamDash');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#joinSubmit').addEventListener('click', joinTeamFormHandler);
document.querySelector('#createSubmit').addEventListener('click', createTeamFormHandler);
document.querySelector('#joinTeam').addEventListener('click', chooseTeamHandler);


