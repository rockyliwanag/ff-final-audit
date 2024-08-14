'use client';
//create a navigation bar that links to the root page, the notes page, and the finance page
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <ul className='flex gap-4 flex-row'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/notes">Notes</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
