# Appliuni Frontend

Appliuni Frontend is a modern web application built using React, Vite, and Tailwind CSS. It provides a user-friendly interface for interacting with users and includes features such as authentication, application management, and university browsing.

## 🚀 Technologies

- **React**: A library for building user interfaces.
- **Vite**: A fast build and development tool.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **i18n**: Localization with support for multiple languages (az, en, ru).

## 📂 Project Structure

- `src/components`: UI components such as Navbar, Footer, Modal, and more.
- `src/components/pages`: Application pages, including Home, AdminPanel, Universities, and others.
- `src/context`: Context for state management, such as AuthContext.
- `src/utils`: Utilities like jwtUtils for token handling.
- `src/locales`: Localization files for multi-language support.

## 🛠 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Appliuni-Front
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:3000) in your browser.

## 📦 Production Build

To build the application for production, run:
```bash
npm run build
```
The built files will be located in the `dist` folder.

## 🌐 Localization

The application supports multiple languages. Localization files are located in the `src/locales` folder.

## 🐳 Docker

To run the application using Docker:
1. Build the image:
   ```bash
   docker build -t appliuni-frontend .
   ```
2. Run the container:
   ```bash
   docker run -p 80:80 appliuni-frontend
   ```

<!-- ## 📄 License

This project is licensed under the [MIT License](LICENSE). -->