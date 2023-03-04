import './home.css'
import Header from '../../header/Header.jsx'
import Posts from '../../post/Post';
import Sidebar from '../../sidebar/Sidebar';

const Home = () => {
    return(
        <>
        <Header/>
            <div className='home'>
                <Posts/>
                <Sidebar/>
            </div>
        </>
    )
}

export default Home;
