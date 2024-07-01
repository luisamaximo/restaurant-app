import React from "react";
import './menuItem.css';
import Link from "next/link";
import { MenuItemProps } from "../types/menuTypes";

export default function MenuItem({
    item,
}: MenuItemProps) {
    return (
        <div className="col-lg-6 menu-item">
            <img src={item.preview} className="menu-img" alt="" />  {/*  change this to an Image tag */}
            <div className="menu-content">
                <Link href={`/menu/${item.id}`}>
                {item.name}
                </Link>
                <span>${item.price}</span>
            </div>
            <div className="menu-ingredients">{item.description}</div>
        </div>
    )
}
