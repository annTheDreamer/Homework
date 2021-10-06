import { useState } from 'react';

const Main = () => {
	const [loginState, setLoginState] = useState();
	const [emailState, setEmailState] = useState('');
	const [usernameState, setUsernameState] = useState('');
	const [passwordState, setPasswordState] = useState('');
	const [passwordInputType, setPasswordInputType] = useState('password');
	const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

	const handleLogin = () => {
		setLoginState(true);
	};
	const handleLogout = () => {
		setLoginState(false);
	};
	const onFormSubmit = (event) => {
		event.preventDefault();
		if (usernameState.length < 6 || passwordState.length < 6) {
			alert('Username or password too short!');
			return;
		}
		if (!emailPattern.test(emailState)) {
			alert('Invalid email');
			return;
		}
		handleLogin();
	};
	return (
		<section className="main-section">
			{!loginState && (
				<>
					<h2>Hello Earthling!</h2>
					<p className="white-text">Please log in to access your planet 💫</p>
					<form onSubmit={onFormSubmit}>
						<div className="login-details">
							<label htmlFor="emailInput">email: </label>
							<input
								type="email"
								name="emailInput"
								value={emailState}
								onChange={(event) => {
									setEmailState(event.target.value);
								}}
								className="input-field"
							/>
						</div>
						<div className="login-details">
							<label htmlFor="usernameInput">Username: </label>
							<input
								type="text"
								name="usernameInput"
								value={usernameState}
								onChange={(event) => {
									setUsernameState(event.target.value);
								}}
								className="input-field"
							/>
						</div>
						<div className="login-details">
							<label htmlFor="passwordInput">Password: </label>
							<input
								type={passwordInputType}
								name="passwordInput"
								value={passwordState}
								onChange={(event) => {
									setPasswordState(event.target.value);
								}}
								className="input-field"
							/>
						</div>
						<div className="btns">
							<button
								type="submit"
								disabled={!emailState || !usernameState || !passwordState}
								className="btn"
							>
								Log in!
							</button>

							<button
								type="button"
								onClick={() => {
									if (passwordInputType === 'password') {
										setPasswordInputType('text');
									} else {
										setPasswordInputType('password');
									}
								}}
								className="btn"
							>
								Show Pass
							</button>
						</div>
					</form>
				</>
			)}
			{loginState && (
				<>
					<h2>Hello Beautiful Soul!</h2>
					<p className="white-text">Your universe has been waiting on you ✨</p>
					<button onClick={handleLogout} className="btns btn">
						Log out!
					</button>
				</>
			)}
		</section>
	);
};

export default Main;
