<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=250&section=header&text=Nikhil%20Dasar%20%7C%20Portfolio&fontSize=50&animation=fadeIn" alt="Header Image">

  <h3 align="center">A Next.js 14 Developer Portfolio</h3>

  <p align="center">
    Interactive, real-time, and beautifully animated personal portfolio built with Next.js, Framer Motion, and Tailwind CSS.
    <br />
    <a href="https://github.com/kakashihatakesh6/nikhildasar"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kakashihatakesh6/nikhildasar/issues">Report Bug</a>
    ·
    <a href="https://github.com/kakashihatakesh6/nikhildasar/issues">Request Feature</a>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-14.1.0-111111?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-18.0-20232a?style=for-the-badge&logo=react&logoColor=61dafb" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.0-0f172a?style=for-the-badge&logo=tailwind-css&logoColor=38b2ac" alt="Tailwind" />
    <img src="https://img.shields.io/badge/MongoDB-6.15.0-0f172a?style=for-the-badge&logo=mongodb&logoColor=47a248" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Framer_Motion-11.x-0f172a?style=for-the-badge&logo=framer" alt="Framer Motion" />
  </p>
</div>

---

## 🚀 About The Project

This project is a modern, responsive, and highly interactive software developer portfolio designed to showcase projects, skills, and professional experience. It features real-time visitor tracking with geolocation, dynamic GitHub contribution calendars, and smooth transitions powered by Framer Motion and GSAP. 

What sets this portfolio apart is the deep attention to detail:
- **Immersive Background**: High-quality video background integration for an engaging thematic feel.
- **Custom Analytics Engine**: A lightweight tracking system safely logging user locations and counts directly to MongoDB via Next.js API routes.
- **Comprehensive Logging**: Advanced error tracking using `Winston` (`winston-daily-rotate-file`) with dedicated endpoints to log `404 Not Found` incidents.
- **Scalable Component Architecture**: Leveraging Radix UI primitives and custom standard Tailwind classes for a highly accessible and modular design.

---

## ✨ Key Features

- **Interactive UI/UX**: Overlaid glassmorphic cards, responsive sidebars, and fluid animations driving a premium feel.
- **Live Visitor Metrics**: Custom `VisitorCounter` and `VisitorStats` components visualizing site traffic.
- **GitHub Integration**: dynamically pulls and displays the activity calendar using `react-github-calendar`.
- **Dynamic Typing**: Catchy hero text powered by `react-simple-typewriter`.
- **Mobile First**: Built tightly via Tailwind CSS to ensure flawless display on desktops, tablets, and phones.

---

## 🛠️ Built With

### Frontend
- [Next.js (App Router)](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- [Radix UI](https://www.radix-ui.com/) / `shadcn/ui` components

### Backend & Database
- Next.js Edge / Serverless API Functions
- [MongoDB](https://www.mongodb.com/) via `mongodb` NPM driver and [Prisma](https://www.prisma.io/)
- [geoip-lite](https://github.com/bluesmoon/node-geoip)
- [Winston](https://github.com/winstonjs/winston)

---

## 🚦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

You need **Node.js** (v24.x recommended) and **npm** installed.
```sh
npm install npm@latest -g
```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/kakashihatakesh6/nikhildasar.git
   ```
2. **Navigate & Install dependencies**
   ```sh
   cd nikhildasar
   npm install
   ```
3. **Environment Setup**  
   Create a `.env` file in the root directory and add the essential variables for MongoDB:
   ```env
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio"
   ```
4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   *The local server will start on [http://localhost:3001](http://localhost:3001).*

---

## 📂 Project Structure

```text
nikhildasar/
├── app/
│   ├── api/                 # Next.js API backend (analytics, logging, stats)
│   ├── globals.css          # Global Tailwind and base setups
│   ├── layout.tsx           # Global Root Layout
│   ├── page.tsx             # Main Portfolio Landing Route
│   └── not-found.tsx        # Custom 404 Interceptor (Logs directly to DB)
├── components/
│   ├── ui/                  # Accessible baseline UI components (Radix)
│   ├── AboutMe.tsx          # About Me Section
│   ├── GitHubCalendar.tsx   # GitHub activity visualization
│   ├── Skills.tsx           # Visualizing dev skills
│   ├── VisitorCounter.tsx   # Frontend live count badge
│   └── Work.tsx             # Portfolio showcased projects
├── public/                  # Static assets (fonts, video bg, images)
├── tailwind.config.ts       # Utility configurations
└── package.json             # App dependencies & configurations
```

---

## 📞 Connect with Me

**Nikhil Dasar**  
- 𝕏 [Twitter / X](https://twitter.com/Kakashish6)
- 💼 [LinkedIn](https://www.linkedin.com/in/nikhil-dasar-baa2a5217/)
- 👨‍💻 [GitHub](https://github.com/kakashihatakesh6)

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=100&section=footer" alt="Footer Image">
</p>
