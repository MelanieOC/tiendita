import createStore from 'redux-zero';
import products from './data';

const initialState = {
    allDish : products,
    order: 0
}

const store = createStore(initialState);
export default store; 