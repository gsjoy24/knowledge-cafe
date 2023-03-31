import React from 'react';

const Questions = () => {
	return (
		<div className='max-w-4xl m-auto p-4'>
			<h2 className='text-5xl font-semibold text-center mb-10'>Question Answers</h2>
			{/* first question */}
			<div className='question-box mb-8'>
				<p className='question text-xl font-bold mb-2'>1. What is the difference between props and state?</p>
				<p className='answer'>
					<p>
						a. Props are used to pass any data from one component to another component as an argument. But States hold
						the data.
					</p>
					<p>
						b. Props are immutable and can not be changed. On the other hand, States are mutable and can be changed.
					</p>
					<p>
						c. Props are used to communicate between components. States can be used for rendering dynamic changes with
						the component.
					</p>
					<p>d. Props make components reusable. State cannot make components reusable.</p>
				</p>
			</div>

			{/* second question */}
			<div className='question-box mb-8'>
				<p className='question text-xl font-bold mb-2'>
					2. How do <span className='p-1 bg-violet-300 rounded-md'>useState()</span> works?
				</p>
				<p className='answer'>
					useState is React Hook that allows to add state to a functional component. It returns an array with two
					values: the current state and a function to update it. The Hook takes an initial state value as an argument
					and returns an updated state value whenever the setter function is called.
				</p>
			</div>

			{/* third question */}
			<div className='question-box mb-8'>
				<p className='question text-xl font-bold mb-2'>
					3. What can <span className='p-1 bg-violet-300 rounded-md'> useEffect()</span> do other than load data?
				</p>
				<p className='answer'>
					useEffect() can be used in several task other then . Such as live filtering, validating input field, trigger
					animation on new array value,update paragraph list on fetched API data update and many more.
				</p>
			</div>

			{/* fourth question */}
			<div className='question-box mb-8'>
				<p className='question text-xl font-bold mb-2'>4. How does React work?</p>
				<p className='answer'>
					React basically divides an web page to multiple reusable components. The components are similar as javascript
					function. React create a virtual DOM tree, so that it can change or rerender every efficient element in the
					html node. React finds out what changes have been made, and changes only what needs to be changed.
				</p>
			</div>
		</div>
	);
};

export default Questions;
