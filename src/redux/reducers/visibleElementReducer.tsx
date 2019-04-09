import { SHOW_ALERT_HOME, SHOW_ALERT_OPTIONAL } from '../actions/types';

const initialState = {
  isAlertSourceVodeVisible: true,
  isAlertOptional: false,
  alertOptionalTitle: '',
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case SHOW_ALERT_HOME:
      return {
        ...state,
        isAlertSourceVodeVisible: action.payload,
      };
    case SHOW_ALERT_OPTIONAL:
      return {
        ...state,
        isAlertOptional: action.payload.isVisible,
        alertOptionalTitle: action.payload.title,
      };
    default:
      return state;
  }
}
