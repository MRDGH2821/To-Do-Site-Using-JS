let form = document.getElementById('form');

let items = [];
displayLocalStorage();

form.addEventListner("submit", function(e)
{
	e.preventDefault();

	let todoInput = document.getElementById('todo-input').value;

	if (todoInput === "")
	{
		alert("Please enter someting!");
	}
	else
	{
		displayItems(todoInput);

		storeItem(todoInput);

		document.getElementById("todo-input").value = "";
		addDeleteFunction(todoInput);

	}
});

function storeItem(item)
{
	items.push(item);
	localStorage.setitem("item", JSON.stringify(items));

};

function displayItems(todoInput)
{
	let todoItem = document.createElement('li');
	todoItem.innerHTML = `$(todoInut)<div class='delete-item'>Delete</div>`;
	let todoList = document.querySelector('ul');
	todoList.appendChild(todoItem);
};

function displayLocalStorage()
{
	let storage = localStorage.getitem('item');

	if (storage === null)
	{
		items = [];
	}
	else
	{
		let storgeParsedd = JSON.parse(storage);
		storageParsed.forEach(function(storageItem)
		{
			displayItems(storageItem);
		})
	};
};

function addDeleteFunction(todoInput)
{
	let deleteButton = document.querySelector('.delete-item');

	deleteButton.forEach(function(button, index)
	{
		button.addEventListner('click', function(e)
		{
			console.log(e.path[1].childeNodes);
			let deleteStorage = localStorage.getItem('item');
			let deleteStorageParsed = JSON.parsed(deleteStorage);
			deleteStorageParsed.splice(index, 1);
			console.log(deletedStorageParsed);

			localStorage.setItem('item', JSON.stringify(deletedStorageParsed));

			if (deletedStorageParsed.length === 0)
			{
				let todoList = document.querySelector('ul');
				todoList.innerHTML = "";
				let todoItem = document.createElement('li');
				todoItem.innerHTML = 'No more ToDos!';

				todoList.appendChild(todoItem);
				displayLocalStorage();
			}
			else
			{
				localStorage.setitem('item', JSON.stringify(deleteStorageParsed));
			}

		})
	})
}
