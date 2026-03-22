function addTask() {
    let input = document.getElementById('taskInput');
    let text = input.value;
    
    if (text === "") return;

    let li = document.createElement('li');
    li.innerHTML = text + ' <button class="del-btn" onclick="this.parentElement.remove()">X</button>';
    
    document.getElementById('list').appendChild(li);
    input.value = "";
}