# GDGoC UNSRI – Frontend Development Division Learning

Welcome to the official repository of the **Frontend Development Division Learning** at **Google Developer Group on Campus (GDGoC) Universitas Sriwijaya (UNSRI)**.

This repository is used as a central place to store **live coding materials**, **code examples**, **learning references**, **division showcase website**, and **final project guidelines** from our internal frontend learning sessions.

---

## About Us

The Frontend Development Division focuses on building user interfaces and user experiences for web applications developed within GDGoC UNSRI.  
We emphasize **clean UI**, **maintainable code**, and **modern frontend technologies**.

> "Backend builds the logic, Frontend delivers the experience."

---

## Core Team

- **M. Rabyndra Janitra Binello** — Frontend Development Core Team

---

## Frontend Division Members

- Ahmad Kurnia Prisma
- Nuredy Rahma Gunawan
- Achmad Faiz Yudha Ramadhan
- Akbar Kurniawan
- Duhairillah
- Aulia Mutiara Sari
- Anjelia Hidayat
- Farrel Athaillah Wijaya
- M. Atala Daffa Alfaris

---

## Repository Structure

```
Frontend-Development-GDGoC-Division-Learning/
│
├── 0 - Prologue/                         # Introduction & onboarding materials
├── 1-version-control-system/             # Git & GitHub fundamentals
├── 2-fundamentals/                       # Tailwind CSS & JavaScript ES6
├── 3-react-intro/                        # Introduction to React & JSX
├── 4-components-props/                   # React Components & Props
├── 5-basic-state-management/             # State Management (useState)
├── 6-controlled-form/                    # Advanced State Patterns & Controlled Forms
├── 7-react-router/                       # Dynamic Routing & Single Page Navigation
├── 8-side-effect-fetch-api/              # Side Effects & Data Fetching (useEffect)
├── 9-evaluation-review/                  # Evaluation, Review & Mentoring Session
├── 10-custom-hooks/                      # Custom Hooks & Reusable Logic
├── 11-global-state/                      # Global State Management (Context API)
├── 12-supabase-intro/                    # Introduction to Supabase & Auth
├── 13-supabase-fetching/                 # Data Fetching with TanStack Query
├── 14-supabase-crud/                     # CRUD Operations & Mutations
├── 15-zustand-state-management/          # Complex State with Zustand
│
├── frontend-web/                         # Division showcase website (React + Vite + Tailwind)
├── frontend-final-project/               # Final project guidelines & context
│
└── README.md                             # Repository overview and information
```

---

## Learning Modules (Sessions 1-15)

Our curriculum covers comprehensive frontend development from version control basics to advanced state management and backend integration. Each session includes:

- **Slide presentations (PDF)** explaining core concepts
- **Live coding examples** and starter code
- **Hands-on tasks** for practice
- **References and resources** for further learning

### Curriculum Overview

> **Beginner-Friendly Roadmap:** This curriculum is intentionally structured to be accessible for complete beginners. Each session builds step-by-step from foundational web concepts to advanced full-stack frontend integration, ensuring members with no prior experience can follow along, practice effectively, and build confidence.

| Session | Topic | Description | Key Learning Objectives |
|---------|-------|-------------|------------------------|
| **L1** | Git & GitHub Fundamentals | Version control using Git and collaborative workflows with GitHub | Master Git basics (init, commit, branch) and GitHub collaboration workflows |
| **L2** | Tailwind CSS & JavaScript ES6 | Utility-first CSS framework and modern JavaScript features | Build responsive UIs with Tailwind CSS and apply ES6 features (arrow functions, destructuring, spread, map/filter) |
| **L3** | Introduction to React | React library fundamentals, SPA concept, and JSX syntax | Create basic React projects and understand React's core workflow |
| **L4** | React Components & Props | Component architecture, props, and building reusable components | Build reusable components and pass data between components using props |
| **L5** | State Management (Basic) | Local state management using `useState` hook | Manage simple state and build reactive UIs based on data changes |
| **L6** | Advanced State Patterns & Controlled Forms | Lifting State Up pattern and Controlled Components for form handling | Manage data flow between components and build forms using Controlled Components |
| **L7** | Dynamic Routing & Single Page Navigation | Client-side routing implementation with React Router | Build multi-page applications using React Router |
| **L8** | Side Effects & Data Fetching | Using `useEffect` for side effects and API integration | Fetch data from external APIs and display results in components |
| **L9** | Evaluation, Review & Mentoring | Code review, reflection session, and personalized guidance | Reflect on React understanding, fix common mistakes, and receive personal development guidance |
| **L10** | Custom Hooks & Reusable Logic | Abstracting logic into custom hooks for reusability | Separate business logic from UI and build reusable custom functions |
| **L11** | Global State Management | Context API as solution for Props Drilling | Implement Context API to share data across components without manual prop passing |
| **L12** | Introduction to Supabase & Auth | Supabase project configuration and authentication system (Login/Register) | Connect applications and manage user authentication with Supabase |
| **L13** | Data Fetching with TanStack Query | Implementing TanStack Query for efficient data fetching (Read) from Supabase | Display data from Supabase database using TanStack Query caching features |
| **L14** | CRUD Operations & Mutations | Create, Update, Delete operations using TanStack Mutations | Implement complete CRUD functionality synchronized between UI and Database |
| **L15** | Complex State with Zustand | Using Zustand for complex global state management integrated with Supabase | Use Zustand as lightweight and fast state management alternative |

