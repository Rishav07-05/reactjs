// taking json data for employees and admin to set them up into localStorage

const employees = [
    {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design Homepage",
                "taskDescription": "Create a responsive homepage design.",
                "taskDate": "2024-09-01",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Bug #42",
                "taskDescription": "Resolve the login authentication bug.",
                "taskDate": "2024-09-02",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Documentation",
                "taskDescription": "Update API documentation.",
                "taskDate": "2024-09-03",
                "category": "Documentation",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project requirements with the client.",
                "taskDate": "2024-09-05",
                "category": "Meeting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from team members.",
                "taskDate": "2024-09-06",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team Training",
                "taskDescription": "Conduct training on new tools.",
                "taskDate": "2024-09-07",
                "category": "Training",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "michael.jones@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Database Optimization",
                "taskDescription": "Optimize database queries for performance.",
                "taskDate": "2024-09-08",
                "category": "Database",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Backend Testing",
                "taskDescription": "Write and run unit tests for backend APIs.",
                "taskDate": "2024-09-09",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "emily.davis@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "UI Improvements",
                "taskDescription": "Enhance UI components for better usability.",
                "taskDate": "2024-09-10",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "User Feedback Analysis",
                "taskDescription": "Analyze and address user feedback.",
                "taskDate": "2024-09-11",
                "category": "Analysis",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "email": "chris.wilson@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "DevOps Configuration",
                "taskDescription": "Update CI/CD pipeline configurations.",
                "taskDate": "2024-09-12",
                "category": "DevOps",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Monitor Server Logs",
                "taskDescription": "Monitor logs for anomalies.",
                "taskDate": "2024-09-13",
                "category": "Maintenance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "System Backup",
                "taskDescription": "Perform a full system backup.",
                "taskDate": "2024-09-14",
                "category": "Maintenance",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


// setting and getting data in local Storage


