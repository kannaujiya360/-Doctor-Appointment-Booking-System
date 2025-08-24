import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";

const Contact = () => {
  return (
    <MoveUpOnRender id="contact">
      <div className="text-2xl text-center pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600 ">Our OFFICE</p>
          <p className="text-gray-500">
             Near BBAU  <br /> Lucknow Uttar pradesh
          </p>
          <p className="text-gray-500">
            Mob: (+91) 9792449967 <br /> Email:skannaujiya920@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600 ">
            Careers at PRESCRIPTO
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className=" border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default Contact;
