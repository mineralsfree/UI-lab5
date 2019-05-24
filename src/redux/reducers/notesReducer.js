const initialState = {
  data: {},
  loading: false,
  error: false
};
export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'NOTES/FETCH_NOTES':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'NOTES/FETCH_SUCCEEDED':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data
      };
    case 'NOTES/FETCH_FAILED':
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state
  }
}