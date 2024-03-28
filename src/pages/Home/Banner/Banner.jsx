import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-lg" />
                <div className="absolute  transform -translate-y-1/2 right-5 top-1/2 text-[#fff] bg-gradient-to-r from-slate-900 h-full left-0 pl-5 flex items-center rounded-lg">
                    <div className="w-1/2">
                        <h1 className="font-bold text-6xl">
                            Affordable Price For Car Servicing
                        </h1>
                        <p className="my-4">
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div>
                            <button className="px-3 py-2 border-2">
                                Discover More
                            </button>
                            <button className="px-3 py-2 border-2 bg-orange-600 text-white ml-4">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute transform  right-5 bottom-5">
                    <a href="#slide1" className="btn btn-circle mr-2">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-lg" />
                <div className="absolute  transform -translate-y-1/2 right-5 top-1/2 text-[#fff] bg-gradient-to-r from-slate-900 h-full left-0 pl-5 flex items-center rounded-lg">
                    <div className="w-1/2">
                        <h1 className="font-bold text-6xl">
                            Affordable Price For Car Servicing
                        </h1>
                        <p className="my-4">
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div>
                            <button className="px-3 py-2 border-2">
                                Discover More
                            </button>
                            <button className="px-3 py-2 border-2 bg-orange-600 text-white ml-4">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute transform  right-5 bottom-5">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-lg" />
                <div className="absolute  transform -translate-y-1/2 right-5 top-1/2 text-[#fff] bg-gradient-to-r from-slate-900 h-full left-0 pl-5 flex items-center rounded-lg">
                    <div className="w-1/2">
                        <h1 className="font-bold text-6xl">
                            Affordable Price For Car Servicing
                        </h1>
                        <p className="my-4">
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div>
                            <button className="px-3 py-2 border-2">
                                Discover More
                            </button>
                            <button className="px-3 py-2 border-2 bg-orange-600 text-white ml-4">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute transform  right-5 bottom-5">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-lg" />
                <div className="absolute  transform -translate-y-1/2 right-5 top-1/2 text-[#fff] bg-gradient-to-r from-slate-900 h-full left-0 pl-5 flex items-center rounded-lg">
                    <div className="w-1/2">
                        <h1 className="font-bold text-6xl">
                            Affordable Price For Car Servicing
                        </h1>
                        <p className="my-4">
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div>
                            <button className="px-3 py-2 border-2">
                                Discover More
                            </button>
                            <button className="px-3 py-2 border-2 bg-orange-600 text-white ml-4">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute transform  right-5 bottom-5">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
