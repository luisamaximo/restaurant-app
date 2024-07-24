'use client'

import { useState, useEffect } from 'react'
import { filters } from '../data/data'
import { ItemType } from '../types/menuTypes'
import { menu } from '../data/data'

import MenuItem from '../components/MenuItem/MenuItem'

export default function Menu() {
    const [items, setItems] = useState(menu)

    const handleFilterChange = (category: string) => {
        if (category === 'all') {
            setItems(menu);
        } else {
            setItems(
                menu.filter(
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
