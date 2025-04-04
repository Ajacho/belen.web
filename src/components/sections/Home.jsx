import WinkFace from "../WinkFace";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-end justify-start">
            <div className="max-w-4xl mx-auto px-6 mb-10">
                <h1 className="text-4xl font-bold ">Hola, I’m Andrea Jacho <WinkFace/></h1>
                <p className="mt-4">
                    Computer Science student from Ecuador, based in Oregon. Passionate about cloud services, 
                    web development, and UI design. I’ll be earning my Bachelor’s degree in Computer Science 
                    in June 2025 and am eager to explore the ever-evolving tech landscape.</p>
                <button className="mt-8 bg-[#F6ECE3] hover:bg-[#96ADD6] hover:text-[#F6ECE3] font-bold text-[#00408C] py-2 px-4 rounded"><a href="https://www.linkedin.com/in/abjacho/" target="_blank" rel="noopener noreferrer">linkedin.com/in/abjacho/</a></button>
            </div>
        </section>    
        );
}
export default Home;