document.addEventListener("DOMContentLoaded", () => {
    let combineFilters = [
      {
        name: "Brightness",
        amount: 100,
        cssFilter: "brightness"
      },
      {
        name: "Saturation",
        amount: 100,
        cssFilter: "saturate"
      },
      {
        name: "Inversion",
        amount: 0,
        cssFilter: "invert"
      },
      {
        name: "Grayscale",
        amount: 0,
        cssFilter: "grayscale"
      },
    ];
    let currentFilter = combineFilters[0];
    let currentRotation = 0;
    let currentFlipX = 1;
    let currentFlipY = 1;
  
    const filterBtns = document.querySelectorAll(".filter-btn");
    const filterHeader = document.getElementById("filter-header");
    const filterValue = document.getElementById("filter-value");
    const rangeValue = document.getElementById("range-value");
    const chooseImageBtn = document.querySelector(".choose-image-btn");
    const saveImageBtn = document.querySelector(".save-image-btn");
    const fileInput = document.getElementById("fileInput");
    const imageToEdit = document.getElementById("image-to-edit");
    const resetFilterBtn = document.querySelector(".reset-filter-btn");
  
    const selectFilterBtns = (e) => {
      const selectedName = e.target.innerText;
      currentFilter = combineFilters.find((filter) => filter.name === selectedName);
      renderFilter();
    };
  
    const changeValue = (e) => {
      currentFilter.amount = e.target.value;
      renderFilter();
    };
  
    const renderFilter = () => {
      filterHeader.innerText = currentFilter.name;
      filterValue.innerText = currentFilter.amount;
      rangeValue.value = parseInt(currentFilter.amount);
      applyFilters();
    };
  
    const applyFilters = () => {
      let filterString = combineFilters.map(filter => {
        return `${filter.cssFilter}(${filter.amount}%)`;
      }).join(" ");
      imageToEdit.style.filter = filterString;
    };
  
    const saveImage = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = imageToEdit.width;
      canvas.height = imageToEdit.height;
  
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(currentFlipX, currentFlipY);
      ctx.rotate((currentRotation * Math.PI) / 180);
      ctx.drawImage(
          imageToEdit,
          -canvas.width / 2,
          -canvas.height / 2,
          canvas.width,
          canvas.height
      );
      ctx.restore();
  
      ctx.filter = combineFilters
          .map(filter => `${filter.cssFilter}(${filter.amount}%)`)
          .join(" ");
      ctx.drawImage(imageToEdit, 0, 0, canvas.width, canvas.height);
  
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "edited-image.png";
      link.click();
  };
  
  
    const resetFilters = () => {
      combineFilters[0].amount=100;
      combineFilters[1].amount=100;
      combineFilters[2].amount=0;
      combineFilters[3].amount=0;
      renderFilter();
    };
  
    const rotateImage = (direction) => {
      currentRotation += direction === "left" ? -90 : 90;
      imageToEdit.style.transform = `rotate(${currentRotation}deg) scaleX(${currentFlipX}) scaleY(${currentFlipY})`;
    };
  
    const flipImage = (axis) => {
      if (axis === "horizontal") {
        currentFlipX = currentFlipX === 1 ? -1 : 1;
      } else if (axis === "vertical") {
        currentFlipY = currentFlipY === 1 ? -1 : 1;
      }
      imageToEdit.style.transform = `rotate(${currentRotation}deg) scaleX(${currentFlipX}) scaleY(${currentFlipY})`;
    };
  
    renderFilter();
  
    filterBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => selectFilterBtns(e))
    );
    rangeValue.addEventListener("input", changeValue);
  
    chooseImageBtn.addEventListener("click", () => {
      fileInput.click();
    });
  
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imageToEdit.src = e.target.result;
          imageToEdit.style.display = "block";
          saveImageBtn.disabled = false;
        };
        reader.readAsDataURL(file);
      }
    });
  
    saveImageBtn.addEventListener("click", saveImage);
    resetFilterBtn.addEventListener("click", resetFilters);
  
    document.querySelector(".rotate-left").addEventListener("click", () => rotateImage("left"));
    document.querySelector(".rotate-right").addEventListener("click", () => rotateImage("right"));
    document.querySelector(".arrows-h").addEventListener("click", () => flipImage("horizontal"));
    document.querySelector(".arrows-v").addEventListener("click", () => flipImage("vertical"));
  });
  