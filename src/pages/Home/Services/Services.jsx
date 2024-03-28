import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    const url = "data.json";

    const loadData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setServices(data);
    };

    useEffect(() => {
        loadData();
    }, []);
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
                {
                    services.map(service => <Service key={service.service_id} service={service}></Service>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button className="px-3 py-2 border-2 border-orange-600">More Services</button>
            </div>
        </section>
    );
};

export default Services;
