import store from './store.js';

export const changeAmount = (name, amount)=>{
    let product = [...store.getState().allDish];
    let pro = product.map(dish=>{
        if(dish.dish===name){
            dish.amount=amount;
        }
        return dish;
    });
    store.setState({
        allDish: product
    })
}