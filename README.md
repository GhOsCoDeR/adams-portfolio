# Adams Portfolio

A modern, responsive portfolio website built with React, Vite, and TailwindCSS to showcase my projects and skills.

## Features

- Modern UI design with smooth animations using Framer Motion
- Responsive layout that works on all devices
- Project showcase with GitHub and demo links
- Contact form with EmailJS integration
- Animated skill cards and project displays
- Dynamic content rendering

## Live Demo

[View Live Demo on Netlify](https://adams-portfolio.netlify.app)

## Technology Stack

- React
- Vite
- TailwindCSS
- Framer Motion
- React Router
- EmailJS for contact form
- React Icons

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/GhOsCoDeR/adams-portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd adams-portfolio
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Build for production:
   ```
   npm run build
   ```

## Deployment to Netlify

### Option 1: Deploy with Git

1. Push your repository to GitHub.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click "New site from Git".
4. Choose GitHub and select your repository.
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site".

### Option 2: Deploy manually

1. Build your project:
   ```
   npm run build
   ```

2. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

3. Login to Netlify:
   ```
   netlify login
   ```

4. Deploy the site:
   ```
   netlify deploy --prod
   ```
   
   When prompted, specify `dist` as your publish directory.

## Features

- Home page with animated hero section
- Projects page with filtering by category
- About page with personal information
- Resume page with downloadable PDF
- Contact page with functioning contact form

## Customization

- Update project information in `src/pages/Projects.jsx`
- Modify personal information in `src/pages/About.jsx`
- Change contact form settings in `src/pages/Contact.jsx`

## License

MIT License

## Contact

Adams Mahama - adams24mahama@gmail.com

Project Link: [https://github.com/GhOsCoDeR/portfolio](https://github.com/GhOsCoDeR/portfolio) 