document.addEventListener("DOMContentLoaded", () => {
    let budget = 0;
    let expense = [];
    let totalExpense = 0;
    let balance = 0;

    const budgetForm = document.querySelector(".budget-form");
    const expenseForm = document.querySelector(".expense-form");
    const budgetInput = document.getElementById("budget-amount");
    const titleInput = document.getElementById("product-title");
    const expenseInput = document.getElementById("product-cost");
    const expenseList = document.querySelector(".expense-list");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modal = document.querySelector(".modal");

    const updateStatistics = () => {
        document.querySelector(".budget-number").textContent = budget;
        document.querySelector(".expense-number").textContent = totalExpense;
        document.querySelector(".balance-number").textContent = balance;
    };

    const renderList = () => {
        expenseList.innerHTML = '';
        expense.forEach((item, index) => {
            const expenseElement = document.createElement("div");
            expenseElement.className = "expense-element";
            expenseElement.innerHTML = `
                <span>${item.title}</span>
                <span>${item.cost}</span>
                <div>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            expenseList.appendChild(expenseElement);
        });
    };

    const toggleModal = (content) => {
        modal.innerHTML = content;
        modalOverlay.classList.toggle("active");
    };

    budgetForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = parseInt(budgetInput.value);
        if (value > 0) {
            budget = value;
            balance = budget - totalExpense;
            updateStatistics();
            budgetForm.reset();
        } else {
            alert("Please enter a valid budget.");
        }
    });

    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const cost = parseInt(expenseInput.value);
        if (title && cost > 0) {
            expense.push({ title, cost });
            totalExpense += cost;
            balance = budget - totalExpense;
            updateStatistics();
            renderList();
            expenseForm.reset();
        } else {
            alert("Please enter a valid expense.");
        }
    });

    expenseList.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        if (e.target.classList.contains("delete-btn")) {
            toggleModal(`
                <p>Are you sure you want to delete this expense?</p>
                <button class="close-modal">Cancel</button>
                <button class="confirm-delete-btn" data-index="${index}">Delete</button>
            `);
        } else if (e.target.classList.contains("edit-btn")) {
            const { title, cost } = expense[index];
            toggleModal(`
                <p>Edit Expense</p>
                <input type="text" id="edit-title" value="${title}" />
                <input type="number" id="edit-cost" value="${cost}" />
                <button class="close-modal">Cancel</button>
                <button class="confirm-edit-btn" data-index="${index}">Save</button>
            `);
        }
    });

    modalOverlay.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-modal")) {
            modalOverlay.classList.remove("active");
        } else if (e.target.classList.contains("confirm-delete-btn")) {
            const index = e.target.getAttribute("data-index");
            totalExpense -= parseInt(expense[index].cost);
            balance = budget - totalExpense;
            expense.splice(index, 1);
            updateStatistics();
            renderList();
            modalOverlay.classList.remove("active");
        } else if (e.target.classList.contains("confirm-edit-btn")) {
            const index = e.target.getAttribute("data-index");
            const newTitle = document.getElementById("edit-title").value.trim();
            const newCost = parseInt(document.getElementById("edit-cost").value);
            if (newTitle && newCost > 0) {
                totalExpense -= parseInt(expense[index].cost);
                expense[index] = { title: newTitle, cost: newCost };
                totalExpense += newCost;
                balance = budget - totalExpense;
                updateStatistics();
                renderList();
                modalOverlay.classList.remove("active");
            } else {
                alert("Please enter valid data.");
            }
        }
    });
});
