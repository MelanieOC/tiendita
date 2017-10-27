import store from './store.js';

export const addToCart = (name, index) => {
    let allDish = [...store.getState().allDish];
    let shoppingCart = [...store.getState().shoppingCart];
    if(shoppingCart.length){
        for(let i in shoppingCart){
            if(shoppingCart[i].dish===name){
                shoppingCart[i].amount++;
                store.setState({
                    shoppingCart: shoppingCart
                });
                return;
            }
        }
        shoppingCart.push({
            dish: allDish[index].dish,
            price: allDish[index].price,
            image: allDish[index].image,
            amount: 1
        })
    }else{
        shoppingCart.push({
            dish: allDish[index].dish,
            price: allDish[index].price,
            image: allDish[index].image,
            amount: 1
        })
    }
    
    store.setState({
        shoppingCart: shoppingCart
    });
}

export const emptyCart = () => {
    store.setState({
        shoppingCart: []
    });
}

export const removeDish = (dish) => {
    let shoppingCart = [...store.getState().shoppingCart];
    let removeDish = dish.dish;
    let cleanAllDish = shoppingCart.filter((dish) => dish.dish !== removeDish);
    store.setState({
        shoppingCart: cleanAllDish
    });
}
export const changeAmount = (name, amount) => {
    let product = [...store.getState().shoppingCart];
    let pro = product.map(dish => {
        if (dish.dish === name) {
            dish.amount = amount;
        }
        return dish;
    });
    store.setState({
        shoppingCart: product
    })
}