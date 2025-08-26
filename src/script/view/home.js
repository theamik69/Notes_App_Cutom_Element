import Utils from '../utils.js';
import notesData from '../data/local/notes-data.js';

const home = () => {
  let currentNotes = [...notesData];

  const colors = ['yellow', 'pink', 'blue', 'green', 'purple', 'orange'];

  const renderNotes = () => {
    const container = document.querySelector('notes-container');
    container.setAttribute('gutter', '24');
    
    if (!container) {
      console.error('Element with id "notesContainer" not found in the DOM.');
      return;
    }

    Utils.emptyElement(container);

    const activeNotes = currentNotes.filter(note => !note.archived);

    if (activeNotes.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📭</div>
          <div class="empty-state-text">No notes yet</div>
          <div class="empty-state-subtext">Click "Add Note" to create your first note</div>
        </div>
      `;
      return;
    }
        
    activeNotes.forEach((note, index) => {
      const noteCard = document.createElement('note-card');
      
      noteCard.id = note.id;
      noteCard.title = note.title;
      noteCard.body = note.body;
      noteCard.category = note.category || 'PERSONAL';
      noteCard.color = note.color || colors[index % colors.length];
      noteCard.createdAt = note.createdAt;
      noteCard.archived = note.archived;

      container.appendChild(noteCard);
    });
    
  };

  const setupEventListeners = () => {
    document.addEventListener('note-save', (event) => {
      const newNote = event.detail;
      
      currentNotes.unshift(newNote);
      
      renderNotes();
      showNotification('Note created successfully! ✨');
    });

    document.addEventListener('note-click', (event) => {
      console.log('Note clicked:', event.detail);
    });
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 16px 24px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      z-index: 2000;
      animation: slideInRight 0.3s ease;
      font-weight: 600;
      font-size: 14px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    if (!document.querySelector('#notification-styles')) {
      const style = document.createElement('style');
      style.id = 'notification-styles';
      style.textContent = `
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  renderNotes();
  setupEventListeners();
};

export default home;