# CivicMind Project Structure

This document outlines the structure of the CivicMind application to help you navigate and understand the codebase.

## Directory Structure

```
civicmind/
├── src/                      # Source code
│   ├── app/                  # Next.js App Router pages
│   │   ├── feed/             # Policy feed page
│   │   ├── learn/            # Educational modules page
│   │   ├── volunteer/        # Volunteer opportunities page
│   │   ├── globals.css       # Global CSS styles
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Homepage component
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # UI components from shadcn/ui
│   │   │   ├── button.tsx    # Button component
│   │   │   └── dropdown-menu.tsx # Dropdown menu component
│   │   ├── navbar.tsx        # Navigation bar component
│   │   ├── theme-provider.tsx # Theme provider for dark/light mode
│   │   └── theme-toggle.tsx  # Theme toggle component
│   └── lib/                  # Utility functions
│       └── utils.ts          # Utility functions for class names, etc.
├── public/                   # Static assets (to be added)
├── .gitignore                # Git ignore file
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project overview and setup instructions
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Components

### Pages

- **Home Page (`src/app/page.tsx`)**: Main landing page with links to the main sections of the application.
- **Feed Page (`src/app/feed/page.tsx`)**: Page for displaying policy updates and legislative changes.
- **Learn Page (`src/app/learn/page.tsx`)**: Page for educational modules and civic learning content.
- **Volunteer Page (`src/app/volunteer/page.tsx`)**: Page for volunteer opportunities and civic engagement.

### UI Components

- **Navbar (`src/components/navbar.tsx`)**: Navigation bar with links to the main pages and theme toggle.
- **Theme Toggle (`src/components/theme-toggle.tsx`)**: Button to switch between light and dark mode.
- **Button (`src/components/ui/button.tsx`)**: Reusable button component with various styles.
- **Dropdown Menu (`src/components/ui/dropdown-menu.tsx`)**: Dropdown menu component used for the theme selector.

### Utilities

- **Theme Provider (`src/components/theme-provider.tsx`)**: Provider for theme context using next-themes.
- **Utility Functions (`src/lib/utils.ts`)**: Helper functions for merging class names and other utilities.

## Future Development

As the project evolves, new components and features will be added to this structure. Key areas for expansion include:

- User authentication and profiles
- Policy feed integration with Legiscan API
- Interactive educational modules
- Volunteer opportunities database
- Admin dashboard for content management 