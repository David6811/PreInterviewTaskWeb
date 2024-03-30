'use client'
import './SortButton.css'; // Import the CSS file

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon,PlayIcon } from '@heroicons/react/20/solid'

const data = [
  {
    id: 1,
    name: 'Sort by Sale Date',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SortButton() {
  const [selected, setSelected] = useState(data[0])

  return (
    <Listbox value={selected} onChange={setSelected} >
      <>
      <div className="relative selectorContainor">
          <Listbox.Button className="relative w-full bg-white py-1 pl-3 pr-10 text-left text-gray-900 listboxButton_Sort " style={{height:'50px'}}>
            <span className="flex items-center">
              <span className="ml-3 block truncate">{selected.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <PlayIcon className="h-3 w-3 mr-2 text-white text-gray-900 transform rotate-90" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition>
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm options">
              {data.map((person) => (
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
