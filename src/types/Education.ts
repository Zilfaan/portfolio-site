type Subject = {
  name: string;
  grade: string;
};

export type Education = {
  slug: string;
  place: string;
  period: string;
  qualification: string;
  result: string;
  subjects: Subject[];
  description: string;
};
