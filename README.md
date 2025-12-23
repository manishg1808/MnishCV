# Manish Kumar - Online Resume/CV

A professional, responsive online resume built with React and Vite, featuring a modern design with smooth animations and complete mobile responsiveness.

## 🎯 Features

### Core Features
- **Fully Responsive Design** - Optimized for all devices (Desktop, Tablet, Mobile)
- **Dark Mode Toggle** - Switch between light and dark themes with smooth transitions
- **Animated Loader** - Custom styled loader with gradient animations on page load
- **Clean & Modern UI** - Professional layout with smooth transitions and hover effects
- **Mobile Contact Toggle** - Hamburger menu for easy access to contact information on mobile devices

### Interactive Modals
- **About Me Modal** - Personal introduction and background information
- **Contact Modal** - Contact form with WhatsApp integration for direct messaging
- **Service Modal** - Complete list of web development services offered
- **Projects Modal** - Categorized showcase of personal and client projects (10+ projects)
- **Portfolio Modal** - Information about ongoing portfolio development

### Integration Features
- **WhatsApp Integration** - Contact form submissions directly open WhatsApp with formatted message
- **Social Media Links** - Direct links to LinkedIn, GitHub, WhatsApp, Email, Instagram, and Facebook
- **Portfolio Section** - Clickable portfolio item in contact information
- **Projects Showcase** - "View" button to explore all completed projects in organized categories

### Responsive Breakpoints
- Large Desktop (>1200px)
- Desktop (1025-1200px)
- Tablet Large (969-1024px)
- Tablet (769-968px)
- Tablet Small (601-768px)
- Mobile Large (481-600px)
- Mobile (321-480px)
- Mobile Small (<320px)

## 🚀 Technologies Used

- **React 19.1.1** - Modern UI library with hooks (useState, useEffect)
- **Vite 7.1.2** - Fast build tool and dev server
- **Styled Components 6.1.19** - CSS-in-JS for component styling (Loader component)
- **CSS3** - Advanced styling with flexbox, grid, and media queries
- **React Icons (RemixIcon)** - Icon library for UI elements
- **Responsive Design** - Mobile-first approach with comprehensive breakpoints

## 📋 Resume Sections

- **Header** - Name, title, and contact information with mobile toggle
- **Personal Information & Contact Details** - Phone, WhatsApp, Email, Location, Social Links
- **Career Objective** - Professional goals and aspirations
- **Academic Qualifications** - Graduation, Intermediate, and Matriculation details
- **Work Experience** - Multiple internships (Mindware Technology, Unified Mentor, EduNet Foundation, QSpider)
- **Technical Skills** - Programming languages, frameworks, databases, and tools
- **Certifications** - All professional certifications with verification links
- **Academic Projects** - Detailed project descriptions with live links
- **Personal Strengths** - Key personality traits
- **Hobby** - Personal interests
- **Self-Assessment** - Professional declaration
- **Footer** - About, Service, Contact buttons with social media links

## 🛠️ Installation & Usage

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/manishg1808/MnishCV
cd ManishCV
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📱 Responsive Features

### Mobile Optimization
- Touch-friendly interactive elements
- Proper text wrapping for long links
- Optimized font sizes for readability
- Vertical stacking of contact information
- No horizontal scrolling on any device

### Desktop Experience
- Centered content layout with max-width
- Optimal typography and spacing
- Hover effects on links
- Professional presentation

### Tablet Support
- Adaptive layout adjustments
- Flexible contact information display
- Optimized spacing and margins

## 📝 Recent Updates & Implemented Features

### Latest Improvements (2024-2025)
- **Dark Mode Feature**: Complete dark/light theme toggle with smooth transitions
- **Animated Loader**: Custom gradient loader with jumping circle animations
- **Modal System**: Implemented 5 interactive modals (About, Contact, Service, Projects, Portfolio)
- **WhatsApp Integration**: Contact form directly opens WhatsApp with formatted message
- **Mobile Navigation**: Hamburger menu for mobile contact information toggle
- **Projects Showcase**: Categorized project display (Personal & Client projects) in modal
- **Service Listing**: Complete service offerings displayed in organized modal
- **Social Media Integration**: Direct links to all social profiles (LinkedIn, GitHub, WhatsApp, Email, Instagram, Facebook)
- **Portfolio Section**: Clickable portfolio item with modal information
- **Enhanced Responsive Design**: Added comprehensive breakpoints for all screen sizes
- **Mobile-First Approach**: Optimized layout for mobile devices
- **Improved Typography**: Better font sizing across all devices
- **Contact Section**: Responsive contact information layout with grid system
- **Link Handling**: Smart word-break for long URLs
- **Touch Optimization**: Enhanced touch targets for mobile devices
- **Overflow Prevention**: Fixed horizontal scrolling issues
- **Print Styles**: Added print media queries for document printing
- **State Management**: React hooks for managing modal states and form data
- **Form Validation**: Contact form with required field validation

## 🎨 Design Principles

- **User Experience**: Intuitive navigation with modals and interactive elements
- **Accessibility**: Proper semantic HTML, ARIA labels, and readable typography
- **Performance**: Lightweight and fast loading with optimized animations
- **Modern UI/UX**: Smooth transitions, hover effects, and professional presentation
- **Mobile-First**: Designed with mobile users as priority
- **Dark Mode Support**: Complete theme switching capability

## 🔧 Technical Implementation

### Project Structure
```
ManishCV/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Main stylesheet
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   ├── components/
│   │   ├── Loader.jsx       # Animated loader component
│   │   └── CV/
│   │       ├── Header.jsx   # Header component (available)
│   │       ├── Education.jsx # Education component (available)
│   │       └── Contact.jsx  # Contact component (available)
│   └── assets/
│       └── favicon.png      # Site favicon
├── package.json             # Dependencies and scripts
├── README.md               # Project documentation
└── index.html              # HTML entry point
```

### Components Structure
- **App.jsx** - Main application component with all sections and modals (1230 lines)
- **Loader.jsx** - Custom animated loader using styled-components with gradient animations
- **CV Components** - Modular components for Header, Education, Contact (available but integrated in App.jsx)

### State Management
- React Hooks (useState) for modal visibility states (5 modals)
- Form state management for contact form (name, email, phone, message)
- Dark mode state with body class toggling
- Contact toggle state for mobile menu
- Loading state for initial page load

### Key Functionalities
- **Contact Form**: Validates required fields and submits to WhatsApp with formatted message
- **Modal System**: Click outside overlay to close, close button support
- **Theme Switching**: Dark mode toggle with body class management and smooth transitions
- **Responsive Navigation**: Mobile hamburger menu for contact information toggle
- **Project Categorization**: Personal and Client projects displayed in separate sections
- **Social Media Integration**: Footer with 6 social media platform links
- **WhatsApp Direct**: Contact form opens WhatsApp Web/App with pre-filled message
- **Animated Loader**: 2-second animated loader on page initialization

## 📄 License

This project is for personal/portfolio use.

---

**Developed by**: Manish Kumar  
**Contact**: mnishg49@gmail.com  
**LinkedIn**: [Profile](https://www.linkedin.com/in/er-mnish-kumar-8227572b8/)  
**GitHub**: [Profile](https://github.com/manishg1808/MnishCV)

