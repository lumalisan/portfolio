import Link from 'next/link'
import SectionLayout from './SectionLayout'
import SectionTitle from './SectionTitle'

const Contact = () => {
    return (
        <div className='bg-purple'>
            <SectionLayout>
                <SectionTitle sectionNumber='04.' title="What's next?" titleColor='beige' />
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col items-center gap-8 mt-8 max-w-2xl text-beige'>
                        <h2 className='lg:text-5xl text-4xl tracking-wider font-black'>Get In Touch</h2>
                        <p className='text-lg text-center'>
                            I am always open to exploring new opportunities and potential collaborations.
                            Whether you have a specific project in mind or simply want to connect, feel
                            free to reach me out, and I'll try my best to get back to you!
                        </p>
                        <Link
                            href={'mailto:lumalisan@gmail.com'}
                            className="p-2 text-2xl text-beige font-semibold tracking-wide border-2 border-beige
                                    hover:shadow-md hover:shadow-beige hover:-translate-y-1 rounded-lg
                                    whitespace-nowrap transition duration-300"
                        >
                            Say Hello
                        </Link>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Contact