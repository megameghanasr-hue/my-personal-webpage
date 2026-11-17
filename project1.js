
const projectPhoto = document.getElementById("projectPhoto");
const projectImage = document.getElementById("projectImage");
const uploadContent = document.getElementById("uploadContent");
const removePhoto = document.getElementById("removePhoto");

projectPhoto.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Please select a valid image.");
        this.value = "";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        projectImage.src = event.target.result;

        projectImage.style.display = "block";
        uploadContent.style.display = "none";
        removePhoto.style.display = "block";

    };

    reader.readAsDataURL(file);

});

removePhoto.addEventListener("click", function () {

    projectImage.src = "";
    projectImage.style.display = "none";

    uploadContent.style.display = "flex";
    removePhoto.style.display = "none";

    projectPhoto.value = "";

});
