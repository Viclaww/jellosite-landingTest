import { useState } from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
// import { setType, setSlugAndName } from "../../../data/site/siteSetupSlice";
import { IoMdArrowBack } from "react-icons/io";
import "./onboard.scss";

import storenormal from "../../../assets/Icons/clarity_store-solid (2).svg";
import storehover from "../../../assets/Icons/hover_clarity_store-solid (1).svg";
import Schoolnormal from "../../../assets/Icons/mdi_school-outline.svg";
import schoolHover from "../../../assets/Icons/hover mdi_school-outline (1).svg";
import dispatchnormal from "../../../assets/Icons/shipping truck.svg";
import dispatchhover from "../../../assets/Icons/hover_Transport.svg";
import { useCreateNewSiteMutation } from "../../../data/api/createSiteApi";

const Onboard = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [showSection2, setShowSection2] = useState(false);
  const [storName, setStoreName] = useState("");
  const [slug, setSlug] = useState("");
  const dispatch = useDispatch();
  const [checkType, setCheckType] = useState("");

  const access = useSelector((state) => state.auth.accessToken);
  const [createNewSite] = useCreateNewSiteMutation();
  const isDesiredType =
    checkType === "ecommerce" ||
    checkType === "school" ||
    checkType === "dispatchServices";

  const handleSectionHover = (sectionIndex) => {
    setHoveredSection(sectionIndex);
  };

  const handleSectionLeave = () => {
    setHoveredSection(null);
  };

  const handleGoBackClick = () => {
    setCheckType("");
    setShowSection2(false);
  };

  const handleSectionClick = (name) => {
    setCheckType(name);
    setShowSection2(true);
  };

  // Assuming `access` is a valid token

  const handleCreateSite = (e) => {
    e.preventDefault();
    console.log(access);
    const data = {
      name: storName,
      slug,
      site_type: checkType,
    };

    dispatch(createNewSite({ body: data, access }));
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col  h-full relative overflow-hidden">
        <div
          className={`flex section-1 flex-col p-4 pb-5 justify-center duration-200 gap-6 ${
            isDesiredType ? "-translate-x-full z-10 absolute" : ""
          }`}
        >
          <h1 className="md:text-3xl text-lg text-center font-medium">
            Hi John👋🏻 <br /> What kind of business website do you want to
            create?
          </h1>
          <div className="flex gap-10 flex-wrap justify-center">
            {[storenormal, Schoolnormal, dispatchnormal].map((img, index) => (
              <div
                key={index}
                className={`w-[160px] hover:shadow-custom duration-300 ease-in hover:border-0 cursor-pointer gap-2 h-[130px] business rounded-lg flex flex-col justify-center items-center border ${
                  hoveredSection === index ? "hovered-section" : ""
                }`}
                onMouseEnter={() => handleSectionHover(index)}
                onMouseLeave={handleSectionLeave}
                onClick={() =>
                  handleSectionClick(
                    ["ecommerce", "school", "dispatchServices"][index]
                  )
                }
              >
                <img
                  src={
                    hoveredSection === index
                      ? [storehover, schoolHover, dispatchhover][index]
                      : img
                  }
                  alt="service"
                />
                {["Regular Store", "School", "Dispatch Service"][index]}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`section-2 justify-center duration-200 flex items-center w-full h-[85vh] transition-transform transform ${
            showSection2 ? "translate-x-0" : "translate-x-full absolute"
          }`}
        >
          <form className="flex rounded flex-col gap-5 lg:shadow-custom p-8 w-full md:w-1/2  lg:w-1/3">
            <p
              onClick={handleGoBackClick}
              className="text-xs flex gap-1 items-center cursor-pointer"
            >
              <IoMdArrowBack size={15} /> Go Back
            </p>
            <h2 className="text-xl font-bold">Create A Business</h2>
            <span className="w-full flex">
              <input
                className="w-full h-[56px] rounded py-3 px-1 outline outline-[1px] outline-[#E4E4E7]"
                type="text"
                required
                placeholder="Store Name"
                value={storName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </span>

            <span className="relative">
              <input
                className="w-full h-[56px] rounded py-3 px-1 outline outline-[1px] outline-[#E4E4E7]"
                type="text"
                placeholder="Store-site"
                required={true}
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
              <p className="text-sm absolute right-3 font-medium top-5">
                .jellosite.com
              </p>
            </span>

            <button
              className="rounded-lg h-[56px] py-3 text-white bg-[#7E57C2]"
              type="text"
              onClick={handleCreateSite}
            >
              Create Store
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Onboard;
