
import { FaShareAlt } from 'react-icons/fa';
import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.avif'
import img4 from '../../assets/img4.webp'



const Team = () => {
    return (
        <div className=''>
            <div className='text-center mb-6 '>
                <p className='text-xl font-semibold text-red-500 uppercase mb-4'>PROFESSIONAL TEAM</p>
                <h1 className='text-3xl font-bold mb-8'>Meet Our Dedicated Team</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 '>
                <div className='relative mb-8 md:mb-0'>
                    <div className='shadow-md hover:shadow-xl transition-transform transform hover:scale-105 '>
                        <img className='w-full h-52 rounded-md' src={img4} alt="" />
                    </div>

                    <div className="bg-pink-200 py-4 px-6 absolute bottom-[-20%] right-[25%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-center">Bilal Abbas</h2>
                        <p className="text-center text-gray-500">Migration Agent</p>
                    </div>
                    <div className="flex justify-center bg-orange-500 p-3  absolute left-[43%] rounded-full  top-[67%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <FaShareAlt className="text-white text-xl " />
          </div>
                </div>
                <div className='relative mb-8 md:mb-0'>
                    <div className='shadow-md hover:shadow-xl transition-transform transform hover:scale-105 '>
                        <img className='w-full h-52 rounded-md' src={img2} alt="" />
                    </div>

                    <div className="bg-pink-200 py-4 px-6 absolute bottom-[-20%] right-[25%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-center">Zara Sehgal</h2>
                        <p className="text-center text-gray-500">Migration Agent</p>
                    </div>
                    <div className="flex justify-center bg-orange-500 p-3 absolute left-[43%] rounded-full  top-[67%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <FaShareAlt className="text-white text-xl " />
          </div>
                </div>
                <div className='relative mb-8 md:mb-0'>
                    <div className='shadow-md hover:shadow-xl transition-transform transform hover:scale-105 '>
                        <img className='w-full h-52 rounded-md' src={img3} alt="" />
                    </div>

                    <div className="bg-pink-200 py-4 px-6 absolute bottom-[-20%] right-[25%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-center">Avinash Roy</h2>
                        <p className="text-center text-gray-500">Migration Agent</p>
                    </div>
                    <div className="flex justify-center bg-orange-500 p-3  absolute left-[43%] rounded-full  top-[67%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <FaShareAlt className="text-white text-xl " />
          </div>
                </div>
                <div className='relative mb-8 md:mb-0'>
                    <div className='shadow-md hover:shadow-xl transition-transform transform hover:scale-105 '>
                        <img className='w-full h-52 rounded-md' src={img1} alt="" />
                    </div>

                    <div className="bg-pink-200 py-4 px-6 absolute bottom-[-20%] right-[25%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-center">Esha Khan</h2>
                        <p className="text-center text-gray-500">Migration Agent</p>
                    </div>
                    <div className="flex justify-center bg-orange-500 p-3  absolute left-[43%] rounded-full  top-[67%] shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
            <FaShareAlt className="text-white text-xl " />
          </div>
                </div>

                
             
            </div>
            <div>


            </div>

        </div>
    );
};

export default Team;