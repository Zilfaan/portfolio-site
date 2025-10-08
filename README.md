# Personal Portfolio Site

Modern portfolio website showcasing my work and experience. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## Features

- Single-page layout with smooth section navigation
- Responsive design that works on all devices
- Dark/light theme toggle
- Working contact form with email notifications
- Dynamic project and education pages

## Tech Stack

<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>
      <img src="https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js" />
      <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" />
      <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>
      <img src="https://img.shields.io/badge/-Tailwind-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><strong>Backend</strong></td>
    <td>
      <img src="https://img.shields.io/badge/-Nodemailer-0F9DCE?style=flat-square" />
    </td>
  </tr>
  <tr>
    <td><strong>Analytics</strong></td>
    <td>
      <img src="https://img.shields.io/badge/-Vercel%20Analytics-black?style=flat-square&logo=vercel" />
    </td>
  </tr>
</table>

## Setup

Clone and install dependencies:

```bash
git clone https://github.com/Zilfaan/portfolio-site.git
npm install
```

Create `.env.local` in the root directory:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
END_EMAIL=where_to_receive@email.com
```

Start the dev server:

```bash
npm run dev
```

Visit `http://localhost:3000`

## Build & Deploy

### Local Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push to GitHub
2. Import repo on [Vercel](https://vercel.com)
3. Add environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `END_EMAIL`
4. Deploy

Works on other platforms too: Netlify, Railway, DigitalOcean, etc.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Lint code
```

## Contact Form

The contact form uses Nodemailer to send emails through the Gmail's SMTP server.

1. Enable 2FA on your Google account
2. Generate an App Password
3. Use the app password in `EMAIL_PASS`

Test the form locally before deploying to catch any configuration issues.

## License

[MIT](./LICENSE)
