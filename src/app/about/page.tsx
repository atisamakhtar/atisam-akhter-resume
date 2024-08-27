import React from 'react';
import Image from 'next/image';

const About = () => {
    
    const stylesHere = {
        'background-image': '/media/about.jpg',
    }

    return (
        <>
            <section className='h-96 w-full repeat-0 bg-no-repeat bg-cover' style={ {backgroundImage : 'url("/media/aboutImage.jpg")'} } >
                
            </section>
            
            <section className='my-12 container md:grid gap-x-24 grid-cols-2' >
                <div>
                    <h1 className='text-4xl mb-4 font-bold' >About Atisam Akhtar</h1>
                    <p>
                        Are you looking for a skilled and experienced website developer to bring your online presence to life? Look no further! I am a professional website developer with a strong focus on WordPress, Shopify, and Webflow, offering my expertise to create stunning and functional websites for businesses and individuals.

                        With several years of hands-on experience in the field, I have honed my skills to deliver top-notch results that exceed client expectations. My primary platforms of expertise include WordPress, a versatile content management system (CMS) that powers millions of websites worldwide; Shopify, an industry-leading e-commerce platform known for its robust features and user-friendly interface; and Webflow, a powerful visual web design tool that enables seamless customization and responsive layouts.

                        I am proud to be an active member of the Fiverr freelancing platform, where I have successfully completed numerous projects and garnered a loyal clientele. The satisfaction of my customers is my top priority, and I take great pride in delivering high-quality websites that meet their specific requirements. Many of my clients have been so pleased with my work that they return for additional projects and recommend my services to others.
                    </p>
                </div>
                <div className='md:mt-0 mt-6' >
                    <Image className='w-full' src="/media/aboutImage.jpg" width={400} height={200} alt='Atisam image' />
                </div>
            </section>
        </>
    )
}

export default About