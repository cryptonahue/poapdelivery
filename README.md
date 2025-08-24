# POAP Delivery 🏆

A Next.js application for managing and distributing POAP (Proof of Attendance Protocol) NFT links. This platform allows event organizers to create and distribute POAP claims while providing a user-friendly interface for attendees to claim their digital certificates.

## ✨ Features

- **POAP Claim Interface**: Simple form for attendees to claim POAP links using secret keywords
- **POAP Management**: Admin interface to create and manage POAP distributions
- **Authentication System**: Firebase-based user authentication with login/register functionality
- **File Upload**: Drag-and-drop interface for uploading POAP-related files
- **Security**: reCAPTCHA integration and IP validation
- **Responsive Design**: Mobile-friendly interface using Material-UI components
- **Progress Tracking**: Visual progress indicators during claim processes

## 🛠️ Tech Stack

- **Framework**: Next.js 10.0.5
- **Frontend**: React 17.0.1
- **UI Library**: Material-UI (MUI) 5.2.4
- **Styling**: Tailwind CSS 3.0.8
- **Authentication**: Firebase 8.8.1
- **Form Handling**: React Hook Form 7.17.4 with Yup validation
- **HTTP Client**: Axios 0.21.3
- **Security**: reCAPTCHA integration
- **File Handling**: React Dropzone
- **Notifications**: SweetAlert2

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Image/          # Image component
│   ├── Input/          # Form input components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── MarkDown/       # Markdown renderer
│   ├── Modal/          # Modal dialogs
│   ├── Model/          # Model components
│   ├── Nav/            # Navigation component
│   ├── Page.jsx        # Page wrapper
│   └── Spacing/        # Spacing utility
├── config/             # Configuration files
│   └── poap/          # POAP-specific configs
├── constants/          # Application constants
├── containers/         # Container components
│   ├── Community.jsx   # Community features
│   ├── Forgot.jsx     # Password recovery
│   ├── Links.jsx      # Links management
│   ├── Login.jsx      # Login form
│   └── Register.jsx   # Registration form
├── context/           # React context providers
│   ├── authContext.js # Authentication context
│   └── modalContext.js # Modal state management
├── hooks/             # Custom React hooks
├── pages/             # Next.js pages
│   ├── api/           # API routes
│   ├── delivery-poap/ # POAP creation interface
│   ├── index.js       # Main POAP claim page
│   └── poap.js        # Alternative POAP interface
├── services/          # API services
│   ├── accounts/      # Authentication services
│   ├── poap/         # POAP-related services
│   └── getData.js    # Data fetching utilities
├── styles/           # CSS stylesheets
└── utils/           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/poapdelivery.git
cd poapdelivery
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your configuration:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# API Configuration
NEXT_PUBLIC_API_URL=your_api_endpoint

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Usage

### For Attendees (Claiming POAPs)

1. Navigate to the main page
2. Enter the secret keyword provided by the event organizer
3. Complete the reCAPTCHA verification
4. Click "CLAIM" to receive your POAP link

### For Event Organizers (Creating POAP Deliveries)

1. Register or login to your account
2. Navigate to `/delivery-poap`
3. Upload your POAP file using the drag-and-drop interface
4. Set a secret keyword for distribution
5. Complete the reCAPTCHA verification
6. Click "Insertar POAP" to create the delivery
7. Monitor your created POAPs in the management table

## 🔧 API Endpoints

The application uses several API endpoints for POAP management:

- `GET /api/communities` - Fetch community data
- `GET /api/poaps` - Retrieve POAP information
- `POST /api/poaps` - Create new POAP distributions

## 🔐 Security Features

- **reCAPTCHA Integration**: Prevents automated abuse
- **IP Validation**: Tracks and validates user IP addresses
- **Firebase Authentication**: Secure user management
- **Input Validation**: Form validation using Yup schemas
- **HTTPS**: All API calls use secure HTTPS connections

## 📦 Build and Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deployment

This application can be deployed to various platforms:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Digital Ocean**

For Vercel deployment:
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🐛 Support

If you encounter any issues or need support:

1. Check the [Issues](https://github.com/your-username/poapdelivery/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🌟 Acknowledgments

- [POAP Protocol](https://poap.xyz/) for the proof of attendance concept
- [Next.js](https://nextjs.org/) for the React framework
- [Material-UI](https://mui.com/) for the component library
- [Firebase](https://firebase.google.com/) for authentication services

---

Built with ❤️ for the blockchain community