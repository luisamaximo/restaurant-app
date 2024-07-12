'use client'

import { useState, useEffect } from 'react'
import { ItemType } from '../types/menuTypes'


import { Wrapper } from './takeaway.styles';
import Grid from '@mui/material/Grid';
import TakeawayItem from '../components/TakeawayItem';

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

    

    return (
            <Wrapper>
                <Grid container spacing={3}> 
                    {items.map(
                            (item: ItemType) => (
                                <Grid item key={item.id} xs={12} sm={4}>
                                    <TakeawayItem item={item} />
                                </Grid>
                            )
                        )}
                </Grid>
            </Wrapper>
    )
}
