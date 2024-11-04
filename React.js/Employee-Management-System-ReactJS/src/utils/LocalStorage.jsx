// localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "ali@ali.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a modern design for the homepage.",
        date: "2024-10-01",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Meeting",
        description: "Meet with client to discuss project requirements.",
        date: "2024-10-03",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Bugs",
        description: "Resolve issues reported in the bug tracker.",
        date: "2024-09-29",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Hassan",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Update Landing Page",
        description: "Make changes to the landing page as per the new design.",
        date: "2024-10-04",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database Optimization",
        description: "Improve the performance of the database queries.",
        date: "2024-09-20",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Unit Testing",
        description: "Write unit tests for the new modules.",
        date: "2024-09-30",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Ahmed",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Create API Documentation",
        description: "Write detailed API documentation for the new service.",
        date: "2024-09-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Review Code",
        description: "Conduct code reviews for the team.",
        date: "2024-10-02",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Fatima",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Design Marketing Banner",
        description: "Create banners for the marketing campaign.",
        date: "2024-10-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Set Up CI/CD Pipeline",
        description: "Configure automated deployment pipeline.",
        date: "2024-09-25",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Write Blog Post",
        description: "Draft a blog post on the latest company product launch.",
        date: "2024-10-07",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare Presentation",
        description: "Prepare a presentation for the upcoming meeting.",
        date: "2024-09-28",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const Admin = [
  {
    id: 1,
    firstName: "Haseeb",
    email: "Admin@admin.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("Admin", JSON.stringify(Admin));
}

export const getLocalStorage = () => {  
    const employeesData = JSON.parse(localStorage.getItem("employees"));
    const AdminData = JSON.parse(localStorage.getItem("Admin"));
    // console.log(employeesData, AdminData);
    return { employeesData, AdminData };
}