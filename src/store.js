import createCommets from 'redux-zero'

const FOOD = []
const initialState = {
	foods : FOOD
};

const store = createCommets(initialState);

export default store;