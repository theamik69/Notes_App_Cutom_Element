# 📝 Notes App

A modern, elegant, and responsive web application for creating and managing personal notes. Built with vanilla JavaScript and Web Components, featuring a beautiful UI with gradient colors and smooth animations.

![Notes App](https://img.shields.io/badge/version-1.0.0-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![Web Components](https://img.shields.io/badge/Web%20Components-Ready-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **Create Notes**: Easily create new notes with title and content
- **Color Themes**: Choose from 6 beautiful color themes (Yellow, Pink, Blue, Green, Purple, Orange)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradients, smooth animations, and glassmorphism effects
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + N`: Open new note modal
  - `Escape`: Close modal
  - `Ctrl/Cmd + Enter`: Save note (when modal is open)
- **Web Components**: Modular architecture using custom elements and Shadow DOM
- **No Dependencies**: Built with pure vanilla JavaScript

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **JavaScript ES6+**: Modern JavaScript features
- **Web Components**: Custom Elements, Shadow DOM, HTML Templates
- **Local Storage**: For persistent data storage (ready for implementation)

## 📁 Project Structure

```
notes-app/
│
├── index.html                    # Main HTML file
├── src/
│   ├── app.js                   # Main application entry point
│   ├── public/
│   │   └── favicon1.png         # Application favicon
│   ├── script/
│   │   ├── components/          # Web Components
│   │   │   ├── index.js         # Components barrel export
│   │   │   ├── app-bar.js       # Header component with app title and add button
│   │   │   ├── footer-bar.js    # Footer component
│   │   │   ├── section-with-title.js  # Section wrapper component
│   │   │   ├── notes-container.js     # Grid container for notes
│   │   │   ├── note-card.js           # Individual note card component
│   │   │   └── modal-add-note.js      # Modal for creating new notes
│   │   ├── data/
│   │   │   └── local/
│   │   │       └── notes-data.js      # Sample notes data
│   │   ├── utils.js             # Utility functions
│   │   └── view/
│   │       └── home.js          # Home view logic
│   └── styles/
│       └── style.css            # Global styles
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/theamik69/Notes_App_Cutom_Element.git
cd notes-app
```

2. **Using a local server** (recommended):

   **Option A - Using Python**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option B - Using Node.js (http-server)**:
   ```bash
   npm install -g http-server
   http-server -p 8000
   ```

   **Option C - Using Live Server (VS Code)**:
   - Install the Live Server extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in browser**:
   - Navigate to `http://localhost:8000` (or the port your server is running on)

## 💡 Usage

### Creating a New Note

1. Click the **"+ Add Note"** button in the header or press `Ctrl/Cmd + N`
2. Enter a title for your note
3. Write your note content in the text area
4. Choose a color theme by clicking on one of the color options
5. Click **"Save Note"** or press `Ctrl/Cmd + Enter` to save

### Managing Notes

- **View Notes**: All notes are displayed in a responsive grid layout
- **Hover Effects**: Hover over notes to see elevation effects
- **Click Notes**: Click on any note to view details (feature ready for expansion)

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + N` | Open new note modal |
| `Escape` | Close modal |
| `Ctrl/Cmd + Enter` | Save note (in modal) |

## 🎨 Components

### `<app-bar>`
The header component containing the app logo, title, and add note button.

### `<footer-bar>`
Footer component with copyright information and links.

### `<section-with-title>`
A reusable section wrapper that displays a title and content.

### `<notes-container>`
Grid container that manages the layout of note cards. Supports custom columns, gutter spacing, and responsive design.

**Attributes**:
- `column`: Number of columns (optional, defaults to auto-fill)
- `gutter`: Space between notes in pixels (default: 24)
- `min-width`: Minimum width of note cards (default: 320)

### `<note-card>`
Individual note card component displaying note information.

**Properties**:
- `id`: Unique identifier
- `title`: Note title
- `body`: Note content
- `color`: Theme color (yellow, pink, blue, green, purple, orange)
- `createdAt`: Creation timestamp
- `archived`: Archive status

### `<modal-add-note>`
Modal dialog for creating new notes with form validation and color selection.

## 🔧 Customization

### Adding New Color Themes

To add new color themes, modify the following files:

1. **modal-add-note.js**: Add color to the `_colors` array
2. **note-card.js**: Add corresponding CSS class with gradient
3. **home.js**: Update the colors array

### Modifying Grid Layout

Adjust the notes grid by setting attributes on `<notes-container>`:

```javascript
container.setAttribute('column', '3');     // Fixed 3 columns
container.setAttribute('gutter', '32');    // 32px spacing
container.setAttribute('min-width', '280'); // 280px minimum width
```

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile** (< 480px): Single column layout, simplified UI
- **Tablet** (768px - 1024px): 2-3 columns
- **Desktop** (> 1024px): Auto-fill columns based on available space

## 👨‍💻 Author

**Ahmad Mishbah Khumainy**

- GitHub: [@theamik69](https://github.com/theamik69)
- LinkedIn: [Ahmad Mishbah Khumainy](https://www.linkedin.com/in/amik69/)

---

<p align="center">Made by Ahmad Mishbah Khumainy © 2025</p>
