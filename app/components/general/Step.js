import React from 'react';

export const Step = ({
    icon,
    index,
    title
}) => {
	return (
        <div className="step center-flex space-x-4">
            <div id="icon" className='center-flex items-center bg-orange-500 rounded-full'>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div id="step-info" className='flex flex-col'>
                <span className="">Step {index + 1}</span>
                <span className="">{title}</span>
            </div>
        </div>
	)
}
