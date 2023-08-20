import Image from 'next/image';
import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";

const CounterSection = () => {
    return (
        <div className="flex justify-center items-center mx-auto container px-32 my-32">
            <div className="h-[500px] w-full flex">
                <div className="flex-auto flex flex-col w-2/6">
                    <div className="capitalize text-md font-semibold text-red-600">
                        TECHROITS-ACCELERATION GROWTH
                    </div>
                    <div className="text-3xl font-bold my-10">
                        Our numbers will give you the answer.
                    </div>
                    <div className="flex-1 flex justify-center items-center relative rounded-sm">
                        <Image src={'https://placekitten.com/1600'} alt='image' fill className='rounded-[5px]' />
                    </div>
                </div>
                <div className="flex-auto w-4/6 rounded-3xl rounded-bl-[60px] bg-[url('https://placekitten.com/1400')] bg-cover bg-center">
                    <div className="w-full h-full rounded-3xl rounded-bl-[60px] flex justify-center items-center backdrop-brightness-[0.1] text-white flex-col">
                        <div className="flex-1 flex w-full">
                            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>{" "}
                            <div className="flex-1 flex items-center border-gray-700/30	border-b">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex w-full">
                            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center border-gray-700/30	border-r border-b">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>{" "}
                            <div className="flex-1 flex items-center border-gray-700/30	border-b">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex-1 flex w-full">
                            <div className="flex-1 flex items-center border-gray-700/30	border-r">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center border-gray-700/30	border-r">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>{" "}
                            <div className="flex-1 flex items-center border-gray-700/30">
                                <div className="pl-8">
                                    <PiShoppingCartLight color="red" size="4rem" />
                                </div>
                                <div className="pl-2">
                                    <div className="text-4xl font-bold pb-1">2021</div>
                                    <div className="text-sm">Foundation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterSection