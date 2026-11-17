const certificateInput =
    document.getElementById("certificateInput");

const certificateGallery =
    document.getElementById("certificateGallery");

certificateInput.addEventListener("change", function () {

    const files = Array.from(this.files);

    files.forEach(function(file) {

        if (
            !file.type.startsWith("image/") &&
            file.type !== "application/pdf"
        ) {
            alert("Please upload an image or PDF certificate.");
            return;
        }

        // Create certificate card
        const card = document.createElement("div");
        card.className = "certificate-card";

        // Certificate name
        const heading = document.createElement("h3");
        heading.textContent = file.name;

        card.appendChild(heading);

        // Create file URL
        const fileURL = URL.createObjectURL(file);

        // Display image
        if (file.type.startsWith("image/")) {

            const img = document.createElement("img");

            img.src = fileURL;
            img.alt = file.name;

            card.appendChild(img);

        } else {

            const pdfText = document.createElement("p");

            pdfText.textContent = "PDF Certificate";

            card.appendChild(pdfText);
        }

        // View button
        const viewLink = document.createElement("a");

        viewLink.href = fileURL;
        viewLink.target = "_blank";
        viewLink.textContent = "View Certificate ↗";

        card.appendChild(viewLink);

        // Remove button
        const removeButton = document.createElement("button");

        removeButton.textContent = "Remove Certificate";

        removeButton.className = "remove-btn";

        removeButton.addEventListener("click", function() {

            const confirmDelete = confirm(
                "Are you sure you want to remove this certificate?"
            );

            if (confirmDelete) {

                URL.revokeObjectURL(fileURL);

                card.remove();

            }

        });

        card.appendChild(removeButton);

        // Add to gallery
        certificateGallery.appendChild(card);

    });

    this.value = "";

});