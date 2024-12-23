import React from 'react'
import { MdDescription } from 'react-icons/md'

const ServicesCom = () => {
    const array = [
        {
            name: "Sugar Mills",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1732603737/allaince_1_ysbjkh.jpg",
            description: "Providing top-quality construction solutions for efficient, durable, and modern sugar mills with advanced infrastructure."
        },
        {
            name: "Power Plants",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1732857757/RYK_POWER_PLANT_9_luhmye.jpg",
            description: "Delivering reliable and efficient construction solutions for power plants with advanced technology and sustainable infrastructure."
        },
        {
            name: "Water Treatment Plant",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1732857760/water_treatment_8_xhyiqw.jpg",
            description: "Offering high-quality construction solutions for water treatment plants with advanced technology and sustainable infrastructure."
        },
        {
            name: "Chemicals Plants",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oKEd2toBSzs6mjU_MY_oe8Oeu3JI_Gm9Ag&s",
            description: "Providing efficient and reliable construction solutions for chemical plants with advanced safety and modern infrastructure."
        },
        {
            name: "Steel Mills",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V54X6aY_fI1a0OSgblrRkr1cInKGvtQMiQ&s",
            description: "Delivering robust and efficient construction solutions for steel mills with advanced technology and durable infrastructure."
        },
        {
            name: "Cement Plant",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1734953204/WhatsApp_Image_2024-12-17_at_11.31.30_b7hw8l.jpg",
            description: "Offering durable and efficient construction solutions for cement plants with advanced technology and reliable infrastructure."
        },
        {
            name: "Feeds Plant",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1732857804/WHOLE_FOOD_FEED_BHAKHAR_9_cxjjko.jpg",
            description: "Providing high-quality construction solutions for feed plants with modern technology and sustainable infrastructure."
        },
        {
            name: "Paper Plant ",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1732857728/mirpur_khas_paper_plant_14_k9qltm.jpg",
            description: "Delivering efficient and sustainable construction solutions for paper plants with advanced technology and reliable infrastructure."
        },
        {
            name: "Dairy Form",
            image: "https://shedsmaker.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-10-at-16.34.08.jpeg",
            description: "Providing modern and efficient construction solutions for dairy farms with innovative design and durable infrastructure."
        },
        {
            name: "Warehouse",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1732857734/warehouse1_mmir3l.png",
            description: "Offering robust and scalable construction solutions for warehouses with efficient layouts and strong infrastructure."
        },
        {
            name: "Textile",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1734953349/Anjum_textile_maeqsd.jpg",
            description: "Delivering advanced and efficient construction solutions for textile plants with modern technology and durable infrastructure."
        },
        {
            name: "Sports Complex",
            image: "https://res.cloudinary.com/djpvajewe/image/upload/v1732857750/sport_1_un5kkb.jpg",
            description: "Providing state-of-the-art construction solutions for sports complexes with innovative design and premium facilities."
        },
    ]
    return (
        <div className='w-full py-[50px] px-2 sm:px-[30px] lg:px-[100px]'>
            <h1 className='text-center text-xl text-[rgb(226,31,47)]'>OUR SERVICES</h1>
            <p className='md:w-[500px] lg:w-[800px] mx-auto text-center text-xl md:text-2xl lg:text-4xl mt-2 sm:mt-5 font-[600] text-[rgb(31,66,93)]'>HIGH QUALITY CONSTRUCTION SOLUTIONS FOR RESIDENTIALS & INDUSTRIES!</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 sm:mt-9 gap-6'>
                {
                    array.map((e, i) => {
                        return (
                            <div key={i} className='customShadow'>
                                <div className='w-full h-[200px]'><img className='w-full h-full object-cover' src={e.image} alt="" /></div>
                                <div className='p-3 flex'>
                                    <div className='w-[12px] h-[150px] bg-red-500'></div>
                                    <div className='ml-2'>
                                        <h1 className='text-center text-xl'>{e.name}</h1>
                                        <p className='mt-1 text-justify'>{e.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ServicesCom