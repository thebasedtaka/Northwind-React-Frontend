# Northwind Dashboard - React Frontend

A modern React application that provides a sleek, responsive interface for the classic Northwind database. This project serves as a comprehensive dashboard and management system for products, orders, customers, and more.

![Northwind Logo](./src/assets/Northwind%20Blue%20Transparent.png)

https://white-rock-0ecf1790f.6.azurestaticapps.net/

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

- Northwind Database - Microsoft's classic sample database
- All the amazing open-source libraries that made this project possible
