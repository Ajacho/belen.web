export const About = () => {

    const techSkills = [
        "ASP.NET Core MVC",
        "React",
        "C++",
        "JavaScript",
        "WordPress",
        "Vite"
    ];

    return (  
        <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-[##F6ECE3]">About Me</h1>
                <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10"></div>
                <div className="grid grip-cols-1 md:grid-cols-2 gap-6">
                    <div className="about-image">
                        {/* Picture of myself */}
                        <img src="/me.JPEG" alt="Andrea Jacho" className="rounded-full" />
                    </div>
                    <div>
                        <p className="text-[##F6ECE3] mt-4">
                            I’m a senior Computer Science student at Western Oregon University. My academic journey has 
                            allowed me to develop real-world applications and strengthen my technical skills.</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {techSkills.map((skill) => (
                                <li key={skill} className="list-none box-border border-1 p-4 bg-[#96ADD6] font-bold mt-4  ">{skill}</li>
                            ))}
                        </div>
                    </div>
                </div>    
                <p className="text-text-[##F6ECE3] mt-4">
                    Beyond coding, I stay engaged by following tech influencers, reading cognitive science books, 
                    and capturing Oregon’s landscapes through photography. When I’m not immersed in tech, you’ll 
                    likely find me at the gym or sharing my photography on <a className="text-yellow-400 font-bold" href="https://www.pinterest.com/abjacho" target="_blank" rel="noopener noreferrer">Pinterest</a>.
                </p>
            </div>
        </section>
    );
}
 
export default About;