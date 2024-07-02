'use client'

import Link from 'next/link';
import './hero.css';

export default function Hero() {
    return (
    <section id="hero" className='d-flex align-items-center'>
        <div className='container position-relative text-center text-lg-start'>
            <div className='row'>
                <div className='col-lg-8'>
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