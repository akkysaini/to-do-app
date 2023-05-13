const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = 'text']");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();                                          // Imp. preventDefault don't let to refresh page
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <buttton class="todo-btn done">Done</buttton>
            <buttton class="todo-btn remove">Remove</buttton>
        </div>
    `;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";                  // it will clear text after adding todo
});

todoList.addEventListener("click", (e) => {
    // check if user clicked on done button
    if (e.target.classList.contains("done")) {
        // console.log("You wanna done something.")
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    };
    // check if user clicked on remove button
    if (e.target.classList.contains("remove")) {
        // console.log("You wanna remove something.")
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    };
});













