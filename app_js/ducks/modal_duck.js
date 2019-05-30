export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const showModal = (details) => ({
  type: SHOW_MODAL,
  details
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const modalReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case SHOW_MODAL:
      return Object.assign({}, oldState, { details: action.details });
    case CLOSE_MODAL:
    default:
      return {};
  }
};
