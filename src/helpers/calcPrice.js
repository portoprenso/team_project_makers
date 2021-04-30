export function calcSubPrice(product) {
    return product.count * product.item.price
}

export function calcTotalPrice(products) {
    let totalPrice = 0;
    products.forEach(item => {
        totalPrice += item.subPrice
    })
    return totalPrice
}

export function getCountProductsInCart() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    return cart ? cart.products.length : 0
}

export function calcDiscountPercent(oldprice, newprice){
    let discount = Math.ceil(100 - (newprice/oldprice)*100)
    return discount
}