import React ,{useState ,useEffect} from "react";

function AllPagesComponents(HeadingArrayProps) {

    const [HeadingArray, setHeadingArray] = useState([]);
    const [PerLoader, setPerLoader] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setHeadingArray(HeadingArrayProps);
            setPerLoader(true);
        }, 2000);

    }, [HeadingArrayProps]);

    if(!PerLoader){
        return(
            <>
                <div className="center">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </>
        )
    }

    return (
        <React.Fragment>
           <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        {HeadingArray.HeadingArrayProps.map((data) => ( <>
                            <h2 key={data.id} className="text-lg font-semibold text-indigo-600 text-4xl">{data.title}</h2>
                            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">{data.details}</p>
                            <p className="mt-2 max-w-4xl text-sm text-gray-500 lg:mx-auto">{data.description}</p>
                       </> ))}
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                            {HeadingArray.DataArrayProps.map((data) => ( <>
                                <div key={data.id} className="relative">
                                    <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                            <data.icon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{data.heading}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{data.description}</dd>
                                </div>
                            </> ))}
                        </dl>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}
export default AllPagesComponents;