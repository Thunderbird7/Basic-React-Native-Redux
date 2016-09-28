import { ActionConst } from 'react-native-router-flux'

const initialState = {
  scene: {}
}

// Reducer
export default function navReducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene
      }
    default:
      return state
  }
}

// Selector of navigation
export const getNav = (state) => ({
  scene: state.scene
})
