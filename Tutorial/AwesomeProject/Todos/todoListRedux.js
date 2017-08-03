
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    TOGGLE_ITEM_COMPLETED: 'TOGGLE_ITEM_COMPLETED',
    REMOVE_COMPLETED: 'REMOVE_COMPLETED',
}

export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, playload: item}
    },
    remove: (index) => {
        return {type: types.REMOVE, playload: index}
    },
    toggleItemComplete: (index) => {
        return {type: types.TOGGLE_ITEM_COMPLETED, playload: index}
    },
    removeCompleted: () => {
        return {type: types.REMOVE_COMPLETED}
    },
}

const initialState = {
    todos: []
}

export const reducer = (state = initialState, action) => {
    const {todos} = state
    const {type, playload} = action

    switch(type) {
        case types.ADD: {
            return {
                ...state,
                todos: [{label: playload, completed: false}, ...todos],
            }
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo,i) => i!== playload),
            }
        }
        case types.TOGGLE_ITEM_COMPLETED: {
            return {
                ...state,
                todos: todos.map((item, i) => {
                    if (i === playload) {
                        return {label: item.label, completed: !item.completed}
                    }
                    return item
                })
            }
        }
        case types.REMOVE_COMPLETED: {
            return {
                ...state,
                todos: todos.filter((item,i) => !item.completed)
            }
        }

    }

    return state
}
