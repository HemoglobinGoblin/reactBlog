import './topbar.css';

const TopBar = () => {
    return(
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>LogOut</li>
                </ul>
            </div>
            <div className='topRight'>
                <img
                    className='topImg'
                    src="https://static.bandainamcoent.eu/high/dark-souls/dark-souls-hd/00-page-setup/ds-hd_game_thumb_408x314.jpg"
                    alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar;
