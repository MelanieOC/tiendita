import createStore from 'redux-zero';
import products from './data';

const initialState = {
    allDish : products,
    shoppingCart: []
}

const store = createStore(initialState);
export default store; 