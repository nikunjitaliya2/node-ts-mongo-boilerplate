# API Documentation

## API Version 1 (/api/v1)

### Authentication
#### POST /auth/login
Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### User Management
#### GET /users
Retrieves a list of users.

**Headers:**
- Authorization: Bearer [JWT Token]

**Response:**
```json
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com"
  },
  ...
]
```

### Chat
#### POST /chat/rooms
Creates a new chat room.

**Headers:**
- Authorization: Bearer [JWT Token]

**Request Body:**
```json
{
  "name": "General Discussion"
}
```

**Response:**
```json
{
  "id": "room123",
  "name": "General Discussion"
}
```

#### POST /chat/messages
Sends a message to a chat room.

**Headers:**
- Authorization: Bearer [JWT Token]

**Request Body:**
```json
{
  "roomId": "room123",
  "content": "Hello, everyone!"
}
```

**Response:**
```json
{
  "id": "msg456",
  "roomId": "room123",
  "userId": "user789",
  "content": "Hello, everyone!",
  "timestamp": "2024-07-31T10:00:00Z"
}
```

[Add more API endpoints and their documentation here]

## WebSocket Events (Socket.io)

### Connection
Connect to WebSocket:
```javascript
const socket = io('http://your-server-url');
```

### Event: 'new_message'
Triggered when a new message is sent to a room.

**Payload:**
```json
{
  "id": "msg456",
  "roomId": "room123",
  "userId": "user789",
  "content": "Hello, everyone!",
  "timestamp": "2024-07-31T10:00:00Z"
}
```

[Add more WebSocket events and their documentation here]