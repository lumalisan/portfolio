import Link from 'next/link';
import SectionLayout from './SectionLayout';
import SectionTitle from './SectionTitle';
import { metadataValues } from '../constants';

const Contact = () => {
  return (
    <div className='bg-purple'>
      <SectionLayout>
        <SectionTitle
          sectionNumber='04.'
          title="What's next?"
          titleColor='beige'
        />
        <div className='reveal-animation flex flex-col items-center'>
          <div
            className='mt-8 flex max-w-2xl flex-col items-center gap-8 text-beige'
            role='region'
            aria-labelledby='contact-heading'
          >
            <h2
              id='contact-heading'
              className='text-4xl font-black tracking-wider lg:text-5xl'
            >
              Get In Touch
            </h2>
            <p className='text-center text-lg'>
              I am always open to exploring new opportunities and potential
              collaborations. Whether you have a specific project in mind or
              simply want to connect, feel free to reach me out, and I&apos;ll
              try my best to get back to you!
            </p>
            <Link
              href={`mailto:${metadataValues.email}`}
              className='whitespace-nowrap rounded-lg border-2 border-beige p-2 text-2xl font-semibold
                        tracking-wide text-beige transition duration-300
                        hover:-translate-y-1 hover:shadow-md hover:shadow-beige
                        focus:outline-none focus:ring-2 focus:ring-beige focus:ring-offset-2'
              aria-label='Send me an email'
            >
              Say Hello
            </Link>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Contact;
