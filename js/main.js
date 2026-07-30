const saveButton = document.getElementById("saveProfile");

saveButton.addEventListener("click", function () {

    alert("Your profile has been saved successfully!");

});
const saveButton = document.getElementById("saveProfile");
const successMessage = document.getElementById("successMessage");

saveButton.addEventListener("click", function () {

    successMessage.classList.remove("d-none");

    setTimeout(function () {
        successMessage.classList.add("d-none");
    }, 3000);

});
const fields = document.querySelectorAll(
    "#profileForm input, #profileForm select"
);

const progressBar = document.getElementById("profileProgress");

function updateProgress() {

    let completed = 0;

    fields.forEach(function (field) {

        if (field.value !== "") {
            completed++;
        }

    });

    const percentage = Math.round((completed / fields.length) * 100);

    progressBar.style.width = percentage + "%";
    progressBar.textContent = percentage + "%";
}

fields.forEach(function (field) {

    field.addEventListener("change", updateProgress);
    field.addEventListener("input", updateProgress);

});