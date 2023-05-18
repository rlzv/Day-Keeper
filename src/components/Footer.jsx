import React  from "react";


const Footer = () => {
    const date = new Date();
    const currentTime = date.getFullYear();
    return (
        <div>
            <footer>
                <p>Copyright &copy; {currentTime}</p>
            </footer>
        </div>
    );
}

export default Footer;
