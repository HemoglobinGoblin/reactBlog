import './topbar.css';

export default function TopBa() {
    return(
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className='toplist'>
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>LogOut</li>
                </ul>
            </div>
            <div className='topRight'>topRight</div>
        </div>
    )
}
