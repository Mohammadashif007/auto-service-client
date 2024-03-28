import img1 from "../../../assets/images/about_us/person.jpg";
import img2 from "../../../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="flex items-center gap-10 my-20">
            <div className="flex-1 relative">
                <img width="300" src={img1} alt="" />
                <img
                    className="border-4 border-white absolute -bottom-9 right-20"
                    width="200"
                    src={img2}
                    alt=""
                />
            </div>
            <div className="flex-1">
                <h3 className="text-3xl font-bold text-orange-600">About US</h3>
                <h2 className="text-5xl font-bold my-4">
                    We are qualified & of experience in this field
                </h2>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable.
                </p>
                <p className="mt-5">
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which dont look even
                    slightly believable.
                </p>
                <button className="px-3 py-2 bg-orange-500 text-[#fff]">
                    Get More Info
                </button>
            </div>
        </div>
    );
};

export default About;
