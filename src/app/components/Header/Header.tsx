'use client';

import Link from 'next/link';
import './header.css';

export default function Header() {

    return (
        <header id="header">
            <div className='container-xl d-flex justify-content-lg-between'>
                <h1 className='logo'>
                    <a href="/">Bistro Restaurant</a>
                </h1>
                <div className='btns'>
                    <Link className="herobtn" href="/takeaway">
                        Order Online!
                    </Link>
            </div>
            </div>
            <div id="topbar">
                <div className="contact-info d-flex">
                    <i className="bi-phone">
                        <span>+44 12345 678910</span>
                    </i>
                    <i className="bi-clock">
                        <span>Mon-Sat: 11am - 23pm</span>
                    </i>
                </div>
            </div>
        </header>
    )
}