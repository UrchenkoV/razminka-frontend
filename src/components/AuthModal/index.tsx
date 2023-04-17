import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment } from "react";
import AuthModalLoginForm from "./AuthModalLoginForm";
import AuthModalRegisterForm from "./AuthModalRegisterForm.";
import AuthModalButtons from "./AuthModalButtons";

interface IAuthModal {
  visible: boolean;
  onClose: () => void;
}

const AuthModal: FC<IAuthModal> = ({ visible, onClose }) => {
  const [formType, setFormType] = React.useState<
    "mainLogin" | "mainRegister" | "loginForm" | "registerForm"
  >("mainLogin");

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
                {(formType === "mainLogin" || formType === "mainRegister") && (
                  <button
                    type="button"
                    className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-500 duration-300 focus:outline-none"
                    onClick={onClose}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                )}

                {(formType === "loginForm" || formType === "registerForm") && (
                  <div
                    onClick={() =>
                      setFormType(
                        formType === "loginForm"
                          ? "mainLogin"
                          : formType === "registerForm"
                          ? "mainRegister"
                          : "mainLogin"
                      )
                    }
                    className="inline-flex gap-3 items-center text-gray-500 cursor-pointer"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                    Назад
                  </div>
                )}

                <div className="my-10 flex flex-col gap-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    {(formType === "mainLogin" || formType === "loginForm") &&
                      "Вход в аккаунт"}
                    {(formType === "mainRegister" ||
                      formType === "registerForm") &&
                      "Регистрация"}
                  </Dialog.Title>

                  {(formType === "mainLogin" ||
                    formType === "mainRegister") && (
                    <AuthModalButtons
                      onFormType={() =>
                        setFormType(
                          formType === "mainLogin"
                            ? "loginForm"
                            : formType === "mainRegister"
                            ? "registerForm"
                            : "mainLogin"
                        )
                      }
                    />
                  )}

                  {formType === "loginForm" && <AuthModalLoginForm />}

                  {formType === "registerForm" && <AuthModalRegisterForm />}

                  <div className="flex gap-2">
                    {(formType === "mainLogin" || formType === "loginForm") &&
                      "Нет аккаунта?"}
                    {(formType === "mainRegister" ||
                      formType === "registerForm") &&
                      "Есть аккаунт?"}
                    <span
                      onClick={() =>
                        setFormType(
                          formType === "mainLogin" || formType === "loginForm"
                            ? "mainRegister"
                            : formType === "mainRegister" ||
                              formType === "registerForm"
                            ? "mainLogin"
                            : "mainLogin"
                        )
                      }
                      className="text-blue-700 hover:text-blue-500 duration-300 cursor-pointer"
                    >
                      {(formType === "mainLogin" || formType === "loginForm") &&
                        "Зарегистрируйтесь"}
                      {(formType === "mainRegister" ||
                        formType === "registerForm") &&
                        "Войти"}
                    </span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AuthModal;
