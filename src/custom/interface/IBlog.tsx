interface IBlog {
  id: string;
  user: string;
  title: string;
  content: string;
  lastEdited: Date;
  isDeleted: boolean;
  imageUri: string;
  positionIndex: number;
  tags: string[];
  blobUri: string;
}

export default IBlog;
