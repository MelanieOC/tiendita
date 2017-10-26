import createStore from 'redux-zero';
import products from './data';

const initialState = {
    allDish : products
}

const store = createStore(initialState);

export default store; 