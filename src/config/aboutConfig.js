class AboutConfig {
  headerText = "Passion Fuels Purpose!";
  informationText = [
    "Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.",
    "I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
    "Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.",
  ];
  achivements = [
    { parameter: 50, info: "satisfied clients" },
    { parameter: 40, info: "projects completed" },
    { parameter: 2, info: "years of experience" },
  ];
  skills = [
    { name: "CSS", x: "-5vw", y: "-10vw" },
    { name: "SASS", x: "5vw", y: "10vw" },
    { name: "JavaScript", x: "20vw", y: "16vw" },
    { name: "React", x: "-10vw", y: "2vw" },
    { name: "NextJS", x: "-15vw", y: "15vw" },
    { name: "Ruby on Rails", x: "10vw", y: "-3vw" },
    { name: "Figma", x: "15vw", y: "-15vw" },
    { name: "Tailwind CSS", x: "-20vw", y: "-15vw" },
    { name: "HTML", x: "-16vw", y: "-3vw" },
  ];
  experience = [
    {
      position: "Software Engineer",
      company: "Google",
      companyLink: "/",
      time: "2022-Present",
      address: "Mountain View, CA",
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
    },
    {
      position: "Intern",
      company: "Facebook",
      companyLink: "/",
      time: "Summer 2021 ",
      address: "Menlo Park, CA",
      work: "Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.",
    },
    {
      position: "Software Developer",
      company: "Amazon",
      companyLink: "/",
      time: "2020-2021",
      address: "Seattle, WA.",
      work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
    },
    {
      position: "Software Developer Intern",
      company: "Microsoft",
      companyLink: "/",
      time: "Summer 2019 ",
      address: "Redmond, WA",
      work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
    },
    {
      position: "Teaching Assistant",
      company: "MIT",
      companyLink: "/",
      time: "Fall 2018 ",
      address: "Massachusetts Ave, Cambridge, MA",
      work: "Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.",
    },
  ];
  educations = [
    {
      type: "Bachelor Of Science In Computer Science",
      time: "2016-2020",
      place: "Massachusetts Institute Of Technology (MIT)",
      info: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
    },
    {
      type: "Master Of Computer Science",
      time: "2020-2022",
      place: "Stanford University",
      info: "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
    },
    {
      type: "Online Coursework",
      time: "2016-2020",
      place: "Coursera And EdX",
      info: "Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.",
    },
  ];
}

export const aboutConfig = new AboutConfig();
