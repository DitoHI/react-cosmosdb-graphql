/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_education {
  __typename: "Education";
  dateStart: any | null;
  dateEnd: any | null;
  location: string | null;
  name: string | null;
  degree: string | null;
  major: string | null;
  description: string | null;
}

export interface Me_me_experience {
  __typename: "Experience";
  name: string | null;
  role: string | null;
  description: string | null;
  dateStart: any | null;
  dateEnd: any | null;
}

export interface Me_me_project {
  __typename: "Project";
  name: string | null;
  role: string | null;
  techStacks: (string | null)[] | null;
  description: string | null;
  link: any | null;
}

export interface Me_me {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  occupation: string | null;
  phone: string | null;
  address: string | null;
  website: any | null;
  dateBirth: any | null;
  skill: (string | null)[] | null;
  education: (Me_me_education | null)[] | null;
  experience: (Me_me_experience | null)[] | null;
  project: (Me_me_project | null)[] | null;
}

export interface Me {
  me: Me_me | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserPage
// ====================================================

export interface UserPage_education {
  __typename: "Education";
  dateStart: any | null;
  dateEnd: any | null;
  location: string | null;
  name: string | null;
  degree: string | null;
  major: string | null;
  description: string | null;
}

export interface UserPage_experience {
  __typename: "Experience";
  name: string | null;
  role: string | null;
  description: string | null;
  dateStart: any | null;
  dateEnd: any | null;
}

export interface UserPage_project {
  __typename: "Project";
  name: string | null;
  role: string | null;
  techStacks: (string | null)[] | null;
  description: string | null;
  link: any | null;
}

export interface UserPage {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  occupation: string | null;
  phone: string | null;
  address: string | null;
  website: any | null;
  dateBirth: any | null;
  skill: (string | null)[] | null;
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

//==============================================================
// END Enums and Input Objects
//==============================================================
