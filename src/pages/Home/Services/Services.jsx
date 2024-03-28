import { useEffect, useState } from "react";
import Service from "./Service";

const LoadingSkeleton = () => {
    // You can customize the skeleton UI as per your design
    return (
        <div className="animate-pulse">
            <div className="bg-gray-200 h-12 w-full mb-4"></div>
            <div className="bg-gray-200 h-8 w-full mb-2"></div>
            <div className="bg-gray-200 h-8 w-full mb-2"></div>
            <div className="bg-gray-200 h-8 w-full mb-2"></div>
        </div>
    );
};

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "data.json";

    const loadData = async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("Failed to fetch service");
            }
            const data = await res.json();
            setServices(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (loading) {
        return (
            <section>
                <LoadingSkeleton></LoadingSkeleton>
            </section>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500">Service</h3>
                <h2 className="text-5xl font-bold py-3">Our Service Area</h2>
                <p>
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which dont look even
                    slightly believable.
                </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
                {services.map((service) => (
                    <Service
                        key={service.service_id}
                        service={service}
                    ></Service>
                ))}
            </div>
            <div className="flex justify-center my-10">
                <button className="px-3 py-2 border-2 border-orange-600">
                    More Services
                </button>
            </div>
        </section>
    );
};

export default Services;
