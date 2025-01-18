import cards from "./card.js";

document.addEventListener("DOMContentLoaded", () => {
  const theList = document.getElementById("the-list");

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("draggable", "true"); // Enable dragging

    const cardImage = document.createElement("img");
    cardImage.src = card.img;
    cardImage.alt = card.name;

    cardDiv.appendChild(cardImage);
    theList.appendChild(cardDiv);

    // Add drag event listeners
    cardDiv.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", card.name); // Pass card name as data
      e.target.classList.add("dragging");
    });

    cardDiv.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });
  });

  // Drag-over behavior for the drop zone
  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
    e.target.classList.add("drag-over");
  };

  const handleDragEnter = (e) => {
    e.target.classList.add("drag-on");
  };

  const handleDragLeave = (e) => {
    e.target.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.classList.remove("drag-over");
    const data = e.dataTransfer.getData("text/plain");
    console.log(`Dropped card: ${data}`);
  };

  // Attach drop-zone event listeners
  theList.addEventListener("dragover", handleDragOver);
  theList.addEventListener("dragenter", handleDragEnter);
  theList.addEventListener("dragleave", handleDragLeave);
  theList.addEventListener("drop", handleDrop);
});
