'use client'

import Link from 'next/link';
import './homepage.css';

export default function Hero() {
    return (
    <section id="hero" className='d-flex align-items-center'>
        <div className='container position-relative'>
            <div>
                <div>
                    <h1>
                        Welcome to Bistro <span>Restaurant</span>
                    </h1>

                    <div className='btns'>
                    <Link className="herobtn" href="/menu">
                        Menu
                    </Link>
                    <Link className="herobtn" href="/booking">
                        Book a table
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
        )
}