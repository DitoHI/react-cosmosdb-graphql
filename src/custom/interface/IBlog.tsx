interface IBlog {
  id: string;
  user: string;
  title: string;
  content: string;
  lastEdited: Date;
  isDeleted: boolean;
  positionIndex: number;
  tags: string[];
  blobUri: string;
}

export default IBlog;
