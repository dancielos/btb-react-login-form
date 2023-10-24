import { useState } from 'react';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import Input from './Input';
import { useInput } from '../hooks/useInput.js';

export default function Login() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput('', (val) => isEmail(val) && isNotEmpty(val));

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput('', (val) => hasMinLength(val, 6));

	const handleSubmit = function (e) {
		e.preventDefault();

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log(emailValue, passwordValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<Input
					id='email'
					label='Email'
					type='email'
					name='email'
					onChange={handleEmailChange}
					value={emailValue}
					onBlur={handleEmailBlur}
					error={emailHasError && 'Please enter a valid email'}
				/>
				<Input
					id='password'
					label='Password'
					type='password'
					name='password'
					onChange={handlePasswordChange}
					value={passwordValue}
					onBlur={handlePasswordBlur}
					error={passwordHasError && 'Please enter a valid password.'}
				/>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
