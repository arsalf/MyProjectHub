export default function ImageCaption({ children, ...props }) {
    return (
        <a href="#">
            <figure className="relative cursor-pointer hover:scale-[1.02] animate-in ease-in-out duration-100">
                <img className="rounded-lg object-cover h-64 w-full" src={
                    children.image
                } alt="image description" />
                <figcaption className="absolute bottom-0 px-4 py-2 text-lg text-white bg-black bg-opacity-75  hover:bg-opacity-100 text-center w-full rounded-t-lg">
                    <h1 className='text-lg md:text-xl font-bold tracking-tight'>{children.title}</h1>
                    <h1 className='text-sm md:text-base tracking-tight'>{children.subtitle}</h1>
                </figcaption>
            </figure>
        </a>
    )
}