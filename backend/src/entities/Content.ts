// Content Entity

import { ContentType } from './ContentType';
type Content = {
  id: number;
  type: ContentType;
  title: string;
  body: string; // Rich text or JSON for complex data
  isFree: boolean;
  createdAt: Date;
  updatedAt: Date;
};
