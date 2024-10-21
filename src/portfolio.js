/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shreyansh Jain",
  description:
    "I am an engineering student due to graduate in 2027. I am a Machine Learning enthusiast who aims to create something meaningful and is always ready to push boundaries. Alongside my technical interests, I write to share knowledge in a simple and easy-to-understand way.",
  og: {
    title: "Shreyansh Jain's Portfolio",
    type: "website",
   url:"https://ShreyanshJain.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Shreyansh Jain",
  logo_name: "Shreyansh Jain",
  nickname: "",
  subTitle:
    "I am an engineering student due to graduate in 2027. I am a Machine Learning enthusiast who aims to create something meaningful and is always ready to push boundaries. Alongside my technical interests, I write to share knowledge in a simple and easy-to-understand way.",
  
  resumeLink: 
    "https://drive.google.com/file/d/1dY2FdeAwbnqfFmEj7MLWKB3-yCCKqTk0/view?usp=drive_link",
  portfolio_repository: "https://github.com/shreyanshjain05",
  githubProfile: "https://github.com/shreyanshjain05",
};

const socialMediaLinks = [


  {
    name: "Github",
    link: "https://github.com/shreyanshjain05",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shreyanshjain05",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:shreyansh_jain2005@yahoo.com",
    fontAwesomeIcon: "fa-brands fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/shreyanshsjains",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Medium",
    link: "https://medium.com/@shreyanshjain05",
    fontAwesomeIcon: "fa-brands fa-medium", // Reference https://fontawesome.com/icons/medium?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science, AI/ML & Writing",
      fileName: "DataScienceImg",
      skills: [
        "⚡I’ve completed extensive coursework in machine learning and persuing deep learning from DeepLearning.AI , covering topics like neural networks, hyperparameter tuning, and advanced algorithms.",
        "⚡I’m proficient in Python for implementing machine learning models and have a solid foundation in mathematics, enabling me to apply theoretical concepts practically.",
        "⚡My hands-on experience includes working with convolutional networks, neural networks, and various ML algorithms. I am well-equipped with problem-solving skills, a strong mathematical foundation, and programming expertise in Python and its ML libraries.",
        "⚡I also write articles where I simplify algorithms and complex topics that I learn.",

      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
    

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    

      ],
    }

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "mozilla_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2023 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, , AI etc.",
        "⚡ I have done courses on Machine Learning, Data Science,AI and Data analytics and currently persuing a course in Deep Learning.",
        "⚡ Apart from this, I am also a University's Merit-Based Scholership Holder.",

      
      ],
      website_link: "https://srmrmp.edu.in/",
    },

    {
      title: "Silver Bells School, Gwalior",
      subtitle: "Silver Bells School, Gwalior",
      logo_path: "images.png",
      alt_name: "Indiana University Bloomington",
      duration: "2020 - 2022",
      descriptions: [
        "Class XII: 85%, with Physics, Chemistry and Mathematics."
      ],
      website_link: "https://www.silverbellsschoolgwl.com",
    },
    {
      title: "Delhi Public School, Gwalior",
      subtitle: "Delhi Public School, Gwalior",
      logo_path: "dps.png",
      alt_name: "Indiana University Bloomington",
      duration: "2009 - 2020",
      descriptions: [
        "Class X: 84%"
      ],
      website_link: "https://www.dpsgwalior.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "-Machine Learning",
      logo_path: "dl.png",
      certificate_link:
        "https://coursera.org/share/aec626ddd4a95baf148c78c2a9e48afc",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Analysis with Python",
      subtitle: "-IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/682dc8a9fe99408f8a49c96ad8c381ae",
      alt_name: "IBM",
      color_code: "#FFFFFF",
    },
    {
      title: "Data Visualisation",
      subtitle: "- Computer Society of India",
      logo_path: "csi.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1NTMEuRWlfkuVDongw-ijB6JcfMdz8Jd7/view?usp=share_link",
      alt_name: "CSI",
      color_code: "#FFFFFF",
    },
    {
      title: "TCS ION Carrier Edge-Young Professional",
      subtitle: "- TCS ION",
      logo_path: "tcs.png",
      certificate_link:
        "https://drive.google.com/file/d/1l6i_Rxk7Qb03T0hmKoeYWSwoTS5QXQf-/view?usp=share_link",
      alt_name: "TCS",
      color_code: "#FFFFFF",
    },
    {
      title: "Python Basics",
      subtitle: "- HackerRank",
      logo_path: "HR.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/iframe/f5809cf1cf13",
    alt_name: "HR",
      color_code: "#FFFFFF",
    }, 
  ],
};

