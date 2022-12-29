import CardImage from '@components/CardImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Card, Carousel } from 'flowbite-react';
import Head from 'next/head';

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
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
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
                    </div>                    
                </div>

                <div className="container mx-auto px-4">
                    <h1 className="text-4xl text-center mb-3">My Projects</h1>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <Card
                                imgAlt="Meaningful alt text for an image that is not purely decorative"
                                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so
                                    far, in reverse chronological order.
                                </p>
                                <a href="#" className="text-blue-500 inline-flex items-center mt-3">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </Card>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <CardImage />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <CardImage />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <CardImage />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <CardImage />
                        </div>
                        <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-5">
                            <CardImage />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}