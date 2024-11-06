'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = () => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		const socketIo = io(process.env.NEXT_PUBLIC_SOCKET_URL!);

		setSocket(socketIo);

		return () => {
			socketIo.off('newAnswer');
			socketIo.disconnect();
		};
	}, []);

	return { socket };
};
