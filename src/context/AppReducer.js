function AppReducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD":
      return {
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
}

export default AppReducer;
