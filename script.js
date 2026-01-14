function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const hourSelect = document.getElementById("hour");
    const minuteSelect = document.getElementById("minute");
    const ampmSelect = document.getElementById("ampm");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value.trim();
    const date = dateInput.value;
    const hour = hourSelect.value;
    const minute = minuteSelect.value;
    const ampm = ampmSelect.value;

    if (task === "") {
        alert("Enter task");
        return;
    }

    let dateTime = "No date & time";
    if (date && hour && minute) {
        const d = new Date(date);
        const formattedDate = d.toLocaleDateString("en-GB"); // dd/mm/yyyy
        dateTime = `${formattedDate} • ${hour}:${minute} ${ampm}`;
    }

    const li = document.createElement("li");

    const leftDiv = document.createElement("div");

    const taskText = document.createElement("div");
    taskText.className = "task-text";
    taskText.textContent = task;

    const taskDate = document.createElement("div");
    taskDate.className = "task-date";
    taskDate.textContent = dateTime;

    leftDiv.appendChild(taskText);
    leftDiv.appendChild(taskDate);

    const btnDiv = document.createElement("div");
    btnDiv.className = "task-buttons";

    // Done button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = function () {
        li.classList.toggle("done");
    };

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        const newText = prompt("Edit task", taskText.textContent);
        if (newText && newText.trim() !== "") {
            taskText.textContent = newText;
        }
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    btnDiv.appendChild(doneBtn);
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    li.appendChild(leftDiv);
    li.appendChild(btnDiv);
    taskList.appendChild(li);

    // Clear inputs
    taskInput.value = "";
    dateInput.value = "";
    hourSelect.value = "";
    minuteSelect.value = "";
}
