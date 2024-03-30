'use client'
import './CarSelector.css'; // Import the CSS file

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon, PlayIcon} from '@heroicons/react/20/solid'


interface Factors {
  id: number;
  name: string;
}

interface CarSelectorProps {
  jsonData: Factors[]; 
  defaultWidth: number;
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CarSelector({ jsonData, defaultWidth }: CarSelectorProps) {
  const [selected, setSelected] = useState(jsonData[0])

  return (
    <Listbox value={selected} onChange={setSelected} >
      <>


        <div className="flex1 relative selectorContainor  ${defaultWidth === 0 ? 'selectorContainor-1000 selectorContainor-960 selectorContainor-730 selectorContainor-560' : ''" style={{ width: defaultWidth !== 0 ? `${defaultWidth}px` : 'selectorContainor' }}  style={{height:'34px'}}>
          <Listbox.Button className="relative w-full bg-white py-1 pl-3 pr-10 text-left text-gray-900 listboxButton ">
            <span className="flex items-center">
              <span className="ml-1 block truncate">{selected.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <PlayIcon className="h-2 w-2 mr-1 text-gray-900 transform rotate-90" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition>
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm options">
              {jsonData.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    classNames(
                      active ? 'optionText  text-gray-900' : 'text-gray-900', //bg-indigo-600
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                        >
                          {person.name}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames('text-indigo-600',
                            // active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    </Listbox>
  )
}
