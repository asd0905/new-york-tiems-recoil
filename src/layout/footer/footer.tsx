import { Link, useLocation } from "react-router-dom";
import { SFooter } from "./footer.style";

const Footer = () => {
    const location = useLocation();
    console.log(location);
    return (
        <SFooter>
            <Link to='/' className={location.pathname === '/' ? 'on' : ''}>
                <svg className="homeSvg" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8.84141V21.351C20 21.6704 19.6812 22.0002 19.3522 22.0002H14.6221C14.3033 22.0002 14.0874 21.7838 14.0874 21.4644V21.3613C14.0874 18.9913 12.1542 17.1571 9.89203 17.1571C7.52699 17.1571 5.69666 19.0943 5.69666 21.3613V21.4644C5.69666 21.7838 5.48072 22.0002 5.16195 22.0002H0.647814C0.329048 22.0002 0 21.6807 0 21.351V8.84141C0 7.97583 0.318767 7.22361 0.966582 6.68777L8.17481 0.649364C9.14139 -0.21621 10.653 -0.21621 11.7224 0.649364L18.9306 6.68777C19.6812 7.22361 20 7.97583 20 8.84141Z" fill="white" />
                </svg>
                <p>홈</p>
            </Link>
            <Link to='/scrap' className={location.pathname === '/scrap' ? 'on' : ''}>
                <svg className="scrapSvg" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="18" height="20" rx="2" stroke="#6D6D6D" />
                    <path d="M6 6H14M6 10.5H14M6 15H11.2" stroke="#6D6D6D" />
                </svg>
                <p>스크랩</p>
            </Link>
        </SFooter>
    )
}

export default Footer;