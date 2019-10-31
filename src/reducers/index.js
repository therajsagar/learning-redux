const initialState = {
  ferrari: 0,
  lambo: 0,
  maserati: 0,
  porsche: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MASERATI':
      return { ...state, maserati: state.maserati + 1 }
    case 'FERRARI':
      return { ...state, ferrari: state.ferrari + 1 }
    case 'LAMBO':
      return { ...state, lambo: state.lambo + 1 }
    case 'PORSCHE':
      return { ...state, porsche: state.porsche + 1 }
    default:
      return state
  }
}