import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundColor: 'blue' }} >
           <div>
                <a href='https://es-la.facebook.com/'>
                    <img src='/img/facebook.png' alt='facebook'></img>
                </a>
                <a href='https://twitter.com/i/flow/login'>
                    <img src='/img/twitter.png' alt='twitter'></img>
                </a>
                <a href='https://www.instagram.com/'>
                    <img src='/img/instagram.png' alt='instagram'></img>
                </a>
            </div>
            <img src='/img/logo.png' alt='logo'></img>
            <strong>Desarrollo de alura</strong>
        </footer>
    );
}

export default Footer;
