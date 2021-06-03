import "./style.css";
const Footer  = () => {
    return (
        <footer>
            <a
            href="https://github.com/ParkerHJones"
            target="_blank"
            >
            <img
             src={`${process.env.PUBLIC_URL}/Github.png`}
             alt="LinkIn-icon"
            />
            </a>
        </footer>
    );
}

export default Footer;