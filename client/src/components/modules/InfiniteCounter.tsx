'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const InfiniteCounter = () => {
	const [countTo, setCountTo] = useState(0);

	useEffect(() => {
		const generateRandomNumber = () => {
			// Генерируем случайное число от 1 до 999999
			return Math.floor(Math.random() * 999999);
		};

		const startCounting = () => {
			setCountTo(generateRandomNumber());
		};

		startCounting();

		const interval = setInterval(() => {
			startCounting();
		}, 5000); // Меняем число каждые 5 секунд

		return () => clearInterval(interval);
	}, []);

	return <CountUp start={0} end={countTo} duration={5} className='mr-2' />;
};

export default InfiniteCounter;
