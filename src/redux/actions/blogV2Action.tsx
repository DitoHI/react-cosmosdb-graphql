import typesMod from './typesMod';

export default {
  upPagination: () => {
    return {
      type: typesMod.UP_PAGINATION,
    };
  },
  restorePagination: () => {
    return {
      type: typesMod.RESTORE_PAGINATION,
    };
  },
};
