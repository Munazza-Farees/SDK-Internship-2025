# SDK-Internship-2025: Food Court Site

## Overview
This project is a full-stack web application for managing a food court, featuring a Django REST backend and a React frontend. The backend is nearly complete, while the frontend is open for contributions, especially for adding new pages and features.

---

## Getting Started

### 1. Clone or Fork the Repository
- **Clone:**
  ```bash
  git clone <repo-url>
  ```
- **Fork:**
  Use the GitHub interface to fork the repository, then clone your fork locally.

---

## Project Structure

```
Food Court Site/
├── backend/      # Django REST API (almost complete)
├── frontend/     # React app (add your pages here)
├── db.sqlite3    # SQLite database (for development)
├── manage.py     # Django management script
└── venv/         # Python virtual environment (not included in repo)
```

---

## Backend (Django)
- **Location:** `Food Court Site/backend/`
- **Status:** Almost complete. Contains models for menu items and orders, and REST API endpoints for menu and order management.
- **API Endpoints:**
  - `GET /api/menu/` — List menu items
  - `POST /api/orders/` — Create a new order
  - `GET /api/orders/<uuid>/` — Retrieve order details
- **Setup:**
  1. Create a virtual environment (Python 3.11 recommended)
  2. Install dependencies:
     ```bash
     pip install django djangorestframework
     ```
  3. Run migrations:
     ```bash
     python manage.py migrate
     ```
  4. Start the server:
     ```bash
     python manage.py runserver
     ```

---

## Frontend (React)
- **Location:** `Food Court Site/frontend/`
- **Status:** Open for contributions! Add new pages and features.
- **Setup:**
  1. Navigate to the frontend folder:
     ```bash
     cd "Food Court Site/frontend"
     ```
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Start the development server:
     ```bash
     npm start
     ```
- **Adding Pages:**
  - Add new components/pages in `src/`.
  - Update `App.js` to include your new pages (consider adding React Router for navigation).

---

## Contribution Guidelines
- **Frontend:**
  - Focus on building and improving the user interface.
  - Add new pages, components, and features in the `frontend/src/` directory.
  - Follow React best practices.
- **Backend:**
  - The backend is mostly complete. If you find bugs or want to suggest improvements, feel free to open an issue or pull request.

---

## License
This project is for educational purposes. Please check with the repository owner for licensing details if you plan to use it beyond learning or internal demos.

---

## Contact
For questions or suggestions, please open an issue or contact the repository maintainer.