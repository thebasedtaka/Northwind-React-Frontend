# Northwind Dashboard - React Frontend

A modern React application that provides a sleek, responsive interface for the classic Northwind database. This project serves as a comprehensive dashboard and management system for products, orders, customers, and more.

![Northwind Logo](./src/assets/Northwind%20Blue%20Transparent.png)

## Features

### Dashboard Analytics
- **Key Metrics**: Track total products, pending orders, active customers, and revenue
- **Data Visualization**: Interactive charts showing product distribution by category
- **Recent Orders**: Quick view of the latest transactions

### Modern UI Components
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessible UI**: Built with Radix UI primitives for maximum accessibility
- **Tailwind CSS**: Consistent styling with utility-first approach

### Data Management
- **Products & Categories**: Browse and manage the product catalog
- **Customers & Orders**: Track customer information and order history
- **Employees & Territories**: Manage staff and their assigned regions

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Query**: Efficient data fetching with caching and background updates
- **Zod Validation**: Runtime type checking for API responses
- **React Router**: Seamless navigation between different sections

## Technology Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: React Query, React Context
- **Data Visualization**: Chart.js with React-Chartjs-2
- **API Communication**: Axios
- **Deployment**: Azure Static Web Apps via GitHub Actions

## Getting Started

### Prerequisites
- Node.js 22.x or later
- npm 10.x or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/northwindFrontendReact.git
cd northwindFrontendReact
```

2. Install dependencies
```bash
npm ci
```

3. Set up environment variables
```bash
# Create .env.development for local development
echo "VITE_API_BASE_URL=http://localhost:8000" > .env.development
```

4. Start the development server
```bash
npm run dev
```

## Deployment

This project is configured for automatic deployment to Azure Static Web Apps using GitHub Actions. When you push to the main branch, the CI/CD pipeline will:

1. Build the application with production settings
2. Deploy to Azure Static Web Apps
3. Make the site available at your configured domain

### Environment Variables

For production deployment, set the following GitHub secrets:
- `VITE_API_BASE_URL_PROD`: URL of your production API
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Deployment token for Azure Static Web Apps

## Project Structure

```
northwindFrontendReact/
├── src/
│   ├── api/           # API clients and services
│   ├── components/    # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── models/        # TypeScript interfaces and Zod schemas
│   ├── pages/         # Page components
│   ├── routes/        # Route definitions
│   └── utils/         # Utility functions
├── public/            # Static assets
└── .github/workflows/ # CI/CD configuration
```

## License

[MIT License](LICENSE)

## Acknowledgements

- Northwind Database - Microsoft's classic sample database
- All the amazing open-source libraries that made this project possible