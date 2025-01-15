document.addEventListener("DOMContentLoaded", () => {
    let fileCollection = [];
    const dragSection = document.querySelector(".drag-n-browse-section");
    const inputFile = document.getElementById("browse-file");
    const browseLink = document.getElementById("browse-link");
    const fileList = document.querySelector(".file-list");


    const uploadFile = (file, onProgress, onComplete, onCancel) => {
        const chunkSize = 1024 * 1024; // 1MB per chunk
        let uploaded = 0;
        const interval = setInterval(() => {
            if (onCancel()) {
                clearInterval(interval);
                return;
            }
            uploaded += chunkSize;
            const progress = Math.min((uploaded / file.size) * 100, 100);
            onProgress(progress);

            if (uploaded >= file.size) {
                clearInterval(interval);
                onComplete();
            }
        }, 500); 
    };

    const displayFiles = (files) => {
        Array.from(files).forEach((file) => {
            const fileItem = document.createElement("div");
            fileItem.className = "file-item";

            const fileName = document.createElement("span");
            fileName.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`;

            const progressBar = document.createElement("div");
            progressBar.className = "progress-bar";

            const progress = document.createElement("div");
            progress.className = "progress";
            progressBar.appendChild(progress);

            const controls = document.createElement("div");
            controls.className = "controls";

            const cancelBtn = document.createElement("button");
            cancelBtn.textContent = "Cancel";
            cancelBtn.className = "cancel-btn";

            const resumeBtn = document.createElement("button");
            resumeBtn.textContent = "Resume";
            resumeBtn.className = "resume-btn";
            resumeBtn.style.display = "none";

            controls.appendChild(cancelBtn);
            controls.appendChild(resumeBtn);

            fileItem.appendChild(fileName);
            fileItem.appendChild(progressBar);
            fileItem.appendChild(controls);
            fileList.appendChild(fileItem);

            fileCollection.push({ file, isCanceled: false });

            const updateProgress = (percent) => {
                progress.style.width = `${percent}%`;
            };

            const onComplete = () => {
                fileItem.classList.add("completed");
                cancelBtn.style.display = "none";
                resumeBtn.style.display = "none";
            };

            const onCancel = () => fileCollection.find((f) => f.file === file).isCanceled;

            cancelBtn.addEventListener("click", () => {
                fileCollection.find((f) => f.file === file).isCanceled = true;
                cancelBtn.style.display = "none";
                resumeBtn.style.display = "inline-block";
            });

            resumeBtn.addEventListener("click", () => {
                fileCollection.find((f) => f.file === file).isCanceled = false;
                resumeBtn.style.display = "none";
                cancelBtn.style.display = "inline-block";
                uploadFile(file, updateProgress, onComplete, onCancel);
            });

            uploadFile(file, updateProgress, onComplete, onCancel);
        });
    };

    const handleInputFile = (event) => {
        const files = event.target.files;
        if (files) {
            displayFiles(files);
        }
    };

    inputFile.addEventListener("change", handleInputFile);

    dragSection.addEventListener("dragover", (event) => {
        event.preventDefault();
        dragSection.classList.add("drag-over");
    });

    dragSection.addEventListener("dragleave", () => {
        dragSection.classList.remove("drag-over");
    });

    dragSection.addEventListener("drop", (event) => {
        event.preventDefault();
        dragSection.classList.remove("drag-over");
        const files = event.dataTransfer.files;
        if (files) {
            displayFiles(files);
        }
    });

    browseLink.addEventListener("click", () => {
        inputFile.click();
    });
});
