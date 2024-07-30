import '../styles/Main.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Main() {
    return (
        <dev className='main'>
            <Link to='/Menu' className='main__left'>
                <p className='link'>먹고가기</p>
            </Link>
            <Link to='/Menu' className='main__right'>
                <p className='link'>포장하기</p>
            </Link>
        </dev>
    );
}
export default Main;