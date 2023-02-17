const leftBlock = document.querySelector('.left-block');
const rightBlock = document.querySelector('.right-block');

// Right Block
const imageBlock = document.getElementById('image-block');
const headerText = document.getElementById('header-block');

// Data Block
const welcomeHeader = document.getElementById('welcome-header');
const welcomeParagraph = document.getElementById('welcome-paragraph');
const rememberBlock = document.querySelector('.remember');
const buttonSimpleText = document.getElementById('button-simple');
const buttonGoogleText = document.getElementById('button-google');


imageBlock.addEventListener('click', function () {
	leftBlock.classList.toggle('move');
	rightBlock.classList.toggle('move');

	if (leftBlock.classList.contains('move')) {
		rememberBlock.style.display = 'none';
		changeSource('images/sign-in.png', 'Have you already account?', 'Welcome.', 'Welcome! Please enter your details.', 'Create account', 'Create account with Google');
	}
	else {
		rememberBlock.style.display = 'flex';
		changeSource('images/signup.png', 'Don`t have an account ?', 'Welcome back.', 'Welcome back! Please enter your details.', 'Sign in', 'Sign in with Google');
	}
});

function changeSource(sourceTextParam, headerTextParam, welcomeHeaderParam, welcomeParagraphParam, buttonTextParam, buttonGoogleTextParam) {

	// Change the Right
	imageBlock.classList.add('hidden');
	setTimeout(() => {
		imageBlock.src = sourceTextParam;
		imageBlock.classList.remove('hidden');
	}, 300);
	headerText.textContent = headerTextParam;

	// Change the Data Block
	welcomeHeader.textContent = welcomeHeaderParam;
	welcomeParagraph.textContent = welcomeParagraphParam;
	buttonSimpleText.textContent = buttonTextParam;
	buttonGoogleText.textContent = buttonGoogleTextParam;
}