Each session folder contains:
- **`docs/`** - Presentation slides (PDF format)
- **Source code** - Live coding examples and starter templates
- **`task.txt`** - Practice assignments and challenges

---

## Division Showcase Website (`frontend-web/`)

A modern, responsive showcase website built to display our learning materials, session topics, and division member profiles.

### Tech Stack

- **React** with **Vite** (Fast build tool)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn UI** for pre-built, accessible components
- **React Router DOM** for navigation
- **TanStack Query** for data fetching
- **Framer Motion** for animations

### Features

- **Hero Section**: Division introduction and mission statement
- **Learning Modules Display**: Interactive cards showcasing all 15 learning sessions with descriptions
- **Team Showcase**: Member profiles and core team spotlight
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Running the Website Locally

```bash
# Navigate to frontend-web directory
cd frontend-web

# Install dependencies (using bun, npm, or yarn)
bun install
# or
npm install

# Run development server
bun run dev
# or
npm run dev

# Build for production
bun run build
# or
npm run build
```

The website will be available at `http://localhost:8080`

---

## Final Project (`frontend-final-project/`)

The culmination of our learning journey: a comprehensive full-stack web application project where each member builds a solution to a real-world problem.

### Project Overview

Members are required to develop a full-stack web application using **React**, **Tailwind CSS**, and **Supabase** that addresses authentic problems in one of three categories:

1. **Personal Problem** - Solve a problem you personally experience that lacks a digital solution
2. **General Problem** - Address a common problem with an improved digital solution
3. **Real Case Study** (Bonus Points) - Build solutions for actual, observable problems with specific stakeholders

### Timeline

| Milestone | Date |
|-----------|------|
| Briefing & Project Start | August 7, 2026 |
| Theme Submission | August 14-16, 2026 |
| Final Submission | September 25, 2026 |
| Final Presentation (Offline) | September 27, 2026 |

Each member must build a complete application with authentication, CRUD operations, role-based authorization, and deploy it to production. The project emphasizes applying all concepts learned from sessions 1-15 in a real-world context.

For complete guidelines and technical requirements, see [`frontend-final-project/Final-Project.md`](./frontend-final-project/Final-Project.md)

---

## Tech Stack & Tools

### Core Technologies
- **HTML5, CSS3, JavaScript (ES6+)**
- **React 19**
- **Tailwind CSS**
- **TypeScript**

### State Management
- **React Hooks** (useState, useEffect, useContext, custom hooks)
- **Context API**
- **Zustand**
- **TanStack Query** (React Query)

### Backend & Database
- **Supabase** (Authentication, Database, Storage, API)

### Development Tools
- **Vite** (Build tool)
- **Git & GitHub** (Version control)
- **React Router DOM** (Client-side routing)
---

## Contact & Resources

- **Core Team Lead**: M. Rabyndra Janitra Binello
- **GitHub**: [ElloRabyndra](https://github.com/ElloRabyndra)
- **GDGoC UNSRI**: [Google Developer Groups on Campus UNSRI](https://gdg.community.dev/gdg-on-campus-universitas-sriwijaya-palembang-indonesia/)

---

> Made with care by Frontend Development Division @ GDGoC UNSRI Batch 2025/2026
