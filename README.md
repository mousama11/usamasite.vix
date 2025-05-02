
# Usama's 3D Interactive Portfolio


A cutting-edge developer portfolio featuring immersive 3D effects, smooth animations, and direct-to-Gmail form submissions.

## 🌟 Key Features

### 🖥️ Core Experience
- **3D Animated Background** (Vanta.js waves)
- **Parallax Floating Elements** (GSAP + Three.js)
- **Depth-Text Headings** (CSS 3D transforms)
- **Responsive Design** (Mobile-optimized 3D effects)

### ✉️ Contact System
```javascript
// EmailJS Implementation
emailjs.sendForm('service_id', 'template_id', form, 'public_key')
  .then(() => showSuccess()) // Custom animations
```
- Client-side validation
- Custom HTML email templates
- Loading states with SVG spinners

## 🛠️ Tech Stack

| Category        | Technologies Used                         |
|-----------------|-------------------------------------------|
| Core            | HTML5, CSS3, JavaScript ES6+             |
| 3D Effects      | Three.js, Vanta.js                        |
| Animations      | GSAP + ScrollTrigger                      |
| Styling         | Tailwind CSS + Custom CSS                 |
| Form Handling   | EmailJS (200 free emails/month)           |

## 🚀 Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-3d.git
   cd portfolio-3d
   ```

2. **Set Up EmailJS**
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Add Gmail service (Dashboard → Email Services)
   - Create template with variables:
     ```plaintext
     {{name}}, {{email}}, {{message}}, {{time}}
     ```

3. **Configure Environment**
   ```bash
   # Install live server (optional)
   npm install -g live-server
   ```

## 🔧 Configuration

### script.js
```javascript
// Initialize with your keys
emailjs.init('user_YourPublicKeyHere'); 

// Update these with your IDs
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
```

### Customizing Styles
Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Dark blue
        accent: '#3b82f6'   // Bright blue
      }
    }
  }
}
```

## 📂 Project Structure
```
portfolio/
├── index.html          # Main page
├── script.js           # All interactivity
├── style.css           # Custom styles
└── assets/
    ├── fonts/          # Custom typography
    ├── images/         # Project thumbnails
    └── logo.svg        # Vector logo
```

## 🌐 Deployment

### Netlify (Recommended)
1. Drag-and-drop your folder to Netlify
2. Enable form handling in Settings
3. Add environment variables:
   ```
   EMAILJS_PUBLIC_KEY=your_public_key
   EMAILJS_SERVICE_ID=your_service_id
   ```

## 📜 License
MIT License - See [LICENSE.md](LICENSE.md) for details.

---

💡 **Pro Tip:** Add a projects.json file to dynamically load your work samples!

✉️ **Contact:** [your.email@example.com](mailto:your.email@example.com)
```

### Key Features:
1. **Visual Demo** - Top GIF shows your portfolio in action
2. **Code Snippets** - Ready-to-copy configuration examples
3. **Tech Stack Table** - Clear technology breakdown
4. **Step-by-Step Setup** - From clone to deployment
5. **Customization Guide** - Easy theming instructions

### Recommended Additions:
1. Add actual:
   - GitHub repo URL
   - Live demo link
   - Contact email
2. Include:
   - Screenshots of different sections
   - Video demo link (optional)
   - Contributor guidelines (if open-source)

Would you like me to add any specific:
- Performance benchmarks?
- Browser compatibility notes?
- Mobile development tips?