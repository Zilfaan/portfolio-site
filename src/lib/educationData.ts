type Subject = {
  name: string;
  grade: string;
};

type Education = {
  slug: string;
  place: string;
  period: string;
  qualification: string;
  result: string;
  subjects: Subject[];
};

export const educationData: Education[] = [
  {
    slug: "school",
    place: "S. Thomas' Preparatory School",
    period: "2012 - 2023",
    qualification: "Edexcel IGCSE",
    result: "4A 2B",
    subjects: [
      {
        name: "Mathematics A",
        grade: "7",
      },
      {
        name: "Information and Communication technology",
        grade: "7",
      },
      {
        name: "Physics",
        grade: "6",
      },
      {
        name: "Business",
        grade: "6",
      },
      {
        name: "English Language B",
        grade: "9",
      },
      {
        name: "Computer Science",
        grade: "7",
      },
    ],
  },
  {
    slug: "foundation",
    place: "Informatics Institute of Technology",
    period: "2023 - 2024",
    qualification: "Foundation Program",
    result: "Distinction",
    subjects: [
      {
        name: "Academic Skills for Higher Education",
        grade: "73",
      },
      {
        name: "Mathematics for Computing",
        grade: "76",
      },
      {
        name: "Digital Skills for Higher Education",
        grade: "75",
      },
      {
        name: "Introduction to Programming",
        grade: "75",
      },
      {
        name: "Digital Circuits and Logic Design",
        grade: "79",
      },
      {
        name: "Working with Data",
        grade: "81",
      },
      {
        name: "Designing Innovative Solutions",
        grade: "74",
      },
      {
        name: "Computer Programming",
        grade: "82",
      },
    ],
  },
  {
    slug: "degree",
    place: "University of Westminster",
    period: "2024 - Now",
    qualification: "BSc Computer Science",
    result: "TBA",
    subjects: [
      {
        name: "Computer Systems Fundamentals",
        grade: "86",
      },
      {
        name: "Software Development 1 (Python)",
        grade: "81",
      },
      {
        name: "Mathematics for Computing",
        grade: "86",
      },
      {
        name: "Trends in Computer Science",
        grade: "61",
      },
      {
        name: "Web Design and Development",
        grade: "86",
      },
      {
        name: "Software Development 2 (Java)",
        grade: "93",
      },
      {
        name: "English Communication Skills",
        grade: "82",
      },
    ],
  },
];
