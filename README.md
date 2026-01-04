\# Cypress E2E Testing Suite



Modern end-to-end testing framework using Cypress for fast, reliable web application testing.



\## 🎯 Features

\- Fast test execution

\- Real-time reloads

\- Time travel debugging

\- Automatic waiting

\- Network traffic control

\- Screenshot \& video recording



\## 🛠️ Tech Stack

\- \*\*Cypress 13.x\*\* - E2E testing framework

\- \*\*JavaScript\*\* - Test scripting

\- \*\*Mocha\*\* - Test runner

\- \*\*Chai\*\* - Assertions



\## 📁 Project Structure

```

cypress-e2e-tests/

├── cypress/

│   ├── e2e/          # Test files

│   ├── fixtures/     # Test data

│   ├── support/      # Custom commands

│   └── screenshots/  # Test screenshots

└── cypress.config.js # Configuration

```



\## 🚀 Setup \& Installation

```bash

\# Clone repository

git clone https://github.com/Kofiahorlu583/cypress-e2e-tests.git

cd cypress-e2e-tests



\# Install dependencies

npm install

```



\## ▶️ Running Tests



\### Interactive Mode

```bash

npm run cy:open

```



\### Headless Mode

```bash

npm run cy:run

```



\### Run specific test

```bash

npx cypress run --spec "cypress/e2e/login.cy.js"

```



\## 📝 Test Scenarios



\### Login Tests

\- ✅ Valid user login

\- ✅ Invalid credentials error

\- ✅ Empty fields validation

\- ✅ Locked user handling



\### Product Tests

\- ✅ Display all products

\- ✅ Add single product to cart

\- ✅ Add multiple products

\- ✅ Remove from cart



\## 🎓 Key Concepts

\- Page Object Pattern (via custom commands)

\- Fixture data management

\- Custom Cypress commands

\- Automatic retrying

\- Network stubbing capability



\## 📧 Contact

ahorlukofi335@gmail.com

