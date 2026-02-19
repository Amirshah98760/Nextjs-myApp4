import Image from "next/image";


export default function Home() {
  return (
  <div className="flex h-screen w-full mt-10 justify-center">
     <div className="w-70 h-70 relative  border border-gray-300 rounded-lg p-4">
   

    <Image
      src="/download.avif"
      alt="file Logo"
      // width={500}
      // height={500}
      fill= {true}
      className="w-full h-full   object-cover absolute "
    />
     </div>
  </div>
  );
}
