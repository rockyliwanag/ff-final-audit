'use client';
//create a navigation bar that links to the root page, the notes page, and the finance page
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <ul className='flex gap-4 flex-row'>
                <li>
                    <Link href="/">Final-Audit</Link>
                </li>
                {/* <li>
                    <Link href="/notes">Sunnova-Sticky</Link>
                </li> */}
                <li>
                    <Link href="/PPW">PPW</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
