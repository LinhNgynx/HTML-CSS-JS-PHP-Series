document.addEventListener("DOMContentLoaded", () => {
    const chooseFileBtn = document.getElementById("choose-file-btn");
    const fileInput = document.getElementById("choose-file-input");
    const fileNameDisplay = document.querySelector(".file-name");
    const dropZone = document.getElementById("drop-zone");

    const handleBtnClick = () => fileInput.click();

    const updateFileName = (files) => {
        if (files.length > 0) {
            const fileNames = Array.from(files).map(file => file.name).join(", ");
            fileNameDisplay.textContent = fileNames;
        } else {
            fileNameDisplay.textContent = "No file chosen";
        }
    };

    const handleInputChange = (event) => {
        const files = event.target.files;
        updateFileName(files);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        dropZone.classList.add("drag-over");
    };

    const handleDragLeave = () => {
        dropZone.classList.remove("drag-over");
    };

    const handleDrop = (event) => {
        event.preventDefault();
        dropZone.classList.remove("drag-over");
        const files = event.dataTransfer.files;
        fileInput.files = files; // Assign dropped files to input
        updateFileName(files);
    };

    // Event Listeners
    chooseFileBtn.addEventListener("click", handleBtnClick);
    fileInput.addEventListener("change", handleInputChange);
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("dragleave", handleDragLeave);
    dropZone.addEventListener("drop", handleDrop);
});
