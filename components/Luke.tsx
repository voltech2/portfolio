import Photo from './ui/Photo';
import Stats from './ui/Stats';
import { Button } from './ui/Button';
import { FiDownload } from "react-icons/fi";

const Luke = () => {
    return (
            <section className='h-full font-jb'>
                <div className="container mx-auto h-full">
                    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                        <div className="text-center xl:text-left order-2 xl:order-none">
                            <span className='text-xl'>Website Developer</span>
                            <h1 className='text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6'>
                                Hello I'm <br /> <span className='text-purple'>Rahmat Hidayat</span>
                            </h1>
                            <p className='max-w-[500px] mb-9 text-white/80'>
                                Based in South Tangerang, Indonesia. I excel at crafting elegant digital experiences.
                            </p>
                            <div className='flex flex-col xl:flex-row items-center gap-8'>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className='uppercase flex items-center gap-2'
                                >
                                    <span>Download CV</span>
                                    <FiDownload className='text-xl' />
                                </Button>
                            </div>
                        </div>
                        <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                            <Photo />
                        </div>
                    </div>
                </div>
                <Stats />
            </section>
    );
};

export default Luke;