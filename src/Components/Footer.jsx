import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <>
         

         <hr className="p-1 bg-slate-600 mt-10" />



        <div className="bg-black text-gray-100 list-none font-gilory flex justify-center text-center" >
            <div className="max-w-[1100px] p-5 py-10 mx-auto flex flex-wrap gap-2 justify-between">
                <div className="flex flex-col gap-3">
                    <div className="footer-logo-cont">


                        <span className="font-logo font-extrabold text-4xl text-orange-600">BHUKHAD</span>
                    </div>
                    <p className="font-light text-sm">

                        © 2024 BHUKHAD Technologies Pvt. Ltd
                    </p>


                    <div className="flex justify-center text-white text-xl gap-3 p-2">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />

                    </div>
                </div>


           
               
            </div>
        </div>
        </>
    )
}
export default Footer;