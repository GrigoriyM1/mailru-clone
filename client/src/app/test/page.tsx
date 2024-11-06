'use client';

import { useSocket } from '@/hooks/useSocket';
const WebSocketComponent = () => {
	const { socket } = useSocket();

	const sendMessage = () => {
		socket?.emit('newMessage', { text: 'Hello, World!' });
	};

	return <button onClick={sendMessage}>WebSocket Component</button>;
};
export default WebSocketComponent;
