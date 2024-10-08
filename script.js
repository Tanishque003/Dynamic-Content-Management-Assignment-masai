document.getElementById('add-item').addEventListener('click', addItem);

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName === '' || itemQuantity === '') {
        alert('Please enter both item name and quantity.');
        return;
    }

    const shoppingList = document.getElementById('shopping-list');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'shopping-list-item';

    // Create item name element
    const itemText = document.createElement('span');
    itemText.textContent = `${itemName} (Quantity: ${itemQuantity})`;
    
    // Create Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editItem(itemText);
    };

    // Create Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        shoppingList.removeChild(listItem);
    };

    // Append elements to the list item
    listItem.appendChild(itemText);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);
    
    // Append the list item to the shopping list
    shoppingList.appendChild(listItem);
    
    // Clear input fields
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}

function editItem(itemText) {
    const newItemName = prompt('Enter new item name:', itemText.textContent.split(' (Quantity:')[0]);
    const newItemQuantity = prompt('Enter new quantity:', itemText.textContent.split('Quantity: ')[1].slice(0, -1));

    if (newItemName !== null && newItemQuantity !== null) {
        itemText.textContent = `${newItemName} (Quantity: ${newItemQuantity})`;
    }
}
