import keyActions from './listKeyActions.js';


export default (userKeyActions) => {
  if (userKeyActions)
    Object.assign(keyActions, userKeyActions);

  return {
    blur({ list }) {
      list.hide();
    },
  
    click({ list }) {
      list.toggle();
    },
  
    keydown({ list, event }) {
      const code = event.code;
      if (code in keyActions)
        return keyActions[code]({ list, event });
    }
  };
}

