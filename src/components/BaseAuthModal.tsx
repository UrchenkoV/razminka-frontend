import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  InboxIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { FC, Fragment } from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

interface IBaseAuthModal {
  visible: boolean;
  onClose: () => void;
}

const BaseAuthModal: FC<IBaseAuthModal> = ({ visible, onClose }) => {
  const [formType, setFormType] = React.useState<"main" | "email">("main");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {formType === "main" && (
                  <>
                    <button
                      type="button"
                      className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-500 duration-300 focus:outline-none"
                      onClick={onClose}
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </button>{" "}
                    <div className="my-10 flex flex-col gap-4">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                      >
                        Вход
                      </Dialog.Title>
                      <div className="flex flex-col gap-3">
                        <div
                          onClick={() => setFormType("email")}
                          className="grid grid-cols-3 shadow-sm hover:shadow-md duration-300 rounded-lg border border-gray-100 cursor-pointer p-3"
                        >
                          <div className="">
                            <InboxIcon className="w-6 h-6" />
                          </div>
                          <div className="font-medium text-center">
                            По почте
                          </div>
                        </div>
                        <div className="grid grid-cols-3 shadow-sm hover:shadow-md duration-300 rounded-lg border border-gray-100 cursor-pointer p-3">
                          <div className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              className="w-7 h-7"
                            >
                              <path
                                fill="#1976d2"
                                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
                              />
                              <path
                                fill="#fff"
                                d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z"
                              />
                            </svg>
                          </div>
                          <div className="font-medium text-center">
                            ВКонтакте
                          </div>
                        </div>
                        <div className="grid grid-cols-3 shadow-sm hover:shadow-md duration-300 rounded-lg border border-gray-100 cursor-pointer p-3">
                          <div className="">
                            <svg
                              className="w-7 h-7"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              />
                              <path
                                fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              />
                              <path
                                fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              />
                              <path
                                fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              />
                            </svg>
                          </div>
                          <div className="font-medium text-center">Google</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {formType === "email" && (
                  <>
                    <div
                      onClick={() => setFormType("main")}
                      className="inline-flex gap-3 items-center text-gray-500 cursor-pointer"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                      Назад
                    </div>
                    <div className="my-10 flex flex-col gap-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                      >
                        Вход в аккаунт
                      </Dialog.Title>

                      <BaseInput
                        value={email}
                        valueOnChange={setEmail}
                        placeholder="Почта"
                      />
                      <BaseInput
                        value={password}
                        valueOnChange={setPassword}
                        placeholder="Пароль"
                      />
                      <BaseButton
                        title="Войти"
                        type="blue"
                        isDisabled={!Boolean(email)}
                      />
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BaseAuthModal;
