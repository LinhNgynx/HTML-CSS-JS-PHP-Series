document.addEventListener("DOMContentLoaded", () => {
    const cardSection = document.getElementById("card-section");
    const addCardBtn = document.getElementById("add-card");
    const addModal = document.getElementById("add-modal");
    const form = document.getElementById("form-add");
    const cancelBtn = document.getElementById("cancel-btn");
    let editIndex = null;
    let card = [];
  
    const handleAdd = () => {
      addModal.classList.remove("hidden");
      addCardBtn.style.display = "none";
      cardSection.style.display = "none";
      editIndex = null;
      form.reset();
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newCard = {
        question: document.getElementById("question").value,
        answer: document.getElementById("answer").value,
        displayAnswer: false,
      };
      
      if (editIndex !== null) {
        card[editIndex] = newCard;
      } else {
        card.push(newCard);
      }
      
      closeModal();
      renderCards();
    };
  
    const renderCards = () => {
      cardSection.innerHTML = '';
      card.forEach((cardItem, index) => {
        const cardItemHTML = `
          <div class="card-item" data-index="${index}">
            <p>Question: ${cardItem.question}</p>
            <button class="toggle-btn">Show/Hide</button>
            ${cardItem.displayAnswer ? `<p>Answer: ${cardItem.answer}</p>` : ""}
            <div class="edit-delete-btn">
               <button class="edit-btn">Edit</button>
               <button class="delete-btn">Delete</button>
            </div>
          </div>`;
        cardSection.innerHTML += cardItemHTML;
      });
    };
  
    const closeModal = () => {
      addModal.classList.add("hidden");
      addCardBtn.style.display = "";
      cardSection.style.display = "";
    };
  
    cardSection.addEventListener("click", (e) => {
      const target = e.target;
      const cardItem = target.closest(".card-item");
      if (!cardItem) return;
      const cardIndex = parseInt(cardItem.getAttribute("data-index"));
      
      if (target.classList.contains("toggle-btn")) {
        card[cardIndex].displayAnswer = !card[cardIndex].displayAnswer;
        renderCards();
      } else if (target.classList.contains("delete-btn")) {
        card.splice(cardIndex, 1);
        renderCards();
      } else if (target.classList.contains("edit-btn")) {
        editIndex = cardIndex;
        document.getElementById("question").value = card[editIndex].question;
        document.getElementById("answer").value = card[editIndex].answer;
        addModal.classList.remove("hidden");
        addCardBtn.style.display = "none";
        cardSection.style.display = "none";
      }
    });
  
    addCardBtn.addEventListener("click", handleAdd);
    form.addEventListener("submit", handleSubmit);
    cancelBtn.addEventListener("click", closeModal);
  });
  