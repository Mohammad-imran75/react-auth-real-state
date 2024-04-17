import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { MdWifiCalling1 } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="card card-side lg: max-w-5xl p-10 border-2 mx-auto bg-gray-400 shadow-3xl"data-aos="zoom-in" data-aos-duration="2000">
      <figure>
        <img
        data-aos="fade-right"
        data-aos-delay="2000"
            className="lg:w-[500px] rounded-xl p-5"
          src="https://i.ibb.co/m6Sq0Bx/side-view-breakfast-table-with-red-tablecloth-fried-eggs-cheese-cheese-cucumbers-tomatoes-lettuce-co.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body " >
        <h2  data-aos="fade-left"
        data-aos-delay="2200" className="card-title text-4xl">CONTACT ME OUR PAGE!!</h2>
        <p  data-aos="fade-left"
        data-aos-delay="2300" className="flex items-center gap-3"><MdWifiCalling1></MdWifiCalling1>++9703634509238</p>
        <p  data-aos="fade-left"
        data-aos-delay="2400" className="flex items-center gap-3"><TbBrandGmail></TbBrandGmail>hablubaba@gmail.com</p>
        <hr />
        <div  data-aos="fade-left"
        data-aos-delay="2500" className="text-5xl flex justify-center gap-6 pt-3 text-red-400 mb-3">
            <FaInstagram></FaInstagram>
            <FaFacebook></FaFacebook>
            <FaGoogle></FaGoogle>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See more</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
<h1>This is contact page</h1>;
