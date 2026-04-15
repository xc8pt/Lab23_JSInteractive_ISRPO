const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const cityInput = document.getElementById('city');
const hobbyInput = document.getElementById('hobby');

const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const displayCity = document.getElementById('displayCity');
const displayHobby = document.getElementById('displayHobby');

const nameError = document.getElementById('nameError');
const ageError = document.getElementById('ageError');
const cityError = document.getElementById('cityError');
const hobbyError = document.getElementById('hobbyError');

const clearBtn = document.getElementById('clearBtn');

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Имя обязательно для заполнения';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (ageInput.value.trim() === '') {
        ageError.textContent = 'Укажите возраст';
        isValid = false;
    } else {
        ageError.textContent = '';
    }

    if (cityInput.value.trim() === '') {
        cityError.textContent = 'Введите город';
        isValid = false;
    } else {
        cityError.textContent = '';
    }

    if (hobbyInput.value.trim() === '') {
        hobbyError.textContent = 'Расскажите о хобби';
        isValid = false;
    } else {
        hobbyError.textContent = '';
    }

    return isValid;
}

function updateProfileDisplay() {
    displayName.textContent = nameInput.value.trim() || '-';
    displayAge.textContent = ageInput.value.trim() || '-';
    displayCity.textContent = cityInput.value.trim() || '-';
    displayHobby.textContent = hobbyInput.value.trim() || '-';
}

function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
        updateProfileDisplay();
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.textContent = 'Сохранено!';
        setTimeout(() => {
            submitBtn.textContent = 'Сохранить';
        }, 1000);
    }
}

function clearAllData() {
    nameInput.value = '';
    ageInput.value = '';
    cityInput.value = '';
    hobbyInput.value = '';

    nameError.textContent = '';
    ageError.textContent = '';
    cityError.textContent = '';
    hobbyError.textContent = '';

    displayName.textContent = '-';
    displayAge.textContent = '-';
    displayCity.textContent = '-';
    displayHobby.textContent = '-';
}

form.addEventListener('submit', handleSubmit);
clearBtn.addEventListener('click', clearAllData);