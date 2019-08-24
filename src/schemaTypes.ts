/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Blogs
// ====================================================

export interface Blogs_blogs {
  __typename: 'Blog';
  id: string;
  user: string;
  title: string | null;
  titleDash: string | null;
  titlePreview: string | null;
  content: string | null;
  contentPreview: string | null;
  lastEdited: any | null;
  isDeleted: boolean | null;
  blobUri: string | null;
  blobName: string | null;
  positionIndex: number | null;
  tags: (string | null)[] | null;
  quote: string | null;
}

export interface Blogs {
  blogs: (Blogs_blogs | null)[] | null;
}

export interface BlogsVariables {
  id?: string | null;
  startAt?: number | null;
  endAt?: number | null;
  tags?: (string | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_education {
  __typename: 'Education';
  dateStart: any | null;
  dateEnd: any | null;
  location: string | null;
  name: string | null;
  degree: string | null;
  major: string | null;
  description: string | null;
  blobUri: string | null;
}

export interface Me_me_experience {
  __typename: 'Experience';
  name: string | null;
  role: string | null;
  description: string | null;
  dateStart: any | null;
  dateEnd: any | null;
  blobUri: string | null;
}

export interface Me_me_project {
  __typename: 'Project';
  name: string | null;
  role: string | null;
  techStacks: (string | null)[] | null;
  description: string | null;
  link: any | null;
  blobUri: string | null;
}

export interface Me_me {
  __typename: 'User';
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  occupation: string | null;
  phone: string | null;
  address: string | null;
  website: any | null;
  dateBirth: any | null;
  skill: (string | null)[] | null;
  blobUri: string | null;
  education: (Me_me_education | null)[] | null;
  experience: (Me_me_experience | null)[] | null;
  project: (Me_me_project | null)[] | null;
}

export interface Me {
  me: Me_me | null;
}

export interface MeVariables {
  sort?: Sort | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBlogById
// ====================================================

export interface getBlogById_getBlogById {
  __typename: 'Blog';
  id: string;
  title: string | null;
  content: string | null;
  lastEdited: any | null;
  blobUri: string | null;
  blobName: string | null;
  tags: (string | null)[] | null;
  positionIndex: number | null;
  user: string;
  quote: string | null;
}

export interface getBlogById {
  getBlogById: getBlogById_getBlogById | null;
}

export interface getBlogByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBlogByPosition
// ====================================================

export interface getBlogByPosition_getBlogByPositionIndex {
  __typename: 'Blog';
  id: string;
  positionIndex: number | null;
  title: string | null;
}

export interface getBlogByPosition {
  getBlogByPositionIndex: getBlogByPosition_getBlogByPositionIndex | null;
}

export interface getBlogByPositionVariables {
  index: number;
  operator: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBlogByTitleDash
// ====================================================

export interface getBlogByTitleDash_getBlogByTitleDash {
  __typename: 'Blog';
  id: string;
  title: string | null;
  content: string | null;
  lastEdited: any | null;
  blobUri: string | null;
  blobName: string | null;
  tags: (string | null)[] | null;
  positionIndex: number | null;
  user: string;
  quote: string | null;
}

export interface getBlogByTitleDash {
  getBlogByTitleDash: getBlogByTitleDash_getBlogByTitleDash | null;
}

export interface getBlogByTitleDashVariables {
  titleDash: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BlogPage
// ====================================================

export interface BlogPage {
  __typename: 'Blog';
  id: string;
  user: string;
  title: string | null;
  titleDash: string | null;
  titlePreview: string | null;
  content: string | null;
  contentPreview: string | null;
  lastEdited: any | null;
  isDeleted: boolean | null;
  blobUri: string | null;
  blobName: string | null;
  positionIndex: number | null;
  tags: (string | null)[] | null;
  quote: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserPage
// ====================================================

export interface UserPage_education {
  __typename: 'Education';
  dateStart: any | null;
  dateEnd: any | null;
  location: string | null;
  name: string | null;
  degree: string | null;
  major: string | null;
  description: string | null;
  blobUri: string | null;
}

export interface UserPage_experience {
  __typename: 'Experience';
  name: string | null;
  role: string | null;
  description: string | null;
  dateStart: any | null;
  dateEnd: any | null;
  blobUri: string | null;
}

export interface UserPage_project {
  __typename: 'Project';
  name: string | null;
  role: string | null;
  techStacks: (string | null)[] | null;
  description: string | null;
  link: any | null;
  blobUri: string | null;
}

export interface UserPage {
  __typename: 'User';
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  occupation: string | null;
  phone: string | null;
  address: string | null;
  website: any | null;
  dateBirth: any | null;
  skill: (string | null)[] | null;
  blobUri: string | null;
  education: (UserPage_education | null)[] | null;
  experience: (UserPage_experience | null)[] | null;
  project: (UserPage_project | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface Sort {
  by?: string | null;
  as?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
