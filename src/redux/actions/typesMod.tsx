export default {
  UP_PAGINATION: 'UP_PAGINATION',
  RESTORE_PAGINATION: 'RESTORE_PAGINATION',
  INIT_FIREBASE: 'INIT_FIREBASE',
  INCREMENT_VIEW: 'INCREMENT_VIEW',

  REF_BLOGS_VIEW: (userId: string, blogId: string) => `blogs/${userId}/${blogId}/views`,
};
