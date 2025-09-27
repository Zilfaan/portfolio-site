import { Education } from "@/types/Education";

export const educationData: Education[] = [
  {
    slug: "school",
    place: "S. Thomas' Preparatory School",
    period: "2012 - 2023",
    qualification: "Edexcel IGCSE",
    result: "4A 2B",
    subjects: [
      { name: "Mathematics A", grade: "7" },
      { name: "Information and Communication Technology", grade: "7" },
      { name: "Physics", grade: "6" },
      { name: "Business", grade: "6" },
      { name: "English Language B", grade: "9" },
      { name: "Computer Science", grade: "7" },
    ],
    description:
      "At school, I built a strong academic and disciplinary foundation while developing key personal skills. However, in order to stay on track despite COVID related delays in the local curriculum, I completed Edexcel IGCSEs privately, which allowed me to be able to progress more efficiently toward my goals.",
  },
  {
    slug: "foundation",
    place: "Informatics Institute of Technology",
    period: "2023 - 2024",
    qualification: "Foundation Program",
    result: "Distinction",
    subjects: [
      { name: "Academic Skills for Higher Education", grade: "73" },
      { name: "Mathematics for Computing", grade: "76" },
      { name: "Digital Skills for Higher Education", grade: "75" },
      { name: "Introduction to Programming", grade: "75" },
      { name: "Digital Circuits and Logic Design", grade: "79" },
      { name: "Working with Data", grade: "81" },
      { name: "Designing Innovative Solutions", grade: "74" },
      { name: "Computer Programming", grade: "82" },
    ],
    description:
      "The foundation program at IIT provided essential preparation for students straight after IGCSEs or Local Ordinary Levels. It covered both technical and academic skills, and completing all modules with strong marks and obtaining a Distinction further reinforced my readiness and passion for further studies.",
  },
  {
    slug: "degree",
    place: "University of Westminster",
    period: "2024 - Now",
    qualification: "BSc Computer Science",
    result: "In Progress",
    subjects: [
      { name: "Computer Systems Fundamentals", grade: "86" },
      { name: "Software Development 1 (Python)", grade: "81" },
      { name: "Mathematics for Computing", grade: "86" },
      { name: "Trends in Computer Science", grade: "61" },
      { name: "Web Design and Development", grade: "86" },
      { name: "Software Development 2 (Java)", grade: "93" },
      { name: "English Communication Skills", grade: "82" },
    ],
    description:
      "I am currently pursuing a BSc in Computer Science at the University of Westminster and I have successfully completed my first year. The program offers a mix of theoretical knowledge and practical skills, allowing me to strengthen my programming expertise while improving my knowledge overall.",
  },
];
