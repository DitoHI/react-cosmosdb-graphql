import IBlog from '../../custom/interface/IBlog';
import typesMod from './typesMod';
import IMe from '../../custom/interface/IMe';

import FirebaseConnect from '../../utils/FirebaseConnect';

export default {
  initFirebase: () => {
    return {
      type: typesMod.INIT_FIREBASE,
      payload: FirebaseConnect.init(),
    };
  },
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
  incrementView: (user: IMe, blog: IBlog) => {
    const blogRef = FirebaseConnect.getDb().ref(typesMod.REF_BLOGS_VIEW(user.id, blog.id));
    blogRef.once('value').then((snap) => {
      if (!snap.val() && snap.val() !== 0) {
        blogRef.set(0);
      } else {
        const newViews = snap.val() + 1;
        blogRef.set(newViews);
      }
    });
    return {
      type: typesMod.INCREMENT_VIEW,
    };
  },
};
