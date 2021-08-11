var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById("todoInput");
var clearAll = document.getElementById("clearAll");

function markAsDone(event)
{
	event.target.parentElement.classList.add("markAsDone")
}

function addToDoList()
{
	var toDoMain = document.createElement('div')
	toDoMain.id = String(Math.random());

	var todo = document.createElement('div');
	todo.appendChild(document.createTextNode(todoInput.value));
	toDoMain.appendChild(todo);

	var todoX = document.createElement('div');
	todoX.appendChild(document.createTextNode('X'));
	toDoMain.appendChild(todoX);

	var todoEdit = document.createElement('div');
	todoEdit.appendChild(document.createTextNode('Edit'));
	toDoMain.appendChild(todoEdit);

	var todoDone = document.createElement('div');
	todoDone.appendChild(document.createTextNode('Done'));
	toDoMain.appendChild(todoDone);
	todoDone.addEventListener("click", markAsDone);

	toDoList.appendChild(toDoMain);
}

function deleteToDoList()
{
	toDoList.parentNode.removeChild(toDoList)
}

addButton.addEventListener("click", addToDoList);
clearAll.addEventListener("click", deleteToDoList);
