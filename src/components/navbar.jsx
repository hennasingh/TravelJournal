import globe from '../assets/globe.png'
export default function Navbar() {
    return (
        <nav>
            <img src={globe} alt="globe icon" className="nav-icon" />
            <span>my travel journal</span>
        </nav>
    )
}