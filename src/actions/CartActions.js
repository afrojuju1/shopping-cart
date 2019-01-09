export const addToCart = (item) => {
    console.log(`ACTION: adding ${item} to cart`)
    return {
        type: 'ADD_ITEM',
        item: item
    }
}
