'use client';

import React from "react";
import './topBar.css';

export default function TopBar() {

    return (
        <div id="topbar">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-phone d-flex align-items-center">
                        <span>+1 5589 55488 55</span>
                    </i>
                    <i className="bi bi-clock d-flex alignt-items-center">
                        <span>Mon-Sat: 11am - 23pm</span>
                    </i>
                </div>
            </div>
    )
}