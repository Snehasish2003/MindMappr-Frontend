import axios from "axios";
import {  EllipsisVertical, Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";


const Today = () => {
  
    // const tasks = [
    //     {
    //         name: "Springboot",
    //         description:
    //             "Spring Boot is a Java-based framework used to create standalone, production-ready Spring applications quickly and with minimal configuration.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-10",
    //         dueDate: "2025-06-20",
    //         status: "in-progress",
    //     },
    //     {
    //         name: "React",
    //         description:
    //             "React is a JavaScript library for building user interfaces using a component-based architecture and virtual DOM.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-11",
    //         dueDate: "2025-06-21",
    //         status: "Completed",
    //     },
    //     {
    //         name: "Node.js",
    //         description:
    //             "Node.js is a runtime environment that allows you to run JavaScript on the server-side, built on Chrome's V8 engine.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-12",
    //         dueDate: "2025-06-22",
    //         status: "Pending",
    //     },
    //     {
    //         name: "MongoDB",
    //         description:
    //             "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for modern applications.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-13",
    //         dueDate: "2025-06-23",
    //     },
    //     {
    //         name: "Git",
    //         description:
    //             "Git is a distributed version control system used to track changes in source code and collaborate with other developers.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-14",
    //         dueDate: "2025-06-24",
    //     },
    //     {
    //         name: "Docker",
    //         description:
    //             "Docker is a platform for developing, shipping, and running applications in containers, ensuring consistency across environments.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-15",
    //         dueDate: "2025-06-25",
    //     },
    //     {
    //         name: "MySQL",
    //         description:
    //             "MySQL is an open-source relational database management system based on SQL, used for structured data storage and retrieval.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-16",
    //         dueDate: "2025-06-26",
    //     },
    //     {
    //         name: "Redux",
    //         description:
    //             "Redux is a predictable state container for JavaScript apps, commonly used with React to manage application state.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-17",
    //         dueDate: "2025-06-27",
    //     },
    //     {
    //         name: "Firebase",
    //         description:
    //             "Firebase is a platform by Google that provides tools like authentication, real-time database, and hosting for web and mobile apps.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-18",
    //         dueDate: "2025-06-28",
    //     },
    //     {
    //         name: "TypeScript",
    //         description:
    //             "TypeScript is a statically typed superset of JavaScript that adds type safety and modern tooling for large-scale apps.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-19",
    //         dueDate: "2025-06-29",
    //     },
    //     {
    //         name: "Postman",
    //         description:
    //             "Postman is a collaboration platform for API development, allowing testing, monitoring, and documentation of RESTful services.",
    //         createdAt: new Date(),
    //         startDate: "2025-06-20",
    //         dueDate: "2025-06-30",
    //     }
    // ];
    const [tasks,setTask] = useState([]);
    const token = localStorage.getItem("taskToken")

    useEffect(() => {
        
        const getTasks = async()=>{
            const response = await axios.get("http://localhost:8084/task/get/all",{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            }

            )
            setTask(response.data.data);
           
        }
        getTasks();
        
    }, []);
    return (
        <section className="relative min-h-screen px-4 z-30 top-5">
            <div className="max-w-4xl container py-10 text-left flex flex-col items-start  space-y-6">
                <h1 className="text-2xl md:text-4xl ">Today</h1>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold">My Tasks</h3>
                    {tasks.map((task, index) => (
                        <div className="space-y-1 p-3  z-60 rounded-lg bg-white shadow" key={index}>
                            <div className="flex justify-between">
                            <h3 className="text-lg font-bold">{task.name}</h3>
                                <span className="flex space-x-2">
                                    <Pencil size={19} className="cursor-pointer" />
                                    <Trash size={20} className="cursor-pointer"/>
                                    <EllipsisVertical size={20} className="cursor-pointer"/>
                                </span>
                            </div>
                            <h4 className="text-sm text-gray-700 ">{task.description}</h4>
                            <div className="text-sm text-gray-500">
                                <label htmlFor={`createdAt-${index}`} className="mr-2 font-medium">Created at:</label>
                                <span id={`createdAt-${index}`}>
                                    {new Date(task.createdAt).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="text-sm text-gray-500">
                                <label htmlFor={`createdAt-${index}`} className="mr-2 font-medium">Start at:</label>
                                <span id={`createdAt-${index}`}>
                                    {new Date(task.startDate).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="text-sm text-gray-500">
                                <label htmlFor={`createdAt-${index}`} className="mr-2 font-medium">Due at:</label>
                                <span id={`createdAt-${index}`}>
                                    {new Date(task.dueDate).toLocaleDateString("en-IN", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="text-sm text-gray-500">
                                <label htmlFor={`status-${index}`} className="mr-2 font-medium">status:</label>
                                {   task.status == "in-progress" &&
                                    <span id={`status-${index}`} className="text-yellow-500" >
                                        {task.status}
                                    </span>
                                }
                                {   task.status == "Pending" &&
                                    <span id={`status-${index}`} className="text-gray-500" >
                                        {task.status}
                                    </span>
                                }
                                {   task.status == "Completed" &&
                                    <span id={`status-${index}`} className="text-green-500" >
                                        {task.status}
                                    </span>
                                }
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

export default Today;