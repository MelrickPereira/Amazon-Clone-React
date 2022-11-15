export const initialState = {
    basket: [],
};
export let Total = 0;
export const getBasketTotal = (basket) =>
{
    let sum = 0;
   for (let index = 0; index < basket.length; index++) {
    sum = sum + basket[index].price;
    // console.log(basket[index].price);
    Total = Math.round(sum*100)/100;
    
   }

}
const reducer = (state,action) =>
{
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
           return {
            ...state,
            basket: [...state.basket,action.item],
        };
        default:
            return state;

    }
};

export default reducer;