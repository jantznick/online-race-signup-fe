import React, { useState } from 'react';

import { PageWrapper } from '../utils/PageWrapper';
import { Step } from '../general/step';

export const Sample = () => {
	const [formStep, setFormStep] = useState('list')
	const steps = [
		{
			icon: 'list',
			title: 'Race Selection',
			description: 'Choose a Race',
			formInstructions: ''
		}, {
			icon: 'person',
			title: 'Personal Details',
			description: 'Tell us about yourself.',
			formInstructions: 'Please fill in your details so we could contact you.'
		}, {
			icon: 'contact_emergency',
			title: 'Emergency Contact',
			description: '',
			formInstructions: ''
		}, {
			icon: 'gavel',
			title: 'Terms and Conditions',
			description: '',
			formInstructions: ''
		}
	]

	return (
		<PageWrapper>
			<h1 className='text-center'>Sample Signup Page</h1>
			<div id="signup-form" className="my-8 max-w-[75%] center-flex shadow-lg">
				<div id="left" className="flex flex-col w-3/4 p-8">
					<h2 className="text-center text-xl font-bold mb-8">Race Title</h2>
					<div id="signup-step" className="center-flex space-x-4">
						{steps.map((item, index) => (
							<Step {...item} index={index} handleClick={setFormStep} formStep={formStep} key={index} />
						))}
					</div>
					<div id="form-title" className="">
						<h3></h3>
					</div>
					<div id="signup-form" className="">

					</div>
				</div>
				<div id="right" className="w-1/4 border-l-2 border-black bg-[url('/images/mountain-biking.jpg')]">

				</div>
			</div>
		</PageWrapper>
	)
}
