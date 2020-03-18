export const addFeatures = (payload) => {
    return { type: 'ADD_FEATURE', payload: payload }
}

export const deleteFeatures = (payload) => {
    return { type: 'REMOVE_FEATURE', payload: payload }
}