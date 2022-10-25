import React from 'react';
import Headers from './Headers';
import AllPagesComponents from '../Components/AllPagesComponents';
import { ChartBarIcon, CursorArrowRaysIcon, LifebuoyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HeadingArrayProps = [
    {
        title: "Security",
        details: "Get all of your questions answered in our forums or contact support.",
        description: "Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support.",
    }
]

const DataArrayProps = [
    {
        icon: ChartBarIcon,
        heading: "Competitive exchange rates",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: LifebuoyIcon,
        heading: "No hidden fees",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: CursorArrowRaysIcon,
        heading: "Transfers are instant",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: ShieldCheckIcon,
        heading: "Mobile notifications",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: ChartBarIcon,
        heading: "Competitive exchange rates",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: LifebuoyIcon,
        heading: "No hidden fees",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: CursorArrowRaysIcon,
        heading: "Transfers are instant",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        icon: ShieldCheckIcon,
        heading: "Mobile notifications",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
]

function Security() {
    return (
      <React.Fragment>
        <Headers />
        <AllPagesComponents HeadingArrayProps={HeadingArrayProps} DataArrayProps={DataArrayProps} />
      </React.Fragment>
    )
}

export default Security;