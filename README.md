# 🚀 Appverse

**Appverse** is a modern web application where users can explore, view details, and install various apps. The project focuses on clean UI, dynamic data rendering, and local storage–based app management.

---

## 📖 Description

Appverse is a single-page React application that lets users:
- Browse a list of apps.
- View detailed information about each app (ratings, downloads, company name, etc.).
- Install or uninstall apps using **LocalStorage** (persistent across page reloads).
- Visualize rating data using interactive charts.
- Experience smooth navigation powered by **React Router**.

---

## 🧰 Technologies Used

| Category | Technologies |
|-----------|---------------|
| **Frontend Framework** | React.js (Vite) |
| **Routing** | React Router DOM |
| **Charts & Visualization** | Recharts |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Styling** | Tailwind CSS |
| **Icons & Assets** | Custom image assets |
| **Local Storage** | Browser LocalStorage for saving installed apps |

---

## ⚙️ Features

- 🔍 Search and filter apps easily  
- 📱 Install/uninstall apps (data saved in LocalStorage)  
- 📊 View visual analytics using Recharts  
- ⚡ Fast rendering using Vite bundler  
- 🎨 Fully responsive design  

---

## 🏗️ Project Structure

Appverse/
┣ src/
┃ ┣ Components/
┃ ┣ Hook/
┃ ┣ Utilities/
┃ ┣ assets/
┃ ┗ App.jsx
┣ public/
┃ ┗ _redirects
┗ package.json

yaml
Copy code

---

## 🧑‍💻 Installation & Run Locally


# Clone the repository
git clone https://github.com/obaidullah-miazi-dev/Appverse.git

# Navigate to project directory
cd Appverse

# Install dependencies
npm install

# Run locally
npm run dev
Then open your browser and go to:
👉 http://localhost:5173/

🌐 Deployment
To deploy on Netlify, include a _redirects file inside public/ folder with this line:
/* /index.html 200  


📸 Preview
([App Screenshot](/appverse-full-web-view.png))

🧑‍🏫 Author
👤 Obaidullah Miazi

# Contact 
Email: (obaidullahmiazi.dev@gmail.com)  

LinkedIn: (http://www.linkedin.com/in/obaidullah-miazi)


🪪 License
This project is open-source and available under the MIT License.

💬 Feedback
If you have any suggestions or improvements, feel free to create an issue or pull request.
Let’s make Appverse even better together! 🌟