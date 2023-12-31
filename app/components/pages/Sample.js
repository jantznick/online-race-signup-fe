import React, { useState } from 'react';

import classNames from "classnames";

import { PageWrapper } from '../utils/PageWrapper';
import { Step } from '../general/Step';

export const Sample = () => {
	const [formStep, setFormStep] = useState('list')
	const [sport, setSport] = useState('mountain-biking')
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
			icon: 'health_and_safety',
			title: 'Emergency Contact',
			description: '',
			formInstructions: ''
		}, {
			icon: 'gavel',
			title: 'Terms and Conditions',
			description: '',
			formInstructions: ''
		}, {
			icon: 'credit_card',
			title: "Payment Info",
			description: 'Payment information',
			formInstructions: 'Please enter payment information.'
		}
	]

	return (
		<PageWrapper>
			<h1 className='text-center'>Sample Signup Page</h1>
			<div id="signup-form" className="my-8 max-w-[90%] lg:max-w-[75%] rounded-3xl center-flex whole-shadow">
				<div id="left" className="flex flex-col px-1 py-8 md:w-3/4 lg:p-8">
					<h2 className="text-center text-xl font-bold mb-4 md:mb-8">Race Title</h2>
					<div id="signup-step" className="pb-1 center-flex mx-2 overflow-x-scroll overflow-y-hidden ">
						<div id="step-holder" className="flex max-w-full space-x-4">
							{steps.map((item, index) => (
								<Step {...item} index={index} handleClick={setFormStep} formStep={formStep} key={index} />
							))}
						</div>
					</div>
					{steps.map((item, index) => (
						<div className={classNames(
							'hidden',
							'center-flex',
							'font-bold',
							'mt-4',
							'md:hidden',
							{ 'sm:flex': item.icon == formStep }
						)} key={index}>
							{item.title}
						</div>
					))}
					<div id="form-title" className="">
						<h3></h3>
					</div>
					<div id="signup-form" className="">

					</div>
				</div>
				<div id="right" className={classNames(
					"w-1/4",
					"rounded-r-3xl",
					"hidden",
					`form-image-right-${sport}`,
					"md:flex"
				)}>
				</div>
			</div>
		</PageWrapper>
	)
}
