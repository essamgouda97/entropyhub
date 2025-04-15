import { FaEnvelope, FaLightbulb, FaChartLine, FaFileSignature } from 'react-icons/fa';

const SalesPipeline = () => {
  const steps: { icon: React.ElementType; title: string; description: string; color: 'blue' | 'purple' | 'green' | 'yellow' }[] = [
    {
      icon: FaEnvelope,
      title: "Initial Contact",
      description: "Reach out through any convenient channel - email, LinkedIn, or our website contact form. Our team will respond within 24 hours to schedule an introductory call and understand your basic requirements.",
      color: "blue"
    },
    {
      icon: FaLightbulb,
      title: "MVP Ideation Workshop",
      description: "We conduct a comprehensive needs assessment session to define your ideal solution. This includes determining deployment preferences (cloud vs self-hosted), required feature modules (HR RAG, Accounting RAG, or custom implementations), accuracy requirements, and data types/sources.",
      color: "purple"
    },
    {
      icon: FaChartLine,
      title: "Solution Proposal",
      description: "We present a tailored package including: MVP demonstration, implementation roadmap, detailed pricing (both MVP and full solution phases), and projected timelines. This includes clear deliverables at each development milestone.",
      color: "green"
    },
    {
      icon: FaFileSignature,
      title: "Contract & Kickoff",
      description: "Upon agreement, we formalize our partnership with a contract and immediately assemble your dedicated project team. Our implementation process includes regular checkpoints, quality assurance testing, and seamless deployment support.",
      color: "yellow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-transparent to-black">
      <div className="container mx-auto px-6 max-w-[90%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Implementation Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A streamlined journey from initial contact to AI solution deployment
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute h-1 bg-gradient-to-r from-blue-500 to-purple-500  top-[30px] left-0 right-1/2 mx-auto w-1/4"></div>
          <div className="hidden md:block absolute h-1 bg-gradient-to-r from-purple-500 to-green-500  top-[30px] left-0 right-0 mx-auto w-1/4"></div>
          <div className="hidden md:block absolute h-1 bg-gradient-to-r from-green-500 to-yellow-500  top-[30px] left-1/2 right-0 mx-auto w-1/4"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorVariants = {
                blue: 'text-blue-400 border-blue-500',
                purple: 'text-purple-400 border-purple-500',
                green: 'text-green-400 border-green-500',
                yellow: 'text-yellow-400 border-yellow-500'
              };
              
              return (
                <div key={index} className="relative z-10 ">
                  <div className={`bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 border-2 ${colorVariants[step.color]}`}>
                    <Icon className="text-2xl" />
                  </div>
                  <div className={`bg-black bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border  h-full flex flex-col items-center`}>
                    <div className={` mb-5 text-center border-b  ${colorVariants[step.color]} max-w-fit`}>
                        <h3 className={`text-xl font-semibold text-white text-center max-w-fit`}>{step.title}</h3>
                        </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPipeline;