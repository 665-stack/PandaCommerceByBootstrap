//for btn disableed
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('delete-btn');

    if (event.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true)
    }
})
// change
document.getElementById('delete-confirm').addEventListener('change', function () {
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
})
