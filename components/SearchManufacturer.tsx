"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Combobox, ComboboxInput, ComboboxOption, Transition } from '@headlessui/react';
import { manufacturers } from '../constants';
import { SearchManufacturerProps } from '../types';
// Import useClient from '../hooks/useClient';

export const SearchManufacturer = ({ manufacture, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  const filteredManufacturers = query === ""
    ? manufacturers
    : manufacturers.filter((item) =>
        item.toLowerCase().replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  const handleSelectManufacturer = (selected) => {
    setSelectedManufacturer(selected);
    setManufacturer(selected); // Assuming setManufacturer is a prop callback to update parent state
    setQuery(''); // Clear query after selection
  };

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacture} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-14px">
            <Image
              src="/vanslogo.png"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder='Enter manufacturer'
            value={selectedManufacturer || query} // Display selected manufacturer or query
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={React.Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item, index) => (
                <ComboboxOption key={index} value={item} className={({ active }) =>
                  `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`
                } onClick={() => handleSelectManufacturer(item)}>
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {item}
                      </span>
                      {selected ? (
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                          &#x2713; {/* Check mark or any other icon for selected option */}
                        </span>
                      ) : null}
                    </>
                  )}
                </ComboboxOption>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
