import './sidebar.css'

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span> 
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY213CG-Ho3BJfqYf16sUzsrjBvdNN0Zk-g&usqp=CAU"
                alt=""/>
                <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span> 
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Tech</li>
                    <li className='sidebarListItem'>Cinema</li>
                </ul>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span> 
            <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
            </div>
        </div>
    )
}

export default Sidebar;
