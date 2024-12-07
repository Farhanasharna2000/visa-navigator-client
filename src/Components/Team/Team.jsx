
import { FaShareAlt } from 'react-icons/fa';
import img1 from '../../assets/img.avif'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.avif'
import img4 from '../../assets/img4.webp'



const Team = () => {
    return (
        <div className='bg-gray-100 p-8 mb-8 rounded-lg container mx-auto'>
            <div className='text-center mb-6 '>
                <p className='text-xl font-semibold text-red-500 uppercase mb-4'>PROFESSIONAL TEAM</p>
                <h1 className='text-4xl font-bold mb-8'>Meet Our Dedicated Team</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 '>
                <div className=' mb-8 md:mb-0'>
                    <div>
                        <img className='w-full h-72 rounded-t-md ' src={img4} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className="text-xl font-semibold text-center">Bilal Abbas</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>
                    
                </div>
                <div className=' mb-8 md:mb-0'>
                    <div>
                        <img className='w-full h-72 rounded-t-md ' src={img2} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className="text-xl font-semibold text-center">Zara Sehgal</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>
                   
                </div>
                <div className=' mb-8 md:mb-0'>
                    <div>
                        <img className='w-full h-72 rounded-t-md ' src={img3} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className="text-xl font-semibold text-center">Avinash Roy</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>
                    
                </div>
                <div className=' mb-8 md:mb-0'>
                    <div>
                        <img className='w-full h-72 rounded-t-md ' src={img1} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className="text-xl font-semibold text-center">Esha Khan</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>
                    
                </div>

                
             
            </div>
            <div>


            </div>

        </div>
    );
};

export default Team;