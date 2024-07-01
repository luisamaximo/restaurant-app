export type ItemType = {
    id: number,
    name: string,
    description: string,
    price: number,
    preview: string,
}

export type MenuItemProps = {
    item: ItemType;
}

export type MenuType = {
    id: number,
    name: string,
    price: number,
    preview: string,
    ingredients: string,
    category: string,
    description: string,
}[]