
import {auth} from "./firebase";

export function getSubtotal(basket) {
    let sum = 0;
    for(const item in basket) { sum += basket[item].price; }
    return sum;
}

export const initalState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex (
                (basketItem) => basketItem.id == action.id);
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Cant remove product (id" ${action.id}) as its not in basket!`
                )
            }

            return {...state,
            basket: newBasket};

        case 'SET_USER':

            return {
                ...state,
                user: action.user
            }
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }
        
        default:
            return state;
    }
}

export default reducer;