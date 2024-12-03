import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>About Me | Farhana Sharna</title>
            </Helmet>
            <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50 min-h-screen">
                <div className="container mx-auto py-12 px-6">
                    <h1 className="text-5xl font-bold text-center text-blue-800 mb-8">
                        About Me
                    </h1>
                    <div className="card bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <p className="text-xl">
                                Hello, I am <span className="font-bold text-blue-800">Farhana Sharna</span>. I work in web development and specialize in building user-friendly interfaces using modern tools and technologies.
                            </p>
                            <p className="text-lg mt-6 font-bold text-blue-800">
                                Here are some of my recent projects:
                            </p>
                            <ul className="grid grid-cols-2 gap-4 mt-4 text-left">
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">Dragon News</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">Gadget Heaven</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">Boi Poka</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">My Coffee Shop</li>
                                <li className="p-3 bg-blue-100 rounded-lg shadow-sm hover:shadow-md">BPL-DREAM 11</li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-3xl font-bold text-blue-800 text-center">My Skills</h2>
                            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6  mt-8">
                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 80 }} role="progressbar"> 80%
                                    </div>
                                    <h3 className="text-lg ml-2 mt-2 font-semibold">React</h3>
                                </div>
                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 70 }} role="progressbar"> 70%
                                    </div>
                                    <h3 className="text-lg mt-2 font-semibold">React Router</h3>
                                </div>
                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 100 }} role="progressbar"> 100%
                                    </div>
                                    <h3 className="text-lg ml-4 mt-2  font-semibold"> HTML</h3>
                                </div>
                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 60 }} role="progressbar"> 60%
                                    </div>
                                    <h3 className="text-lg ml-2 mt-2 font-semibold">Firebase</h3>
                                </div>



                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 100 }} role="progressbar"> 100%
                                    </div>
                                    <h3 className="text-lg ml-2 mt-2 font-semibold">DaisyUI</h3>
                                </div>


                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 90 }} role="progressbar"> 90%
                                    </div>
                                    <h3 className="text-lg  mt-2 font-semibold">Tailwind CSS</h3>
                                </div>

                                <div>
                                    <div className="radial-progress text-primary" style={{ "--value": 95 }} role="progressbar"> 95%
                                    </div>
                                    <h3 className="text-lg ml-6 mt-2 font-semibold"> CSS</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
