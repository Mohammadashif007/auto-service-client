import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
    const { img, title, price } = service;
    return (
        <section>
            <div className="border-2 rounded-md p-2">
                <img
                    className="rounded-md w-full h-[250px]"
                    src={img}
                    alt="carServiceImage"
                />
                <p className="text-2xl font-bold my-3">{title}</p>
                <div className="flex justify-between items-center text-orange-500">
                    <p className="text-[20px] font-semibold ">
                        Price : {price}
                    </p>
                    <FaArrowRight />
                </div>
            </div>
        </section>
    );
};

export default Service;
