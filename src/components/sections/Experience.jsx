import { useState } from "react";

export const Experience = () => {
    const [activeTab, setActiveTab] = useState("OIED Student Work Assistant");

    const tabs = [
        {
            jobTitle: "OIED Student Work Assistant",
            company: "Western Oregon University",
            duration: "September 2023 - Present",
            desc: 
            ["Developed and maintained the OIED website using WordPress, enhancing front-end features, themes, plugins, and custom coding for improved user experience.",
            "Leveraged advanced Excel features (formulas, pivot tables, data validation) to build a dynamic tracking system, providing reports on 60-140 student applications per term",
            "Supported international partnerships by managing sensitive documents and contracts, ensuring accuracy and timely execution of agreements."
        ]
        },
        {
            jobTitle: "Computer Science Tutor",
            company: "Western Oregon University",
            duration: "September 2024 - Present",
            desc: 
            ["Provide personalized tutoring sessions, helping students grasp complex concepts and develop independent problem-solving skills.",
            "Offer timely follow-up support via email to ensure continued progress and assignment completion.",
            ]    
        },
        {
            jobTitle: "Bilingual Outreach Specialist",
            company: "Oregon Coast Community College",
            duration: "January 2023 - June 2023",
            desc: 
            [ 
            "Managed financial aid programs for students and parents, utilizing bilingual skills and translating materials with a focus on WordPress for maintaining the bilingual outreach site.",
            "Led the Juntos outreach program, organizing sessions and representing the college at events to increase awareness and strengthen community engagement."
            ]
        },
    ];

    return (
        <section id="experience" className="min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 ">
                <h1 className="text-4xl font-bold text-[##F6ECE3]">Experience</h1>
                <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10"></div>
                <div className="flex justify-center mt-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab.jobTitle}
                                onClick={() => setActiveTab(tab.jobTitle)}
                                className={`flex items-center px-4 py-2 text-gray-700 hover:text-yellow-400 
                                ${activeTab === tab.jobTitle ? "font-bold text-yellow-400 border-b-2 border-yellow-400" : ""}`}
                                aria-selected={activeTab === tab.jobTitle}
                            >
                                <span className="mr-2">{tab.jobTitle}</span>
                            </button>
                        ))}
                </div>
                <div className="mt-6">
                    {tabs.map((tab) => (
                        activeTab === tab.jobTitle && (
                            <div key={tab.jobTitle} className="text-[##F6ECE3]">
                                <h2 className="text-2xl font-bold text-yellow-400">{tab.company}</h2>
                                <h3 className="text-gray-500">{tab.duration}</h3>
                                <ul className="list-disc list-inside mt-4">
                                    {tab.desc.map((item, index) => (
                                        <li key={index} className="text-gray-300">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;