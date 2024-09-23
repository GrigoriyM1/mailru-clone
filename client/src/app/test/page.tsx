import Test from "./Test";

const TestPage = () => {
	const obj: { name: string, lastName: string } = {
		name: 'test',
		lastName: 'test'
	};

	return (
		<div>
			<Test name={obj} />
		</div>
	);
};

export default TestPage;