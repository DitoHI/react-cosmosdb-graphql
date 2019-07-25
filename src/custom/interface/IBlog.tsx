interface IBlog {
  id: string;
  user: string;
  title: string;
  titlePreview: string;
  content: string;
  contentPreview: string;
  lastEdited: Date;
  isDeleted: boolean;
  positionIndex: number;
  tags: string[];
  blobUri: string;
  quote: string;
}

export default IBlog;
