import { styles } from "../app/styles";
import ComputersCanvas from "./ui/Computers";

const TigaDimensi = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I'm reliable to develop <br className='sm:block hidden' />
                        3D visuals of User Interfaces
                    </p>
                </div>
            </div>

            <ComputersCanvas />

        </section>
    );
};

export default TigaDimensi;