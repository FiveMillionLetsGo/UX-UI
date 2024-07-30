import '../styles/Setting.css'

function Setting() {
    return (
        <dev className='setting'>
            <dev className='menus'>아메리카노</dev>
            <dev className='size'>
                <p>크기</p>
                <dev className='setting__choice'>
                    <dev className='menus'>
                        <p className='link'>보통</p>
                    </dev>
                    <dev className='menus'>
                        <p className='link'>라지</p>
                    </dev>
                </dev>
            </dev>
            <dev className='temperture'>따뜻함</dev>
        </dev>
    );
}
export default Setting;