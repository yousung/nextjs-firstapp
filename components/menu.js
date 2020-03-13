import Link from 'next/link';

function Menu() {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/contact">contact</Link></li>
        </ul>
    );
}


export default Menu
