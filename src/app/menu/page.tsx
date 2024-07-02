'use client'

import { useState, useEffect } from 'react'
import { filters } from '../data/data'
import { ItemType } from '../types/menuTypes'

import MenuItem from '../components/MenuItem'

export default function Menu() {
    const [data, setData] = useState([])
    const [items, setItems] = useState([])

    const getMenuData = () => {
        fetch('http://localhost:3000/api/menu')
            .then((res) => res.json())
            .then((menu) => setData(menu))
            .catch((e) => console.log(e.message))
    } //fetching the menu data from my menu data file  
    useEffect(() => {
        getMenuData()
    }, []) // calls getMenuData when the component renders to get the initial menu data

    useEffect(() => {
        setItems(data)
    }, [data]) // Updates the items state variable whenever the data state changes. This ensures that items is in sync with data.

    const handleFilterChange = (category: string) => {
        if (category === 'all') {
            setItems(data);
        } else {
            setItems(
                data.filter(
                    (item: { category: string }) => item.category === category
                )
            );
        }
    }

    return (
            <section id="menu" className="menu section-bg">
                <div className="container">
                    <div>
                        <div>
                            <h1>Menu</h1>
                            <ul id="menu-filters">
                                {filters.map((filter) => (
                                    <li
                                        key={filter.id}
                                        onClick={() =>
                                            handleFilterChange(
                                                filter.category
                                            )
                                        }
                                    >
                                        {filter.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className="row menu-container">
                        {items.map(
                            (item: ItemType) => <MenuItem key={item.id} item={item} />
                        )}
                </div>
            </section>
    )
}
