'use client';

import Link from 'next/link';
import './header.css';

export default function Header() {

    return (
        <header id="header" className='fixed-top d-flex align-items-cente'>
            <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                <h1 className='logo me-auto me-lg-0'>
                    <a href="/">Bistro Restaurant</a>
                </h1>
                <div className='btns'>
                    <Link className="herobtn" href="/takeaway">
                        Order Online!
                    </Link>
            </div>
            </div>
        </header>
    )
}