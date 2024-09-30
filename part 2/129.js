const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();                                         // isko use karne se jab bhi apn todo me koi entery lege tho page refesh nhi hoga.
  const newTodoText = todoInput.value;                      // isko console me lekar hum pta laga sakte h ki ky input entery ho rhi h .
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";                                 // iske help se hum apne todo me enter karne ke baad likha hu apne aap gyab ho jyega.
});

todoList.addEventListener("click", (e) => {             // y button remove ka function h .
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {                    // y button done ka funtion h.
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";                   // is line through style se done pe click karne ke  baad uspe line aajyegi.
  }
});