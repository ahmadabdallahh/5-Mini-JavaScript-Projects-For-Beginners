/**
 * Persistent To-Do List - main.js
 *
 * This file implements a simple persistent ToDo list using vanilla JavaScript and localStorage.
 * It provides functionality to add, remove, and persist ToDo items across browser sessions.
 *
 * ## Main Features:
 * - Add new ToDo items via an input field.
 * - Remove existing ToDo items.
 * - Persist the ToDo list in localStorage so that items remain after page reloads.
 * - Render the list dynamically in the DOM.
 *
 * ## DOM Elements:
 * - itemsElements: The container div where ToDo items are rendered.
 * - itemInput: The input field for entering new ToDo items.
 * - addItem: The button to add a new item (uses onclick in HTML).
 *
 * ## Storage:
 * - storageKey: The key used in localStorage to store the ToDo items array.
 *
 * ## Functions:
 * - renderItems(): Renders the current items array to the DOM, creating elements for each item and its remove button.
 * - loadItems(): Loads the items array from localStorage (if present) and renders them.
 * - saveItems(): Saves the current items array to localStorage.
 * - addItems(): Adds a new item from the input field to the items array, updates the DOM, and saves to storage.
 * - removeItems(index): Removes the item at the given index from the items array, updates the DOM, and saves to storage.
 *
 * ## Event Listeners:
 * - On DOMContentLoaded, loadItems() is called to initialize the list from storage.
 */

// Array to hold the ToDo items in memory
let items = [];

// DOM element references
const itemsElements = document.getElementById('items');
const itemInput = document.getElementById('itemInput');
const addItem = document.getElementById('addItem');
const storageKey = 'items';

/*
 * Renders the current items array to the DOM.
 * For each item, creates a container with the item text and a remove button.
 */

function renderItems() {
  itemsElements.textContent = null;
  for (const [index, item] of Object.entries(items)) {
    const containerItems = document.createElement('div');
    containerItems.className = 'todo-item';

    const text = document.createElement('p');
    text.textContent = item;

    const btnRm = document.createElement('button');
    btnRm.textContent = 'Remove';
    btnRm.className = 'btn-remove';
    btnRm.addEventListener('click', () => removeItems(index));

    containerItems.appendChild(text);
    containerItems.appendChild(btnRm);

    itemsElements.appendChild(containerItems);
  }
}

/**
 * Loads the items array from localStorage (if present) and renders them.
 */

function loadItems() {
  let oldItems = localStorage.getItem(storageKey);
  if (oldItems) {
    items = JSON.parse(oldItems);
  }
  renderItems();
}

/**
 * Saves the current items array to localStorage.
 */
function saveItems() {
  let stringItem = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItem);
}

/**
 * Adds a new item from the input field to the items array.
 * Updates the DOM and saves to storage.
 * Alerts if the input is empty.
 */
function addItems() {
  let value = itemInput.value;
  if (!value) {
    alert('You can not Add Empty Item!');
    return;
  }
  items.push(value);
  renderItems();
  itemInput.value = '';
  saveItems();
}

/**
 * Removes the item at the given index from the items array.
 * Updates the DOM and saves to storage.
 * @param {number|string} index - The index of the item to remove.
 */
function removeItems(index) {
  items.splice(index, 1);
  renderItems();
  saveItems();
}

// Initialize the ToDo list from storage when the DOM is loaded
document.addEventListener('DOMContentLoaded', loadItems);
