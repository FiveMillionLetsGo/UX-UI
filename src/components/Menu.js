import '../styles/Menu.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Menu() {
    return (
        <dev className='menu'>
            <dev className='menu__header'>
                <p><Link to='/Menu/Coffee' className='link'>커피</Link></p>
                <p><Link to='/Menu/Ade' className='link'>에이드</Link></p>
                <p><Link to='/Menu/Smoothie' className='link'>스무디</Link></p>
                <p><Link to='/Menu/Desert' className='link'>디저트</Link></p>
            </dev>
            <dev className='menu__body'>
                <dev className='menu__body__container'>
                    <dev className='menus'>
                        <p><Link to='/Setting' className='link'>아메리카노</Link></p>
                    </dev>
                    <dev className='menus'>
                        <p><Link to='/Setting' className='link'>카페라떼</Link></p>
                    </dev>
                </dev>
                <dev className='menu__body__container'>
                    <dev className='menus'>
                        <p><Link to='/Setting' className='link'>바닐라라떼</Link></p>
                    </dev>
                    <dev className='menus'>
                        <p><Link to='/Setting' className='link'>카푸치노</Link></p>
                    </dev>
                </dev>
            </dev>
        </dev>
    );
}
export default Menu;