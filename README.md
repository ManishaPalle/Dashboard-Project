# 📊 Dashboard Frontend Trainee Assignment

This is a React-based **Dashboard  Frontend Trainee Project** with categories and widgets.  
The project uses **React, Redux, and JSON data** to dynamically manage widgets.

---

## 🚀 Features
- Add and manage widgets dynamically
- Organized categories
- Redux store for state management
- Responsive frontend with modern UI

---

## 📦 Prerequisites
Make sure you have the following installed:

- [Node.js (LTS version recommended)](https://nodejs.org/)
- npm (comes with Node.js)

Check versions:
```bash
node -v
npm -v

Installation & Setup
1. Clone the repository

      - git clone https://github.com/your-username/your-repo-name.git
      - cd your-repo-name

2. Install dependencies
      npm install

3. Run the development server
      npm start



   Project Structure

    src/
 ├── components/           # UI Components
 │   ├── AddWidgetModal.js # Modal to add widgets
 │   ├── Category.js       # Component for each category
 │   ├── Dashboard.js      # Main dashboard layout
 │   └── Widget.js         # Individual widget component
 │
 ├── features/             # Redux slices
 │   └── dashboardSlice.js
 │
 ├── data/                 # JSON/Data files
 │   └── widgetPool.js
 │
 ├── App.js                # Root React component
 ├── index.js              # React entry point
 ├── store.js              # Redux store setup
 └── index.css             # Global styles


