# SingRoamAI

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4bd60097b63e4451a251141f8c1e7feb)](https://app.codacy.com/gh/souless94/SingRoamAI/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=souless94_SingRoamAI&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=souless94_SingRoamAI)
[![Snyk Badge](https://snyk.io/test/github/souless94/SingRoamAI/badge.svg)](https://snyk.io/test/github/souless94/SingRoamAI)

SingRoamAI is a personalized AI-powered travel itinerary planner designed for Singaporeans. It helps users easily plan free and easy trips while recording past travel experiences. The platform focuses on AI-generated itineraries, seamless itinerary management, and an intuitive user experience.

## Features
- **AI-Generated Itineraries**: Get smart, structured travel plans based on your specified locations and activities.
- **Easy Trip Planning & Recording**: Designed for free and easy travelers to document and plan trips effortlessly.
- **CRUD Operations for Itineraries**: Manage your travel itineraries with ease.
- **Weather & Seasonal Insights**: Displays weather forecasts with recommendations if applicable.


## Tech Stack
- **Frontend**: Next.js
- **Deployment**: Vercel
- **Authentication**: SuperTokens
- **UI Framework**: shadcn/ui
- **Security**:
  - ~~Permissions control for itinerary editing~~
  - ~~Antivirus scanning for past itinerary uploads~~
  - ~~XSS Protection & CSP Implementation (Future Enhancements)~~

## Features
### **Milestone 1: Core Features**
- [x] Login Page & Authentication (SuperTokens)
- [x] Dashboard Page
- ~~[ ] CRUD Operations for Itineraries~~
- ~~[ ] Unit Tests for CRUD Operations for Itineraries~~

### **Milestone 2**
- [x] Implement AI Itinerary Generation (GenAI)
- ~~[ ] User Permissions (Only Edit Own Itinerary)~~
- ~~[ ] AI Output Validation Tests~~
- ~~[ ] User Permission Tests~~

### **Milestone 3: Security & File Handling**
- ~~[ ] File Upload & Antivirus Integration~~
- [x] Security Hardening (CSP)

### **Milestone 4: Release**
- [x] CI Implementation
- [x] Basic Security Tests
- [x] Vercel Deployment

## CI/CD & Security
- **CI/CD Pipeline**: Automating testing and deployment
- **Code Quality & Security Tools**:
  - Codacy
  - Sonar
  - Snyk

## Installation & Running Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/singroamai.git
   ```
2. Navigate to the project folder:
   ```sh
   cd singroamai
   ```
3. Install dependencies:
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   yarn dev
   ```
5. Open `http://localhost:3000` in your browser.

## Contributing
Contributions are welcome! Please check the [issues](https://github.com/yourusername/singroamai/issues) section and follow the contribution guidelines.

## License
This project is licensed under the MIT License.

---
For any inquiries or support, please contact [your email or project link].

