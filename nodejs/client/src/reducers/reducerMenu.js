let initialstate = {
    stateMenu: false
}

const reducerMenu = (state = initialstate, action) => {
    switch (action.type) {
        case "STATE-MENU":
            return { stateMenu: !state.stateMenu };
        default:
            return state;
    }
};

export default reducerMenu;
