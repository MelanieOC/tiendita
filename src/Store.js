import createStore from 'redux-zero';

let allDish = [
    {
        name: "Sashimi Salad",
        price: 12,
        img: "http://demos.telerik.com/kendo-ui/content/spa/websushi/images/200/sashimi-salad.jpg"
    }
]

const initialState = {
    allDish : allDish
}

const store = createStore(initialState);

export default store; 