# EduReward - Refer and Earn Platform

A React-based web application that allows users to refer friends to educational courses and earn rewards. The platform features a modern UI with a referral system, course information, and reward tracking.

## Features

- User-friendly referral interface
- Course catalog with pricing details
- Reward calculation system
- Mobile-responsive design
- Form validation
- Modal-based referral flow
- Real-time error handling

## Tech Stack

- React.js
- Tailwind CSS
- Lucide React (for icons)
- React Hooks

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository
```bash
git clone https://github.com/AmbikaMandhaniya/Accredian-frontend-task.git
cd Accredian-frontend-task
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.sample .env
```

4. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000\`

## Project Structure

```
src/
  ├── components/
  │   └── ReferAndEarn.js
  ├── App.js
  ├── App.css
  ├── index.js
  ├── index.css
public/
  ├── index.html
  ├── favicon.ico
  ├── manifest.json
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
REACT_APP_API_URL=http://localhost:3000\
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app

## Component Documentation

### ReferAndEarn Component

The main component that handles the referral system. Features include:

- Form validation for email and phone numbers
- Modal-based referral interface
- Success/error state management
- Responsive design for all screen sizes

### Key Features Implementation

1. **Form Validation**
   - Email format validation
   - Phone number format checking (10 digits)
   - Required field validation

2. **Reward System**
   - Dynamic reward calculation based on course selection
   - Transparent reward structure display

3. **User Interface**
   - Clean and modern design
   - Responsive layout
   - Interactive elements with hover states
   - Loading and success states

## Deployment

The application can be deployed using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Create React App for the initial project setup
- Tailwind CSS for the styling system
- Lucide React for the icon system
