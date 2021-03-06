export const IS_SM = window.innerWidth >= 768;
export const IS_LG = window.innerWidth >= 960;

export default {
  DEFAULT_BLOG_CONTAINER_SIZE: {
    height: IS_SM ? (IS_LG ? '500px' : '360px') : '265px',
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
    height: IS_LG ? 120 : 65,
    width: IS_LG ? 120 : 65,
  },

  DEFAULT_WIDTH_TITLE_ONE: 360,

  DEFAULT_HEIGHT_IMG: {
    lg: 300,
    sm: 120,
  },

  DEFAULT_TOP_LG: 120,

  ICON_SIZE_XS: 12,

  COLOR_TOP_STORIES: ['orange', 'midnight', 'eggplant', 'green', 'pine'],
};
