export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            let newPrice
            console.log(newPrice)
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features.filter(item => item.id !== action.payload.id), action.payload],
                    price: state.car.features.reduce((accumulator, currentValue) => {
                        return accumulator += currentValue.price
                    }, state.car.price + action.payload.price)
                }
            }
        case 'REMOVE_FEATURE':
            let newPrice2
            const reducer2 = (accumulator, currentValue) => accumulator - currentValue.price
            return {
                ...state, car: {
                    ...state.car,
                    price: newPrice2 = state.car.features.reduce(reducer2, state.car.price),
                    features: state.car.features.filter(item => item !== action.payload)
                }
            }

        default: return state
    }
}
