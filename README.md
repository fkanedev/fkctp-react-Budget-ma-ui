![React](https://img.shields.io/badge/React-v17.0.2-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.2.2-purple.svg)
![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# Company's Budget Allocation App

This project involves developing a budgeting application using React.js. It showcases the implementation of a user-friendly interface for managing company's finances as well as allocating budget. This project is part of my training in the [IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer), utilizing a [template](https://github.com/ibm-developer-skills-network/ejtos-react_budget_app) provided by IBM Developer Skills Network.

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Installation and Configuration](#installation-and-configuration)
4. [Usage](#usage)
5. [Development](#development)
6. [Sources](#sources)
7. [License](#license)
8. [Contact](#contact)

## 1. Introduction <a name="introduction"></a>

### Project Objective:
The main objective of this project is to create a user-friendly budgeting application that allows users to manage their finances by adding, editing, and removing expenses, as well as tracking their remaining budget. This project uses React.js to build an interactive interface and leverages the context API for state management.

### Key Features:
- Add, edit, and delete expenses.
- Track total expenses and remaining budget.
- Dynamic adjustment of budget and currency settings.
- User-friendly interface with responsive design.

## 2. Technologies Used <a name="technologies-used"></a>

### Programming Languages:
- JavaScript

### Tools and Frameworks:
- React.js: A JavaScript library for building user interfaces.
- Bootstrap: A CSS framework for developing responsive and modern web applications.

## 3. Installation and Configuration <a name="installation-and-configuration"></a>

### Prerequisites:
- Node.js and npm installed on your system.

### Installation Steps:
1. Clone the GitHub repository:
    ```bash
    git clone https://github.com/fkanedev/fkctp-react-Budget-ma-ui
    cd fkctp-react-Budget-ma-ui
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

### Environment Configuration:
No specific environment configuration is needed for this project.

## 4. Usage <a name="usage"></a>

### Running the Application:
To start the application, use the following command:
```bash
npm start
```
### Use Case Examples:
- Add a new expense by filling out the form and clicking the "Save" button.
- Edit an existing expense by clicking the "Increase by 10" or "Decrease by 10" buttons.
- Delete an expense by clicking the "Delete" button.

## 5. Development <a name="development"></a>
Project Structure:
The frontend project is organized around the React framework. The directory structure includes the following folders:

- src/: Contains the core of the application.
  - components/: Contains the React components.
  - context/: Contains context providers for state management.
  - App.js: Main entry point of the application.
  - index.js: Entry point for React rendering.

```plaintext
.
├── src/
│   ├── components/
│   │   ├── Budget.js
│   │   ├── Currency.js
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseItem.js
│   │   ├── ExpenseList.js
│   │   ├── Remaining.js
│   │   ├── TotalExpenses.js
│   ├── context/
│   │   ├── AppContext.js
│   ├── App.js
│   ├── index.js
├── package.json
├── LICENSE
├── README.md
└── ...
```

It's organized with a component-based structure using React.js and Context API for state management. The main components include:

- Budget.js: Manages and updates the budget.
- Remaining.js: Calculates and displays the remaining budget.
- ExpenseTotal.js: Displays the total expenses.
- ExpenseList.js: Lists all the expenses with options to increase, decrease, or delete each expense.
- ExpenseItem.js: Represents a single expense item.
- AllocationForm.js: Form for adding and reducing expenses.
- Currency.js: Dropdown for selecting the currency type.
- App.js: The main application component that integrates all the other components.

## 6. Sources <a name="sources"></a>

- **Template: [IBM Developer Skills Network - Budget app template](https://github.com/ibm-developer-skills-network/ejtos-react_budget_app)**

- **Useful links**:
  - **[Developing Front-End Apps with React](https://www.coursera.org/learn/developing-frontend-apps-with-react/home/week/1)**
  - **[IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer)**

## 7. License <a name="license"></a>

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

## 8. Contact <a name="contact"></a>

### Contact Information :

- Send me email : **fkanecloudtech@gmail.com**
- Connect with me on [LinkedIn](https://www.linkedin.com/in/your-profile/)
- Visit my [portfolio](https://yourname.github.io) to explore my projects and services.


### Contribution and Support :

Contributions are welcome. Please refer to the [CONTRIBUTING](/CONTRIBUTING) file for more information on how to contribute.

**Course : [Developing Front-End Apps with React](https://www.coursera.org/learn/developing-frontend-apps-with-react/home/week/1)**

**Module : [Week 4 : Final project - Scenario and Review Criteria](https://www.coursera.org/learn/developing-frontend-apps-with-react/ungradedWidget/gsxyC/final-project-scenario-and-review-criteria)**

**Specialization : [IBM Full Stack Software Developer Professional Certificate](https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer)**
