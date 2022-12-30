import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'flowbite-react';
import Head from 'next/head';
import ImageCaption from '@components/ImageCaption';

export default function Bio() {

    return (
        <div className="bg-[#353535] text-white">
            <Head>
                <title>Biodata | Arsal Fadilah Portfolio Project</title>
                <link rel="icon" href="/logo-geo-mini.ico" />
            </Head>

            <main className="container mx-auto p-4">
                <div className="flex items-center mb-5">
                    <div className="w-14 h-14 rounded-full bg-[url('/potraitPhoto.jpeg')] bg-cover" alt="image description" />
                    <div className='inline-block ml-6'>
                        <p className="text-2xl">Arsal Fadilah</p>
                        <p className="text-gray-400" >Fullstack Developer</p>
                    </div>
                </div>

                <hr className="border-1 border-gray-300 mb-6" />

                <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center mb-6 lg:mb-10">
                    <div className="border-2 border-white h-full p-4">
                        <h1 className="text-4xl mb-3">
                            Biodata
                        </h1>
                        <p>I am an informatics engineering graduate candidate at Bandung Polytechnic as well as a content creator on the Programming Nusantara youtube channel<br /><br />I have worked on several large projects such as e-commerce and government website. I also learned and make a lot about machine learning such as making Whatsapp bots and color predictions.<br /><br />I want to tell you, I only have two GitHub accounts. Exist :<br />- <a href="https://github.com/arsalf" className='text-blue-500 hover:text-blue-600' target="_blank" rel="noreferrer">github.com/arsalf</a> (work account)<br />- <a href="https://github.com/arsalfadilah" className='text-blue-500 hover:text-blue-600' target="_blank" rel="noreferrer">github.com/arsalfadilah</a> (student account)<br />So you can know everything I make.
                        </p>
                        <p>
                            ( ͡° ͜ʖ ͡°( ಠ ͜ʖ ಠ ) ͡° ͜ʖ ͡°)
                        </p>
                        <br />
                        <br />
                        <h1 className="text-2xl">Social Media Accounts</h1>
                        <div className="flex items-center mt-5">
                            <a href="https://www.instagram.com/arsalfadilah/" target="_blank" rel="noreferrer" className="mr-5">
                                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCHxt5WpcIsuzBrlHXAAKujg" target="_blank" rel="noreferrer" className="mr-5">
                                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/arsalf" target="_blank" rel="noreferrer" className="mr-5">
                                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="mb-5 lg:mb-0 lg:ml-5 w-full lg:h-auto">
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-6">
                            <Carousel slide={false}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div className='w-full h-full'>
                                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/lelMu93Klz4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div className='w-full h-full'>
                                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/y12Yg-b8nQE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div className='w-full h-full'>
                                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/klDdNMhuUJ4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Carousel>
                        </div>

                        <div className='border-2 border-white'>
                            {/* my quotes */}
                            <div className="flex items-center justify-center h-20 px-6">
                                <p className="text-base md:text-xl text-center italic">
                                    "I am not a great programmer; I am just a good programmer with great habits."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-0 md:px-4">
                    <h1 className="text-4xl text-center mb-6">My Projects</h1>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'Pasimeru',
                                    subtitle: 'E-Commerce',
                                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'BPKAD',
                                    subtitle: 'Government Website',
                                    image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'Progantara',
                                    subtitle: 'Content Management System',
                                    image: 'https://flowbite.com/docs/images/blog/image-2.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'Absensi Akademik',
                                    subtitle: 'School Precense App',
                                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'SPP Online',
                                    subtitle: 'School Fee Management',
                                    image: 'https://flowbite.com/docs/images/blog/image-2.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'SPMB Online',
                                    subtitle: 'Student Admissions System',
                                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'WAbot',
                                    subtitle: 'Whatsapp Bot',
                                    image: 'https://flowbite.com/docs/images/blog/image-1.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'Love Color',
                                    subtitle: 'Color Prediction',
                                    image: 'https://flowbite.com/docs/images/blog/image-2.jpg',
                                }
                            } />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <ImageCaption children={
                                {
                                    title: 'L-Tix',
                                    subtitle: 'Bioskop Ticketing',
                                    image: 'https://flowbite.com/docs/images/blog/image-3.jpg',
                                }
                            } />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}