"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SignInPage = () => {
    return (
        <div className="h-screen w-screen flex bg-white">
            {/* LEFT */}
            <div className="w-[100%] lg:w-[50%] xl:w-[50%] p-4 flex flex-col">
                <div className="h-screen flex flex-col items-center justify-center">
                    {/* Back button */}
                    <div className="flex w-full h-fit">
                        <Link href="/" className="">
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="cursor-pointer fa-2x text-black"
                            />
                        </Link>
                    </div>
                    <div className="grid w-full flex-grow items-center bg-white px-4 sm:justify-center">
                        <SignIn.Root>
                            <SignIn.Step
                                name="start"
                                className="relative isolate w-full space-y-8 rounded-2xl bg-white px-4 py-10  sm:w-96 sm:px-8">
                                <header className="flex flex-col items-center justify-center">
                                    <Image
                                        src="/logo.svg"
                                        alt="logo image"
                                        width={150}
                                        height={150}
                                    />
                                    <h1 className="mt-4 text-xl font-medium tracking-tight text-Black">
                                        Ingresa a Be Curly
                                    </h1>
                                </header>
                                <Clerk.GlobalError className="block text-sm text-rose-400" />
                                <Clerk.Field
                                    name="identifier"
                                    className="group/field relative">
                                    <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-white px-2 font-mono text-xs/4 text-gray-400  group-focus-within/field:text-pink-400 group-data-[invalid]/field:text-rose-400">
                                        Email
                                    </Clerk.Label>
                                    <Clerk.Input
                                        type="text"
                                        required
                                        className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-black ring-1 ring-inset ring-gray-400 hover:ring-gray-600 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
                                    />
                                    <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
                                </Clerk.Field>
                                <Clerk.Field
                                    name="password"
                                    className="group/field relative">
                                    <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-white px-2 font-mono text-xs/4 text-gray-500  group-focus-within/field:text-pink-400 group-data-[invalid]/field:text-rose-400">
                                        Password
                                    </Clerk.Label>
                                    <Clerk.Input
                                        type="password"
                                        required
                                        className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-black ring-1 ring-inset ring-gray-400 hover:ring-gray-600 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
                                    />
                                    <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
                                </Clerk.Field>

                                <SignIn.Action
                                    submit
                                    className="relative w-full flex items-center justify-center h-10 rounded-md bg-gradient-to-r from-pink-400 via-pink-300 to-gray-400 p-[2px] text-gray-700 font-bold hover:shadow-md hover:text-white hover:shadow-gray-400/30 group">
                                    <div className="rounded-md bg-white h-full w-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-black">
                                        Sign In
                                    </div>
                                </SignIn.Action>
                            </SignIn.Step>
                        </SignIn.Root>
                    </div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="hidden lg:block w-[50%] xl:w-[50%] bg-[#F7F8FA] h-[100%] relative overflow-hidden">
                <Image
                    src="/curly.jpg"
                    alt=""
                    fill
                    className="object-cover absolute top-1/2 left-1/2 -translate-x-1.2 -translate-y-1.2"
                />
            </div>
        </div>
    );
};

export default SignInPage;
