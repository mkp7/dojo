import { Reducer, Dispatch } from "react"
interface Actions {
  type: string
  payload: any
}

export interface State {
  route: {
    path?: {
      isExact: boolean
      params: {
        [key: string]: string
      }
      path: string
      url: string
    }
    prev?: {
      isExact: boolean
      params: {
        [key: string]: string
      }
      path: string
      url: string
    }
  }
  slide: {
    isSelected: boolean
    selectedIndex: number
  }
  showNavBar: boolean
}

export interface InitContextProps {
  state: State
  dispatch: Dispatch<Actions>
}

export const reducer: Reducer<State, Actions> = (state, action) => {
  switch (action.type) {
    case "NAVIGATE":
      return {
        ...state,
        route: {
          ...state.route,
          path: action.payload,
          prev: state.route.path,
        },
      }
    case "SET CARD STATE":
      const { isSelected, selectedIndex } = action.payload
      return {
        ...state,
        slide: {
          ...state.slide,
          isSelected,
          selectedIndex,
        },
      }
    case "TOGGLE NAVBAR":
      return {
        ...state,
        showNavBar: action.payload,
      }

    default:
      return state
  }
}
