# Maro's Luxury Laundry & Dry Cleaning Website

A modern, responsive landing page for a luxury laundry and dry cleaning service built with React, Vite, Tailwind CSS, and EmailJS.

## Overview

This project is a single-page service website that showcases:

- Hero section with high-end brand messaging
- Service cards for laundry, dry cleaning, pickup/delivery, and stain treatment
- About section with trust and reputation metrics
- Customer review cards
- Contact form powered by EmailJS
- WhatsApp chat CTA and contact details
- Responsive layout and polished UI styling

## Built With

- React 19
- Vite 4
- Tailwind CSS 4
- React Icons
- EmailJS Browser SDK
- React Toastify

## Key Features

- Fully responsive landing page layout
- Smooth section navigation with anchor links
- Contact form submission through EmailJS
- Toast notifications for contact form success/failure
- WhatsApp chat button for direct customer booking
- Modern service and review components

## Installation

1. Clone the repository

```bash
git clone https://github.com/pinkberry527-sketch/laundry-website.git
cd laundry_website--
```

2. Install dependencies

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the site.

## Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/`
  - `App.jsx` - application root
  - `main.jsx` - Vite entry file
  - `Component/` - page sections and UI components
    - `Home.jsx` - main page wrapper
    - `Navbar.jsx` - top navigation bar with WhatsApp CTA
    - `Hero.jsx` - landing hero section
    - `Services.jsx` - service offerings
    - `About.jsx` - about/brand section
    - `Review.jsx` - customer testimonials
    - `Contact.jsx` - contact form and contact info
    - `Footer.jsx` - site footer
- `public/` - static assets
- `package.json` - project dependencies and scripts
- `vite.config.js` - Vite configuration with Tailwind plugin

## Contact Form Configuration

The contact form in `src/Component/Contact.jsx` uses EmailJS.

To make it work with your own EmailJS account:

1. Create an EmailJS service and template
2. Replace the `service_icpkk47`, `template_97t7udu`, and user key `2169565a5eczIgA8s`
   with your own service ID, template ID, and public key
3. Update any field names in the form if your template fields differ

## Notes

- `react-toastify` is used for toast notifications
- `react-icons` provides the icon set used across the page
- The current project is configured for Vite and assumes Node.js installed

## License

This project is provided as-is for demo and development purposes.
