import Head from 'next/head';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Profile() {

    return (
        <div className="flex justify-center items-center h-[100vh] bg-[#353535] text-white flex-col">
            <Head>
                <title>Profile | Arsal Fadilah Portfolio Project</title>
                <link rel="icon" href="/logo-geo-mini.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center cursor-default">
                <h1 className="text-4xl">
                    <Typewriter
                        options={{
                            delay: 75,
                            deleteSpeed: 1000,
                        }}

                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello, my name is <strong>Arsal Fadilah</strong>.')
                                .pauseFor(300)
                                .deleteAll()
                                .typeString('I\'m a <strong>Fullstack</strong> Developer<br>')
                                .pauseFor(300)
                                .typeString('and <strong>Content Creator</strong> Youtube.')
                                .pauseFor(500)
                                .deleteAll()
                                .typeString('Do you want to know more about me?')
                                .pauseFor(300)
                                .typeString('<br><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 px-4 rounded" onclick="handleClick()">Click Here</button>')
                                .callFunction(() => {
                                    window.handleClick = () => {
                                        document.querySelector('.hidden').click();
                                    };
                                })
                                .start();
                        }}
                    />
                </h1>
                <Link href="/bio" className="hidden" legacyBehavior={false}>
                    Click Here
                </Link>
            </main>
        </div>
    )
}