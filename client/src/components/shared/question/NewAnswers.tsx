import { useSocket } from '@/hooks/useSocket';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const NewAnswers = () => {
	const { socket } = useSocket();
	const { id } = useParams();

	const queryClient = useQueryClient();

	useEffect(() => {
		socket?.emit('joinQuestion', { questionId: id });

		socket?.on('newAnswer', data => {
			console.log('Received new answer:', data);
			queryClient.invalidateQueries({ queryKey: [`get-one-question`] });
		});
	}, [socket]);

	return <></>;
};

export default NewAnswers;
