import Image from 'next/image';

const Hero = () => {
  return (
    <section className=" text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empower Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We craft modern websites and applications that bring your ideas to life. Join us on a journey of innovation and creativity.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/img/hero.png" // transparent image path
            alt="Hero Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
