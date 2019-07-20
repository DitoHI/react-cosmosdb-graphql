import { SHOW_ALERT_HOME, SHOW_ALERT_OPTIONAL } from './types';

export default {
  setVisibleAlertSourceCode: (isVisible: boolean) => (dispatch: any) => {
    dispatch({
      type: SHOW_ALERT_HOME,
      payload: isVisible,
    });
  },
  setNotReadyElement: (isVisible: boolean, title: string) => (dispatch: any) => {
    dispatch({
      type: SHOW_ALERT_OPTIONAL,
      payload: {
        isVisible,
        title,
      },
    });
  },
};
