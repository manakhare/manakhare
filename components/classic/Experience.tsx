import { motion } from 'framer-motion'
import React from 'react'

const experience = [
    {
      company: 'Accenture',
      position: 'Full Stack Developer',
      location: 'Pune, India',
      endDate: 'Present',
      startDate: 'June 2022',
      duration: 'July 2022 - Present',
      description: [
        "Developed a responsive internal dashboard using React.js for the frontend, improving user interaction by 30% through enhanced UI/UX design",
        "Coded and optimized the frontend, ensuring a 25% faster load time and smoother navigation experience for team members",
        "Integrated backend APIs built with Express.js, facilitating seamless communication between frontend and backend",
        "Collaborated with cross-functional teams to gather requirements and deliver solutions that met business needs",
        "Participated in code reviews and provided constructive feedback to peers, fostering a culture of continuous improvement",
        "Utilized Git for version control, ensuring efficient collaboration and code management within the team",
        "Engaged in Agile methodologies, participating in daily stand-ups and sprint planning to ensure timely delivery of project milestones"
      ],
      image: '/images/accenture.png',
      alt: 'Accenture Logo',
      link: 'https://www.accenture.com/in-en',
    },
    {
      company: 'Carwale',
      position: 'Software Development Engineer - Intern',
      location: 'Remote',
      endDate: 'June 2023',
      startDate: 'Sep 2022',
      duration: 'Sep 2022 - June 2023',
      description: [
        "Developed a full-stack internal Quarterly Evaluation dashboard using ASP.NET, CSHTML, jQuery, and SQL in the MVC pattern, utilized by over 400+ employees across the company",
        "Implemented a RESTful API for the dashboard, enabling seamless data retrieval and manipulation, resulting in a 40% reduction in manual reporting time",
        "Designed and developed a user-friendly interface, enhancing user experience and reducing onboarding time for new users by 50%",
  "Designed high-level architectural flows and implemented low-level functionalities, improving system scalability and reducing technical debt by 25%" ,
        "Conducted unit testing and debugging, ensuring a 95% bug-free release and improving overall system reliability",
        "Participated in code reviews and provided constructive feedback to peers, fostering a culture of continuous improvement",
        "Utilized Git for version control, ensuring efficient collaboration and code management within the team",
        "Engaged in Agile methodologies, participating in daily stand-ups and sprint planning to ensure timely delivery of project milestones",
  "Contributed to an Agile (Scrum) environment, achieving on-time delivery of features in 80% of sprints, ensuring continuous iteration and improvement"
      ]
    }, 
    {
      company: 'Umpteen Innovations',
      position: 'Frontend Developer - Intern',
      location: 'Remote',
      endDate: 'May 2022',  
      startDate: 'Feb 2022',
      duration: 'Feb 2022 - May 2022',
      description: [
        "Developed a website to showcase the company's services and projects using React.js, HTML, CSS, and JavaScript, resulting in a 20% increase in client inquiries",
        "Implemented responsive design principles, ensuring optimal viewing experience across various devices and screen sizes",
        "Collaborated with the design team to create visually appealing and user-friendly interfaces, enhancing overall user experience",
        "Communicated with the client to understand their needs and requirements, ensuring the final product met their expectations",
      ]
    }
  ]

function Experience() {
  return (
    <div className='w-full px-10'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='w-full flex justify-center items-center py-10'>
            <div className='text-5xl uppercase text-amber-50 font-serif font-bold tracking-wider w-3/4 flex justify-center'>
                Experience
            </div>
        </motion.div>

        {experience.map((exp, index) => (
            <div key={index} className='w-full bg-amber-50 border-4 rounded-md border-amber-800 grid grid-cols-8 items-start my-5 py-6'>
                <div className='col-span-3 w-full h-full flex justify-center items-center py-10'>
                    <div className='text-4xl tracking-wider font-bold font-serif text-amber-900 uppercase text-center'>{exp.company}</div>
                </div>
                <div className='col-span-5 w-full h-full flex justify-start items-center py-10 px-10'>
                    <ul className='list-disc ml-10 space-y-2'>
                        {exp.description.map((point, index) => (
                            <li
                                className='text-amber-900 text-md font-serif tracking-wider'
                                key={index}>
                                    {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
        
        {/* <div  className='w-full border-4 rounded-md border-amber-800 grid grid-cols-8 items-start my-5 py-6 gap-5'>
            <div className='col-span-3 w-full h-full flex justify-center items-center py-10'>
                <div className='text-4xl tracking-wider font-bold font-serif text-amber-900 uppercase'>Accenture</div>
            </div>
            <div className='col-span-5 w-full h-full flex justify-start items-center py-10 px-10'>
                <ul className='list-disc ml-10 space-y-2'>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                </ul>
            </div>
        </div> */}
        
    </div>
  )
}

export default Experience