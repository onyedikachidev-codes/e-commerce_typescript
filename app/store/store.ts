interface initialStateProps {
  balance: number;
  loan: number;
  loanPurpose: string;
}

const initialState: initialStateProps = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

interface ActionProps {
  type: string;
  payload: number;
}

function reducer(state = initialState, action: ActionProps) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
  }
}
