document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const addButton = document.querySelector(".s");
    const taskText = document.querySelector('input[type="text"]');
    const warning = document.querySelector(".warning");

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        const taskAdd = taskText.value.trim();

        if (taskAdd) {
            addTask(taskAdd);
            taskText.value = "";
            warning.textContent = "";
        } else {
            warning.textContent = "Please enter a Task";
        }
    });

    container.addEventListener('click', (e) => {
        const target = e.target;
        const taskContainer = target.closest('.tasks');

        if (target.classList.contains('material-symbols-outlined')) {
            const taskElement = taskContainer.querySelector(".task");
            if (target.textContent.trim() === 'delete') {
                taskContainer.remove();
            } else if (target.textContent.trim() === 'edit') {
                const taskInput = document.createElement('input');
                taskInput.style.color = "white";
                taskInput.type = 'text';
                taskInput.classList.add('task-input');
                taskInput.value = taskElement.textContent;
                taskElement.replaceWith(taskInput);

                taskInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        taskElement.textContent = taskInput.value;
                        if (taskInput.value) {
                            taskInput.replaceWith(taskElement);
                            warning.textContent = "";
                        } else {
                            warning.textContent = "Please enter a Task";
                        }
                    }
                });
            }
        } else if (target.type === 'checkbox') {
            const taskElement = taskContainer.querySelector(".task");
            if (target.checked) {
                taskElement.style.textDecoration = 'line-through';
            } else {
                taskElement.style.textDecoration = 'none';
            }
        }
    });

    const addTask = (taskAdd) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add("tasks");

        taskContainer.innerHTML = `
            <input type="checkbox" name="task1">
            <span class="task" >${taskAdd}</span>
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">delete</span>
        `;

        container.appendChild(taskContainer);
    }
});