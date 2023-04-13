import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import BaseLabel from "@/components/BaseLabel";
import BaseTextArea from "@/components/BaseTextArea";
import MainLayout from "@/layouts/MainLayout";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const selectList = [
  { title: "Популярное" },
  { title: "Свежее" },
  { title: "Моя лента" },
];

const SettingsPage = () => {
  const router = useRouter();
  const [name, setName] = React.useState("Владислав Сергеевич");
  const [descrition, setDescription] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(selectList[0]);
  console.log(name, selectedItem);

  return (
    <>
      <Head>
        <title>Настройки</title>
      </Head>
      <MainLayout hideComments fullWidthConteiner>
        <div className="grid grid-cols-3 gap-5">
          <div className="p-5 bg-white rounded-xl shadow-sm col-span-2 flex flex-col gap-5">
            <div className="cursor-pointer" onClick={() => router.back()}>
              <ChevronLeftIcon className="w-6 h-6 text-slate-700" />
            </div>

            <div className="flex flex-col gap-2">
              <BaseLabel title="Отображаемое имя" />
              <BaseInput value={name} valueOnChange={setName} />
            </div>

            <div className="flex flex-col gap-2 hidden">
              <BaseLabel title="Описание к блогу" />
              <BaseTextArea
                value={descrition}
                valueOnChange={setDescription}
                placeholder="Пара слов о себе"
                resize
              />
            </div>

            <div className="flex flex-col gap-2">
              <BaseLabel title="Лента по умолчанию" />
              <Listbox value={selectedItem} onChange={setSelectedItem}>
                <div className="relative">
                  <Listbox.Button className="relative w-full rounded-lg py-3 pl-3 text-left shadow-sm border border-gray-300 focus:outline-none  sm:text-sm">
                    <span className="block truncate">{selectedItem.title}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md p-1 text-base shadow-sm bg-white border border-gray-100 focus:outline-none sm:text-sm">
                      {selectList.map((item) => (
                        <Listbox.Option
                          key={item.title}
                          className={({ active }) =>
                            `relative select-none py-2 pl-10 pr-4 cursor-pointer rounded-md text-gray-700 ${
                              active ? "bg-gray-100" : "text-gray-9000"
                            }`
                          }
                          value={item}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item.title}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            <div className="flex justify-end">
              <BaseButton title="Сохранить" type="blue" />
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl shadow-sm col-span-1">
            222
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default SettingsPage;