// Experience Page
const experience = {
  // title: "Experience",
  subtitle: "Internship, Projects and position of responsibility",
  description:
    "I have made more than 10 projects on machine learning, AI , deep learning which can be found on my github account. Apart from this I am also core member and strategic planner of SlugNPlug, which is a technical student community of my college .",
  header_image_path: "experience.svg",
  sections: [
    // {
      // title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "CodSoft",
    //       company_url: "https://drive.google.com/file/d/1lJhq0EH3KAIDt7FvXhPAH85HSp4T7kFO/view",
    //       logo_path: "codsoft.png",
    //       duration: "Aug 2024 - Sep 2024",
    //       location: "Chennai, India",
    //       description:
    //         "Phase01: The objective of this project create a machine learning model that can predict the genre of a movie based on its plot summary or other textual information.",
    //       color: "#ee3c26",
    //     }, 
      
    //        {
    //       title: "Data Science Intern",
    //       company: "Coder's Cave",
    //       company_url: "https://www.linkedin.com/posts/kshitij-chaudhary-91374b2b3_coderscave-thank-you-activity-7228309716907474944-mlvw?utm_source=share&utm_medium=member_desktop",
    //       logo_path: "coderscave.png",
    //       duration: "July 2023 - Aug 2023",
    //       location: "Chennai, India",
    //       description:
    //         "Phase01: performed exploratory data analysis on of global terrorism dataset and breast cancer classification using regression techniques.Phase02: Used random forest classification for email spam classification model and neural networks for speech emotion recognition model.",
    //       color: "#ee3c26",
    //     },
      
    //   ],
    // },
    {
      title: "Position of Responsibility",
      experiences: [
        {
          title: "Technical Team Lead",
          company: "SlugNPlug",
          company_url: "https://www.linkedin.com/company/slug-n-plug/mycompany",
          logo_path: "SNP.jpg",
          duration: "October 2024 - Present",
          location: "Chennai,India",
          description:
            "SlugNPlug is a technical club of SRMIST responsible for conducting events, workshops and competitions around new trends in tech, I was responsible for leading it's technical team",
          color: "#4285F4",
        },

        {
          title: "Technical Team Member",
          company: "SlugNPlug",
          company_url: "https://www.linkedin.com/company/slug-n-plug/mycompany",
          logo_path: "SNP.jpg",
          duration: "March 2024 - Present",
          location: "Chennai,India",
          description:
            "SlugNPlug is a technical club of SRMIST responsible for conducting events, workshops and competitions around new trends in tech, I am responsible for working with it's technical team apart fromt this i am also responsible to make strategic plans to ensure dynamic growth of the club",
          color: "#4285F4",
        },

        {
          title: "Member",
          company: "NSS-SRM",
          company_url: "https://www.srmist.edu.in/nss/",
          logo_path: "mozilla_logo.png",
          duration: "October'23 - Present",
          location: "Chennai,India",
          description:
            "A non technical club where social events like blood donation camps , free dental camps , rally on various social issues etc are organised."
        },
        {
          title: "Member",
          company: "Synergy",
          company_url: "https://www.instagram.com/synergyclub_rmp/",
          logo_path: "synergy.png",
          duration: "October 2023 - March 2024",
          location: "Chennai,India",
          description:
            "Web Development and Public Relationship Memeber"
        },
        
      ],
    },
    {
      title: "Projects",
      work: true,
      experiences: [
        {
          title: "Basic ML Projects",
          company: "project link",
          description: "These are around 10 ML projects which shows the implementation of different ML algorithms",
          company_url: "https://github.com/shreyanshjain05/Machine_Learning_Projects",
          logo_path: "sales.jpeg",
        
        },
        {
          title: "Basic DeepLearning Projects",
          company: "project link",
          description: "Apart from learning the different concepts of deep learning I also focus on implementing them",
          company_url: "https://github.com/shreyanshjain05/DeepLearning",
          logo_path: "stock.jpeg",
        
        },
        {
          title: "Basic Python Projects",
          company: "project link",
          description: "Few python projects which helped me to get a good command on the differnt concepts of the langauge",
          company_url: "https://github.com/shreyanshjain05/Basic-Python-Project",
          logo_path: "Python-logo-notext.svg.png",
        
        },
        // {
        //   title: "S.A.I.L (Student Assistance and Information Liaison)",
        //   company: "project link",
        //   description: " Made a AI powered chatbot for college‘s student portal using NLP and neural networks, deployed the app using streamlit. • Currently working on improving the app by using huggingface api‘s BERT model and deployment using django or flask.",
        //   company_url: "https://github.com/samvardhan03/sail/",
        //   logo_path: "chatbot.jpg",
        
        // },
        // {
        //   title: "EMOTION PREDICTION USING EEG ANALYSIS",
        //   company: "project link",
        //   description: " Researched AI applications for emotional forecasting from EEG scans using fourier transforms, developed an prototype ML model with neural networks with 93.7% accuracy; submitted research paper for publication in a renowned scientific journal",
        //   company_url: "https://github.com/samvardhan03/EEG_Emotion_prediction",
        //   logo_path: "eeg.jpg",
        
        // },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research Work",
  description: "Some of my research work.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mdp-diffusion",
      name: "Neurobehavioral Analysis Using EEG Readings and Graph Neural Networks",
      createdAt: "",
      description: "Explored AI for predicting emotional fluctuations from EEG scans, built a prototype ML model using neural networks, and submitted the paper for publication. Currently researching about how to use graph neural networks for efficient EEG analysis.",
      
    },
    {
      id: "consistency-models",
      name: "ITDECC-2023",
      createdAt: "",
      description: "Wrote and Presented paper on machine learning and data science in an international conference on Innovations and Technological development in electronics, computers and communication.",
    
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "1717187496437.png",
    description:
      "I am actively looking for an opportunity to work in the field of engineering and technology, if you wish to work together on a project, feel free to reach out!",
  },
  blogSection: {
    title: "Articles",
    subtitle:
      "I like to talk about the mathematical aspects on neural networks and other deep learning models.",
    link: "https://medium.com/@shreyanshjain05",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
