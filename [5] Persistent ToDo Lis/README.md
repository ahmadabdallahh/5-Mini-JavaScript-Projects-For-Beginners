# Persistent ToDo List

A simple, modern, and persistent ToDo list web app built with HTML, CSS, and JavaScript. Add, remove, and save your tasks—your list stays even after you close the browser!

## Features

- Add new ToDo items
- Remove existing items
- List persists using localStorage (remains after reload)
- Responsive design: mobile-first, adapts to desktop with two-column layout
- Touch-friendly, accessible controls
- Modern, comfortable UI

## Usage

1. Open `index.html` in your web browser.
2. Enter a task in the input field and click **Add Item**.
3. Your tasks appear in the list below. Click **Remove** to delete a task.
4. Your list is saved automatically and will reappear on your next visit.

## Responsive Design

- **Mobile-first:** Single column layout for screens <768px
- **Desktop:** Two-column layout using Flexbox for wider screens
- **Adaptable font sizes:** Uses CSS `clamp()` for smooth scaling
- **Touch-friendly:** Buttons are large and easy to tap (min 48x48px)

## Customization

- **Change the look:**
  - Edit `style.css` to adjust colors, fonts, or layout.
- **Modify functionality:**
  - Update `main.js` to add features like editing, reordering, or filtering tasks.

## Project Structure

- `index.html` – Main HTML file
- `style.css` – Responsive, modern styles
- `main.js` – JavaScript logic for ToDo list and persistence

---

Stay organized and productive with your Persistent ToDo List!
