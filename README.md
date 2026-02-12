# KD College Website

A modern, responsive website for KD College, built with React and Vite. This application provides information about the college, its courses, events, and facilitates student and delegate registrations.

## 🚀 Features

- **Modern UI/UX:** Designed with a premium aesthetic using Tailwind CSS and Material Tailwind.
- **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop devices.
- **Dynamic Content:**
  - **Carousel & Video Integration:** Engaging visual content on the home page.
  - **Animate on Scroll (AOS):** Smooth animations for a better user experience.
- **Key Sections:**
  - **Home:** Overview of the college and highlights.
  - **About:** Information about the institution, history, and mission.
  - **Courses:** Detailed list of academic programs offered.
  - **Contact:** Interactive contact form and location map.
  - **Speakers:** Details about event speakers.
- **Functionality:**
  - **Registration Forms:** Dedicated forms for Student and Delegate registration with validation.
  - **User Profile:** Profile management with editing capabilities.
  - **Admin Dashboard:** Tools for administrators to manage registrations.
  - **Navigation:** Smooth scrolling and easy navigation with React Router.

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/) (v19)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Material Tailwind](https://www.material-tailwind.com/)
  - [Bootstrap](https://getbootstrap.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Heroicons](https://heroicons.com/)
- **Animations:** [AOS](https://michalsnik.github.io/aos/) & [React Fast Marquee](https://www.react-fast-marquee.com/)

## 📂 Project Structure

```
.
├── public/                 # Static assets like favicon
├── src/
│   ├── assets/             # Images, videos, and icons
│   │   └── ...
│   ├── components/         # Reusable UI components
│   │   ├── AboutSection.jsx
│   │   ├── Crousel.jsx
│   │   ├── Footer.jsx
│   │   ├── MessageCards.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── Profile.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/              # Main application pages
│   │   ├── About.jsx
│   │   ├── AdmissionApply.jsx
│   │   ├── Contact.jsx
│   │   ├── Course.jsx
│   │   ├── Highlights.jsx
│   │   ├── Home.jsx
│   │   ├── Information.jsx
│   │   ├── Infrastructure.jsx
│   │   └── View.jsx
│   ├── style/             # Component-specific CSS
│   │   ├── about.css
│   │   └── navbar.css
│   ├── App.css            # Global app styles
│   ├── App.jsx            # Main app component
│   ├── index.css          # Tailwind and global styles
│   └── main.jsx           # Application entry point
├── .gitignore             # Git ignore file
├── eslint.config.js       # Linting configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and details
├── vercel.json            # Vercel deployment config
└── vite.config.js         # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
