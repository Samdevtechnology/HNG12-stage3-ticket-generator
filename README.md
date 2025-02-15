# Ticket Booking System 🎟️ ~ HNG Frontend Stage 3 Task

This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon.

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Application Flow](#application-flow)
- [Usage](#usage)
- [Key Functionality](#key-functionality)
- [Contributing](#contributing)
- [Author](#author)
- [Acknowledgment](#acknowledgment)

A modern web application built with Next.js for booking event tickets. The system provides a seamless booking experience with a multi-step form process and ticket management capabilities.

## <span id="features"> ✨ Features </span>

- **3-Step Booking Process**
  - Step 1: Event & Ticket Type Selection
  - Step 2: Personal Details with Image Upload
  - Step 3: Ticket Summary & Download
- **Form Persistence** - Continue where you left off after page refresh
- **Real-time Inventory Tracking** - Quantity updates instantly after bookings
- **Ticket Management** - View/Delete booked tickets
- **User Bookings:** View all booked tickets and delete them if needed.
- **Modern UI:** Styled using TailwindCSS, with responsive and accessible design.
- **Responsive UI** - Mobile-friendly design
- **Validation** - Robust form validation with Zod
- **State Management** - Zustand with localStorage persistence
- **Sample Data** - Pre-configured events in JSON format

## <span id="tech-stack">🛠️ Tech Stack</span>

- **Framework**: Next.js 14 with App Router
- **UI Library**: Shadcn UI
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **JSON Data:** Hardcoded sample data for events and ticket details.

## <span id="project-structure">📂 Project Structure</span>

```plaintext
ticket-booking-app/
├── public/
│   ├── font/                # Custom Font Assets
│   └── favicon.ico          # Favicon
|
├── src/
|   └── app/                 # Next.js app router
│        ├── page.tsx        # Homepage
│        ├── favicon.ico     # Favicon
│        ├── (home)/         # Homepage Logic with available tickets
│        │   └── page.tsx
│        ├── about/          # About project page
│        │   └── page.tsx
│        ├── booking/        # Booking ticket page with form
│        │   └── page.tsx
│        └── tickets/        # User's tickets page
│            └── page.tsx
│
├── components/
│   ├── common/              # Reusable components (e.g., Container.tsx,)
│   ├── forms/               # Forms
|   |   └── stepper/         # Stepper forms (e.g., booking)
│   ├── icons/               # Icons (e.g., logo )
│   └── ui/                  # Shadcn components
|
├── store/
│   ├── events.json          # Static dummy events data
│   ├── eventsStore.ts       # Available Events (tickets) store
│   └── bookingStore.ts      # User's bookings store
│
├── types/
│   └── index.ts             # Type definitions
|
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
├── README.md                # Readme file
└── package.json             # Project dependencies and scripts
```

## <span id="getting-started"> 🚀 Getting Started </span>

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd [project-directory]
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## <span id="application-flow">🔄 Application Flow </span>

1. **Homepage** (`/`): Users can browse available tickets
2. **Booking Process** (`/book`):
   - Step 1: Select ticket type
   - Step 2: Enter personal details
   - Step 3: Review and confirm booking
3. **Tickets Management** (`/tickets`): View and manage booked tickets
4. **About Page** (`/about`): Users can read more about the project.

## <span id="usage"> 📱 Usage </span>

### Booking Tickets

1. **Browse Events:** Visit the home page to see available events.
2. **Book a Ticket:** Click on an event to navigate to the booking page.

   Follow the multi-step form:

   - Step 1: Select ticket type and quantity.
   - Step 2: Enter your personal details.
   - Step 3: Preview your booking and confirm to download your ticket.

3. Manage bookings in "My Tickets" section

_Note: Form data and current step are persisted using Zustand, so if you refresh the page, your progress remains intact._

## <span id="key-functionality"> 💫 Key Functionality </span>

- **Form Persistence:** All form data is saved in localStorage

- **Image Upload:** Supports both file upload and URL input

- **Inventory Management:** Ticket quantities update in real-time

- **Ticket Download:** Generates PDF ticket (placeholder implementation)

## <span id="contributing"> 🤝 Contributing </span>

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## <span id="author"> 👤 Author </span>

- **Tosin Samuel**
- Email: samdevtechnology@gmail.com
- Twitter: [@samdevtech](https://x.com/samdevtech)
- Instagram: [@samdevtech](https://www.instagram.com/samdevtech)
- LinkedIn: [@samdevtech](https://www.linkedin.com/in/sam-dev-bb1654267)

## <span id="acknowledgment"> 🙏 Acknowledgment </span>

- HNG Internship
