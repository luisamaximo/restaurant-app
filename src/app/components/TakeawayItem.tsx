import React from "react";
import './menuItem.css';
import { MenuItemProps } from "../types/menuTypes";
import { Wrapper } from "../takeaway/takeaway.styles";
import Button from "@mui/material/Button";

export default function MenuItem({
    item,
}: MenuItemProps) {

    const handleAddToCart = () => null;

    const handleRemoveFromCart = () => null;
    
    return (
        <Wrapper>
            <img src={item.preview} className="menu-img" alt="" />  {/*  change this to an Image tag */}
            <div className="menu-content">
                {item.name}
                <span>£{item.price}</span>
            </div>
            <div className="menu-ingredients">{item.description}</div>
            <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    )
}
