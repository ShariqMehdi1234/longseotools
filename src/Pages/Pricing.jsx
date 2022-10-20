import React from "react";
import Headers from './Headers';
import { Link } from 'react-router-dom';

const PricingFeatures = [
    {
        Id: '1',
        MonthlyTitle: 'Sole Propritor',
        MonthlyPerDate:'per month',
        MouthlyPerMostPopular:'',
        MonthlyCurrent:'$',
        MonthlyPricing: '9.99',
        MonthlyOption1: '100 invoices',
        MonthlyOption2: 'Custom scripting & scheduling',
        MonthlyOption3: 'Payment & accounting software integration',
        YearlyTitle: 'Sole Propritor',
        YearlyPerDate:'per year',
        YearlyPerMostPopular:'',
        YearlyCurrent:'$',
        YearlyPricing: '20.99',
        YearlyOption1: '200 invoices',
        YearlyOption2: 'Custom scripting & scheduling',
        YearlyOption3: 'Payment & accounting software integration',
    },
    {
        Id: '2',
        MonthlyTitle: 'Small Business',
        MonthlyPerDate:'per month',
        MouthlyPerMostPopular:'Most Popular',
        MonthlyCurrent:'$',
        MonthlyPricing: '29.99',
        MonthlyOption1: '500 invoices',
        MonthlyOption2: 'Custom scripting & scheduling',
        MonthlyOption3: 'Payment & accounting software integration',
        YearlyTitle: 'Sole Propritor',
        YearlyPerDate:'per year',
        YearlyPerMostPopular:'',
        YearlyCurrent:'$',
        YearlyPricing: '50.99',
        YearlyOption1: '1000 invoices',
        YearlyOption2: 'Custom & Auto scripting & scheduling',
        YearlyOption3: 'Payment & accounting software integration',
    },
    {
        Id: '3',
        MonthlyTitle: 'Enterprise',
        MonthlyPerDate:'per month',
        MouthlyPerMostPopular:'',
        MonthlyCurrent:'$',
        MonthlyPricing: '91.99',
        MonthlyOption1: '1000 invoices',
        MonthlyOption2: 'Custom scripting & scheduling',
        MonthlyOption3: 'Payment & accounting software integration',
        YearlyTitle: 'Sole Propritor',
        YearlyPerDate:'per year',
        YearlyPerMostPopular:'Most Popular',
        YearlyCurrent:'$',
        YearlyPricing: '300.99',
        YearlyOption1: '2000 invoices',
        YearlyOption2: 'Custom & Auto scripting & scheduling',
        YearlyOption3: 'Payment & accounting software integration',
    },
]

function HandleStartCheck() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked === true) {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        } else if (checkBox.checked === false) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
    }
}

function HandleStartFreeTrial(event) {
    event.preventDefault();
    console.log('OnClick....');
}
  
function Pricing() {
    React.useEffect(() => {
        HandleStartCheck()
    }, []);
    return (
        <React.Fragment>
            <Headers />
            <section className="section bg-pricing-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <p className="display-5 text-dark">Pricing</p>
                                <p className="pt-3 text-secondary">Pays for itself with with one saved invoice.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="toggle-btn text-center my-3 pb-5 d-flex align-items-center justify-content-center">
                                <div className="me-1 me-md-3 toggle-text text-secondary">Billed Monthly</div>
                                <label className="switch">
                                    <input type="checkbox" id="checbox" onClick={HandleStartCheck} />
                                    <span className="slider round rounded-pill"></span>
                                </label>
                                <div className="ms-1 ms-md-3 toggle-text text-secondary">Billed Yearly</div>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {PricingFeatures.map((PricingFeatures) => (
                            <div key={PricingFeatures.MonthlyTitle} className="col-lg-4">
                                <div className="pricing border py-5 px-4 px-md-5 pricing-box text-center h-100">
                                    <h5 className="fw-normal text1">{PricingFeatures.MonthlyTitle}</h5>
                                    <h5 className="fw-normal text2">{PricingFeatures.YearlyTitle}</h5>
                                    <p className="text-success text1 fs-6">{PricingFeatures.MouthlyPerMostPopular}</p>
                                    <p className="text-success text2 fs-6">{PricingFeatures.YearlyerMostPopular}</p>
                                    <div className="border-bottom pb-4 mt-4">
                                        <h1 className="display-4 mb-0 text1 text-info pt-2">{PricingFeatures.MonthlyCurrent}{PricingFeatures.MonthlyPricing}</h1>
                                        <h1 className="display-4 mb-0 text2 text-info pt-2">{PricingFeatures.YearlyCurrent}{PricingFeatures.YearlyPricing}</h1>
                                        <p className="mb-0 text1 text-muted">{PricingFeatures.MonthlyPerDate}</p>
                                        <p className="mb-0 text2 text-muted">{PricingFeatures.YearlyPerDate}</p>
                                    </div>
                                    <div className="py-3">
                                        <ul className="list-unstyled">
                                            <li className="list-text text1 text-secondary mt-4">{PricingFeatures.MonthlyOption1}</li>
                                            <li className="list-text text2 text-secondary mt-4">{PricingFeatures.YearlyOption1}</li>
                                            <li className="list-text text1 text-secondary mt-4">{PricingFeatures.MonthlyOption2}</li>
                                            <li className="list-text text2 text-secondary mt-4">{PricingFeatures.YearlyOption2}</li>
                                            <li className="list-text text1 text-secondary mt-4">{PricingFeatures.MonthlyOption3}</li>
                                            <li className="list-text text2 text-secondary mt-4">{PricingFeatures.YearlyOption3}</li>
                                        </ul>
                                    </div>
                                    <Link to="#" onClick={HandleStartFreeTrial} className="btn btn-info text-white">Start free trial</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Pricing;