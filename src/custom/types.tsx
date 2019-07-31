export const IS_SM = window.innerWidth >= 768;

export default {
  DEFAULT_BLOG_CONTAINER_SIZE: {
    height: IS_SM ? '500px' : '265px',
    width: '350px',
  },

  DEFAULT_BLOG_PLACEHOLDER_SIZE: {
    height: IS_SM ? '280px' : '120px',
    width: IS_SM ? '350px' : '100%',
  },

  DEFAULT_BLOG_PREVIEW_CONTENT_BANNER: {
    height: IS_SM ? 260 : 160,
    width: IS_SM ? 260 : '100%',
  },

  DEFAULT_BLOG_PREVIEW_USER_AVA: {
    height: IS_SM ? 120 : 65,
    width: IS_SM ? 120 : 65,
  },

  DEFAULT_WIDTH_TITLE_ONE: 360,

  DEFAULT_HEIGHT_IMG: {
    lg: 300,
  },

  DEFAULT_TOP_LG: 120,

  COLOR_TOP_STORIES: ['orange', 'midnight', 'eggplant', 'green', 'pine'],
};
