function addTask() {
  const taskToAdd = document.getElementById("inputText").value;
  //addToList(taskToAdd);
  addToTable(taskToAdd);
}

function addToTable(taskToAdd) {
  const table = document.getElementById("tableArea");

  var tr = document.createElement("tr");

  //table.setAttribute("class", "shadowbox");

  var td1 = document.createElement("td");
  td1.setAttribute("contenteditable", true);
  var td2 = document.createElement("button");

  var td3 = document.createElement("button");

  var text1 = document.createTextNode(taskToAdd);
  var text2 = document.createTextNode("Update");
  var text3 = document.createTextNode("Delete");
  const id = "ToDo" + Math.random().toString(6).substr(2, 3);
  td1.appendChild(text1);
  td1.setAttribute("id", id);

  td2.appendChild(text2);
  td2.onclick = function () {
    edit(id);
    return false;
  };
  td3.appendChild(text3);
  td3.onclick = function () {
    deleteFromList(id);
    return false;
  };
  //td3.setAttribute("id", "delete" + Math.random().toString(6).substr(2, 3));
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  table.appendChild(tr);

  document.body.appendChild(table);
  document.getElementById("inputText").value = "";
}

function getClickEvent() {}

function addToList(taskToAdd) {
  const listContainer = document.getElementById("listContainer");
  const task = document.createElement("li");
  task.appendChild(document.createTextNode(taskToAdd));
  listContainer.appendChild(task);
  task.setAttribute("id", "ToDo" + Math.random().toString(6).substr(2, 3));
}

function edit(id) {}

function deleteFromList(id) {
  const tr = document.getElementById(id).parentElement;
  tr.remove();
}
