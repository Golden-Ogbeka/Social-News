import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

function TextInput({
	value = '',
	onChange = () => null,
	type = 'text',
	name = '',
	placeholder = '',
	variant = 'border',
	multiline = false,
	rows = 3,
	style,
	endIcon = false,
	iconType = '',
}) {
	return !multiline ? (
		endIcon ? (
			<div className="w-full relative">
				<input
					className={
						variant === 'border'
							? 'w-full pb-2 pt-2 border-purple-100 border-solid border-b-2  outline-none bg-transparent focus:border-purple-300 pr-10'
							: variant === 'outline' &&
							  'w-full p-2 border-purple-100 border-solid border-2  outline-none bg-transparent focus:border-purple-300 rounded pr-10'
					}
					placeholder={placeholder}
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					style={style}
				/>
				{iconType === 'search' && (
					<SearchIcon
						width={24}
						height={24}
						className="absolute right-3 top-2 text-purple-400 cursor-pointer"
					/>
				)}
			</div>
		) : (
			<input
				className={
					variant === 'border'
						? 'w-full pb-2 pt-2 border-purple-100 border-solid border-b-2  outline-none bg-transparent focus:border-purple-300'
						: variant === 'outline' &&
						  'w-full p-2 border-purple-100 border-solid border-2  outline-none bg-transparent focus:border-purple-300 rounded'
				}
				placeholder={placeholder}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				style={style}
			/>
		)
	) : (
		<textarea
			className={
				variant === 'border'
					? 'w-full pb-2 pt-2 border-purple-100 border-solid border-b-2  outline-none bg-transparent focus:border-purple-300'
					: variant === 'outline' &&
					  'w-full p-2 border-purple-100 border-solid border-2  outline-none bg-transparent focus:border-purple-300 rounded'
			}
			placeholder={placeholder}
			type={type}
			rows={rows}
			name={name}
			value={value}
			onChange={onChange}
			style={style}
		/>
	);
}

export default TextInput;
