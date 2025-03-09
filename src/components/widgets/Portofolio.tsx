import React from 'react'

const Portofolio = () => {

    const items = [
        { 
            icon: "/icons/clients-96.png", 
            number: "57",
            title: "Clients Empowered", 
            description: "Over 50 businesses trust us to deliver innovative solutions and drive success." 
        },
        { 
            icon: "/icons/progress-100.png", 
            number: "109",
            title: "Completed Projects", 
            description: "A proven track record of excellence with 100+ completed projects across industries." 
        },
        { 
            icon: "/icons/support-hours-100.png", 
            number: "100",
            title: "Hours Of Support", 
            description: "Providing 24/7 expert support with over 100 hours dedicated to client success." 
        },
    ]
  return (
    <div>  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className=" p-6 rounded-lg transition duration-300 text-center hover:scale-105 flex flex-col items-center space-y-2 "
                    >
                        <img src={item.icon} alt={item.title} className="w-20 h-auto" />
                        <h3 className="text-xl font-semibold text-white">{item.number}</h3>
                        <h3 className="text-2xl font-semibold text-teal-400">{item.title}</h3>
                        <p className="text-slate-200 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portofolio