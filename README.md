# 🚀 Sir Yenoz - Developer Portfolio

A modern, responsive portfolio website showcasing projects and skills. Built with React.js and deployed on GitHub Pages.

## ✨ Features

- **Dark Mode Theme** - Easy on the eyes with a sleek dark interface
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Featured Projects** - Display your best work with descriptions and tech stack
- **Contact Form** - Easy way for potential clients/employers to reach you
- **Social Links** - Connect your GitHub, LinkedIn, and other profiles
- **Smooth Scrolling** - Seamless navigation between sections
- **Modern UI** - Clean and professional design

## 📋 Sections

1. **Hero Section** - Welcome message and call-to-action buttons
2. **Projects Section** - Grid layout showcasing featured projects
3. **Contact Section** - Contact information and message form
4. **Footer** - Social media links and copyright

## 🛠️ Tech Stack

- React.js 18
- CSS3 (with CSS Grid & Flexbox)
- React Icons
- GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SirYenoz/YenozPortofolio.git
cd YenozPortofolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📝 Customization

### Update Personal Information

Edit the following files with your information:

- **Hero Section**: `src/components/Hero.jsx` - Update name, headline, bio
- **Contact Email**: `src/components/Contact.jsx` - Update email address
- **Footer**: `src/components/Footer.jsx` - Update social media links
- **Social Links**: Update GitHub, LinkedIn, Twitter URLs throughout

### Add/Edit Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
  id: 1,
  title: "Project Title",
  description: "Project description here",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourname/project",
  live: "https://project-demo.com",
  image: "🎯" // emoji
}
```

### Customize Colors

Edit `src/index.css` and replace the color values:
- Primary Color: `#60a5fa` (light blue)
- Background: `#0f172a` (dark navy)
- Cards: `#1e293b` (dark slate)
- Text: `#e2e8f0` (light gray)

## 🚀 Deployment

### Deploy to GitHub Pages

1. Make sure the `homepage` field in `package.json` is set correctly:
```json
"homepage": "https://siryenoz.github.io/YenozPortofolio"
```

2. Deploy:
```bash
npm run deploy
```

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select `gh-pages` as the deployment branch

4. Your portfolio will be live at: `https://siryenoz.github.io/YenozPortofolio`

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet**: Adjusted grid and font sizes
- **Mobile**: Single column layout, optimized touch targets

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sir Yenoz**
- Email: nightyenoz@gmail.com
- GitHub: [@SirYenoz](https://github.com/SirYenoz)

---

**Be careful** 😉
