# ChatEasy - MERN Stack Chat Application

## **Overview**
ChatEasy is a real-time chat platform built using the MERN stack, designed for cross-platform compatibility using React Native and React.js. It provides user authentication via Google and email login and supports future integration of video and voice calling features.

---

## **Features**

### **Core Features**
- **Real-time Messaging**: Send and receive messages instantly.
- **Google and Email Authentication**: Secure user login.
- **Typing Indicators**: Real-time feedback for active typing.
- **Read Receipts**: Visual acknowledgment of message reads.
- **Chat History**: Persistent message storage.

### **Future Enhancements**
- **Voice and Video Calls**: Peer-to-peer communication via WebRTC.
- **File Sharing**: Send files without storing them on the server.
- **Group Chat**: Support for multiple participants in a conversation.

---

## **Technologies Used**

### **Frontend**
- **React.js**: Web interface
- **React Native**: Mobile applications (iOS and Android)
- **TypeScript**: Type-safe development
- **React Query & Axios**: API interaction and state management

### **Backend**
- **Node.js**: Server-side runtime
- **Express.js**: API framework
- **MongoDB**: Database for storing user and message data
- **Socket.IO**: Real-time communication
- **Firebase Authentication**: Secure user authentication

### **Additional Tools**
- **WebRTC**: Future voice/video and file sharing
- **MongoDB Atlas**: Cloud-based MongoDB

---

## **System Architecture**

1. **Frontend**:
   - React Native for mobile apps
   - React.js for web apps
   - Communicates with the backend via REST APIs and WebSocket

2. **Backend**:
   - Node.js server with Express.js for API handling
   - Socket.IO for WebSocket-based real-time messaging

3. **Database**:
   - MongoDB for storing user profiles, chat data, and metadata

4. **Future Integration**:
   - WebRTC for voice/video calls and file sharing

---

## **Setup Instructions**

### **1. Prerequisites**
- [Node.js](https://nodejs.org/): Latest stable version
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): Free tier account
- Firebase project for authentication setup

### **2. Clone the Repository**
```bash
git clone https://github.com/nizcse/ChatEasy.git
cd ChatEasy
```

### **3. Backend Setup**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   FIREBASE_API_KEY=your_firebase_api_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### **4. Frontend Setup**

#### **React.js (Web)**
1. Navigate to the `reactJs` folder:
   ```bash
   cd frontend/reactJs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

#### **React Native (Mobile)**
1. Navigate to the `reactNative` folder:
   ```bash
   cd frontend/reactNative
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app on an emulator or connected device:
   ```bash
   npx react-native run-android
   # Or for iOS
   npx react-native run-ios
   ```

---

## **Folder Structure**
```
ChatEasy/
├── frontend/
│   ├── reactJs/
│   └── reactNative/
├── backend/
├── .gitignore
├── README.md
└── package.json
```

---

## **Contribution Guidelines**
1. Fork the repository and create a new branch for your feature/bugfix.
2. Make changes and test thoroughly.
3. Commit your changes with descriptive messages.
4. Create a pull request for review.

---

## **License**
This project is licensed under the [ISC License](./LICENSE).

---

## **Contact**
For any questions or suggestions, please contact:
- **Name**: Nishant Sharma
- **Email**: nishantsharmacse@gmail.com
