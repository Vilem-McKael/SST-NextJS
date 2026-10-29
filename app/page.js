import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { BsFillTelephoneOutboundFill, BsTelephoneOutboundFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

export default function Home() {
  return (
    <main className="max-w-350">

      

      {/* <img src={'/SSTBannerBefore.png'} className="w-full max-w-[1080px]" /> */}
      
      
      <div id="header" className="flex flex-col items-center justify-center pt-12 h-150 border-b-white border-b pb-24">
        <div className="text-4xl md:text-6xl font-black pb-8 mx-4 text-center z-5">
          Welcome to SST
        </div>

        <div className="text-center max-w-240 mt-4 text-lg md:text-2xl mx-8 z-5">
          We provide a multitude of instrument and equipment rental services to the entertainment industry of the Greater Los Angeles Area.
        </div>

        {/* <div className="flex flex-col sm:flex-row">
          <img className="w-60" src="/equipmentImages/sst2.jpg" />
          <img className="w-60" src="/equipmentImages/sst3.jpg" />
          <img className="w-60" src="/equipmentImages/sst4.jpeg" />
        </div> */}
      </div>

      {/* <div className="h-150 flex flex-col items-center border-b" id="instruments">
        <div className="text-center text-4xl font-black pt-12">
          Instruments
        </div>
      </div>

      <div className="h-150 flex flex-col items-center border-b" id="equipment">
        <div className="text-center text-4xl font-black pt-12">
          Equipment
        </div>
      </div>

      */}

      <div className="h-100 flex flex-col items-center" id="contact">
        <div className="text-center text-4xl font-black pt-12">
          Contact Us
        </div>
        
        <div className="text-center text-lg flex flex-col items-center justify-center h-full">
          <div className="">
            You can reach us at
          </div>

          <a className="font-bold underline flex items-center" href="sms:+18189077780"><BsTelephoneOutboundFill className="mr-2"/>(818) 907-7780</a>

          <div className="">
            Text is preferred for first contact
          </div>
          <br />
          <div>
            Or send an e-mail to <a className='font-bold underline flex items-center' href="mailto:sstsynths@gmail.com"> <SiMinutemailer className="mr-2"/>sstsynths@gmail.com</a>
          </div>
        </div>
      </div>

      <Footer />

      {/* Logo */}

      {/* Short tagline */}

      {/* 3 section links - instruments, equipment, contact */}

      {/* Longer tagline */}

      {/* Instrument section */}

      {/* Equipment section */}

      {/* Contact Us */}

    </main>
  );
}
