import Image from "next/image";
import download from "../public/download.avif";
import download2 from "../public/download2.avif";


export default function Home() {
  return (
 <section >
     <div className="flex h-screen w-full mt-10 justify-evenly">
     <div className="w-70 h-70 relative  border border-gray-300 rounded-lg p-4">
   

    <Image
      src={download}
      alt="file Logo"
      // width={500}
      // height={500}
      fill= {true}
      // quality={100} 
      placeholder="blur"
      blurDataURL=""
      className="w-full h-full   object-cover absolute  hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
    />
     </div>
     <div className="w-70 h-70 relative  border border-gray-300 rounded-lg p-4">
   

    <Image
      src={download2}
      alt="file Logo"
      // width={500}
      // height={500}
      fill= {true}
      // quality={100} 
      placeholder="blur"
      blurDataURL=""
      className="w-full h-full   object-cover absolute hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
    />
     </div>
     <div className="w-70 h-70 relative  border border-gray-300 rounded-lg p-4">
   

    <Image
      src={download}
      alt="file Logo"
      // width={500}
      // height={500}
      fill= {true}
      // quality={100} 
      placeholder="blur"
      blurDataURL=""
      className="w-full h-full   object-cover absolute hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
    />
     </div>


  </div>
     <h1 className="text-3xl font-bold text-center mb-20">Welcome to My App</h1>
  </section>
  );
}
