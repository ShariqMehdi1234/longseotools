import React from 'react';
import Headers from './Headers';
import AllPagesComponents from '../Components/AllPagesComponents';
import { ChartBarIcon, CursorArrowRaysIcon, LifebuoyIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HeadingArrayProps = [
    {
        id: 1,
        title: "Events",
        details: "Get all of your questions answered in our forums or contact support.",
        description: "Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support. Get all of your questions answered in our forums or contact support.",
    }
]

const DataArrayProps = [
    {
        id: 1,
        icon: ChartBarIcon,
        heading: "Competitive exchange rates",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        id: 2,
        icon: LifebuoyIcon,
        heading: "No hidden fees",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        id: 3,
        icon: CursorArrowRaysIcon,
        heading: "Transfers are instant",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        id: 4,
        icon: ShieldCheckIcon,
        heading: "Mobile notifications",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        id: 5,
        icon: ChartBarIcon,
        heading: "Competitive exchange rates",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        id: 6,
        icon: LifebuoyIcon,
        heading: "No hidden fees",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        id: 7,
        icon: CursorArrowRaysIcon,
        heading: "Transfers are instant",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
        id: 8,
        icon: ShieldCheckIcon,
        heading: "Mobile notifications",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
]

function Events() {
    return (
      <React.Fragment>
        <Headers />
        <AllPagesComponents HeadingArrayProps={HeadingArrayProps} DataArrayProps={DataArrayProps} />
      </React.Fragment>
    )
}

export default Events;