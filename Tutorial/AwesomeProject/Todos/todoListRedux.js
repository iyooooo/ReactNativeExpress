
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
}

export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, playload: item}
    },
    remove: (index) => {
        return {type: types.REMOVE, playload: index}
    },
}

const initialState = {
    todos: ['Check email', 'Take a shower', 'Brush teeth', 'Eat breakfast']
}

export const reducer = (state = initialState, action) => {
    const {todos} = state
    const {type, playload} = action

    switch(type) {
        case types.ADD: {
            return {
                ...state,
                todos: [playload, ...todos],
            }
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo,i) => i!== playload),
            }
        }
    }

    return state
}
