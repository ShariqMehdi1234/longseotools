import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Home from './Home'
import Headers from './Headers'

const subCategories = [
  { name: 'Text Analysis Tools', href: '#TextAnalysisTools' },
  { name: 'Design Studio Tools', href: '#DesignStudioTools' },
  { name: 'Images Editing Tools', href: '#ImagesEditingTools' },
  { name: 'Keywords Tools', href: '#KeywordsTools' },
  { name: 'BackLink Tools', href: '#BackLinkTools' },
  { name: 'Website Management Tools', href: '#WebsiteManagementTools' },
  { name: 'Website Tracking Tools', href: '#WebsiteTrackingTools' },
  { name: 'Proxy Tools', href: '#ProxyTools' },
  { name: 'Domains Tools', href: '#DomainsTools' },
  { name: 'Meta Tags Tools', href: '#MetaTagsTools' },
  { name: 'Password Management Tools', href: '#PasswordManagementTools' },
  { name: 'Online PDF Tools', href: '#OnlinePDFTools' },
  { name: 'Development Tools', href: '#DevelopmentTools' },
  { name: 'Unit Converter Tools', href: '#UnitConverterTools' },
  { name: 'Binary Converter Tools', href: '#BinaryConverterTools' },
  { name: 'Online Calculators Tools', href: '#OnlineCalculatorsTools' },
  { name: 'Other Tools', href: '#OtherTools' },
]

function Filter() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <React.Fragment>
            <Headers />
            <div className="bg-white">
                <div>
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                    type="button"
                                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                
                                <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul className="px-2 py-3 font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                        <a href={category.href} className="block px-2 py-3">
                                            {category.name}
                                        </a>
                                        </li>
                                    ))}
                                    </ul>
                                </form>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>
                    <main className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                        <section aria-labelledby="products-heading" className="pt-6 pb-24">
                            <h2 id="products-heading" className="sr-only">
                            Products
                            </h2>
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-7">
                                <form className="hidden lg:block">
                                    <div className="fixed overflow-auto">
                                        <div className="flex items-baseline justify-between border-b border-gray-200 pt-6 pb-6">
                                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Filter</h1>
                                        </div>
                                        <h3 className="sr-only">Categories</h3>
                                        <ul className="space-y-4 border-b border-gray-200 pb-6 pt-6 text-sm font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                </form>
                                <div className="lg:col-span-6">
                                    <div className="h-96 rounded-lg lg:h-full">
                                        <Home />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Filter;