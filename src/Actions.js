import store from './store.js';

export const addToCart = (index) => {
    let newAllDish = [...store.getState().allDish];
    let newAmount = newAllDish[index].amount++;
    store.setState({
        allDish: newAllDish
    });
}

export const emptyCart = () => {
    let emptyAllDish = [...store.getState().allDish];
    emptyAllDish.map((dish) => {
        return ( dish.amount = 0);
    });
    store.setState({
        allDish: emptyAllDish
    });
}

export const removeDish = (dish) => {
    let allDish = [...store.getState().allDish];
    let removeDish = dish.dish;
    let cleanAllDish = allDish.map((dish) => {
        if (dish.dish === removeDish){
            dish.amount = 0
        }
        return dish;
    });
    store.setState({
        allDish: cleanAllDish
    });
}