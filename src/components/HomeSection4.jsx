import ReusableButton from "./ReusableButton";
import divider from "../assets/images/footer-divider.png";

// HomeSection4 component displays a section highlighting best selling drinks
const HomeSection4 = () => {
  return (
    <>
      {/* Main container with background color and vertical alignment */}
      <div className="flex flex-col items-center justify-center bg-[#23022E] pt-10">
        {/* Section title */}
        <h1 className="pb-2 font-[poppins] font-bold text-white">
          Our Best Selling Drinks
        </h1>
        {/* Section subtitle */}
        <p className="p-12 font-[Playwrite_HU] text-3xl font-bold text-white">
          You'll Love These Flavours
        </p>

        {/* "Explore All" button with custom styles */}
        <div className="pb-10">
          <ReusableButton
            text="Explore All"
            styles="text-white  bg-[#0869D9] hover:bg-[white] hover:border-[#0869D9] hover:shadow-[#0869D9] hover:text-[#0869D9]"
            iconColor="white"
            buttonSize={2}
          />
        </div>
      </div>
      {/* Decorative divider image at the bottom, rotated 180 degrees */}
      <img className="rotate-180 text-white" src={divider} alt="" />
    </>
  );
};

export default HomeSection4;
