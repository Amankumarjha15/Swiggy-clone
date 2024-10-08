// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
    return (
        <>
         

         <hr className="p-1 bg-slate-600 mt-10" />



        <div className="bg-black text-gray-100 list-none font-gilory">
            <div className="max-w-[1100px] p-5 py-10 mx-auto flex flex-wrap gap-2 justify-between">
                <div className="flex flex-col">
                    <div className="footer-logo-cont">


                        <span className="font-logo font-extrabold text-4xl">Foodie</span>
                    </div>
                    <p className="font-light text-sm">

                        © 2024 Bundl Technologies Pvt. Ltd
                    </p>


                    <div className="flex text-white text-xl gap-3 p-2">
                        {/* <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube /> */}

                    </div>
                </div>


                <div className="min-w-[130px]">
                    <p className="font-semibold mb-1">
                        Company
                    </p>
                    <div className="text-sm font-light flex flex-col gap-1 p-2 cursor-pointer">

                        <li>
                            About

                        </li>
                        <li>
                            Careers

                        </li>
                        <li>
                            Team

                        </li>
                        <li>
                            Swiggy One

                        </li>
                        <li>

                            Swiggy Instamart
                        </li>
                        <li>

                            Swiggy Genie
                        </li>
                    </div>
                </div>
                <div className="min-w-[130px]">
                    <div>

                        <p className="font-semibold mb-1 ">
                            Contact us
                        </p>
                        <div className="text-sm font-light flex flex-col gap-1 p-2 cursor-pointer">

                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                        </div>

                    </div>
                    <div>
                        <p className="font-semibold mb-1 mt-3">Legal</p>
                        <div className="text-sm font-light flex flex-col gap-1 p-2 cursor-pointer">

                            <li>Terms & conditions</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                            <li>Investor Relations</li>
                        </div>
                    </div>
                </div>
                <div className="min-w-[130px]">
                    <p className="font-semibold mb-1">We deliver to:</p>
                    <div className="text-sm font-light flex flex-col gap-1 p-2 cursor-pointer">

                        <li>Banglore</li>
                        <li>Gurgaon</li>
                        <li>Hydrabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                        <li>589+ Cities</li>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;