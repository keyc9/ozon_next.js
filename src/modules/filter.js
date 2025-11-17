export const searchFilter = (goods, value) => {
    return goods.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
}

export const categoryFilter = (goods, value) => {
    return goods.category.toLowerCase() === value.toLowerCase();
}