const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

const compose = (f, g) => (...args) => f(g(...args))


let result = purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function purchaseItem(...fns){
    return fns.reduce(compose)
}

function addItemToCart(user, item){
    const updatedCart = [...user.cart, item]
    return {...user, cart: updatedCart}
}

function applyTaxToItems(user) {
    const { cart } = user
    const taxRate = 1.3
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return {...user, cart: updatedCart}
}

function buyItem(user){
    return {...user, purchases: user.cart}
}

function emptyCart(user, item){
    return {...user, cart: []}
}


//-- Implement a cart feature
//-- 1. Add items to cart.
//-- 2. Add 3$ tax to item in cart
//-- 3. Buy item: cart ==> purchases
//-- 4. Empty cart

console.log(result)