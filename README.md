# React Transfer List Component

This project is a modern, responsive, and reusable **Transfer List** component built with React, TypeScript, and Tailwind CSS. It demonstrates a feature-based architecture and best practices for creating scalable and maintainable React components.

The component allows users to move items between two lists, a common UI pattern found in settings panels, configuration screens, and permission management systems.


<!-- *(Note: You can replace this with a real screenshot or GIF of your component in action.)* -->

## Table of Contents

- [Real-World Use Case](#real-world-use-case)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)


## Real-World Use Case

To make the component practical, it is implemented within a real-world scenario: **User Role Permission Management**.

An administrator needs to assign specific permissions to a user role (e.g., "Editor"). The Transfer List provides an intuitive interface for this task:
*   **Left List ("Available Permissions"):** Shows all permissions that are not yet assigned to the role.
*   **Right List ("Assigned Permissions"):** Shows all permissions currently granted to the role.

The administrator can easily move permissions between the lists to configure the role.

## Features

*   **Move Selected Items:** Select one or more items and move them to the opposite list.
*   **Move All Items:** Instantly move all items from one list to the other.
*   **Responsive Design:** The layout automatically adjusts for a seamless experience on both desktop and mobile devices. On mobile, lists are stacked vertically with intuitive up/down controls.
*   **Clean & Reusable:** Built with a feature-based architecture, making it easy to integrate into any React project.
*   **State Encapsulation:** All complex state logic is managed within a custom hook, keeping the UI component clean.

## Tech Stack

*   **React
*   **TypeScript
*   **Tailwind CSS

## Project Structure

This project follows a **feature-based architecture**. All files related to the `TransferList` component are co-located, making the feature self-contained and easy to manage.

```
src/
├── components/
│   └── ui/             
│       ├── Icon.tsx
│       └── index.ts
├── data/
│   └── permissionService.ts 
├── features/
│   └── TransferList/     
│       ├── components/     
│       │   ├── ControlButton.tsx
│       │   └── ListItem.tsx
│       ├── hooks/         
│       │   └── useTransferList.ts
│       ├── TransferList.tsx  
│       ├── types.ts       
│       └── index.ts        
└── App.tsx                 
```

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v16 or later recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/eeyll18/transfer-list.git
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.