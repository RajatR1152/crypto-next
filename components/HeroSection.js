import React from 'react'

export default function HeroSection() {
  return (
    <div className="container w-full h-[1100px] md:h-screen">

            {/* <Header /> */}

            <div className="container mx-auto overflow-x-hidden w-full h-full">

                <div className="container w-full h-1/6">
                    <div data-aos="fade-left" className="container w-3/12 h-[300px] ms-auto rounded-full blur-[150px] bg-[#16d33582]"></div>
                </div>

                <div className="container w-full h-4/6">

                    <div className="container w-full absolute">
                        <marquee behavior="scroll" direction="right" style={{ WebkitTextStroke: '1px #24EF9F', WebkitTextFillColor: "transparent" }} className="text-[200px] text-center font-bold m-0 tracking-[70px] uppercase">crypto</marquee>
                        <marquee behavior="scroll" direction="left" style={{ WebkitTextStroke: '1px #24EF9F', WebkitTextFillColor: "transparent" }} className="text-[200px] text-center font-bold m-0 tracking-[70px] uppercase">crypto</marquee>
                        <marquee behavior="scroll" direction="right" style={{ WebkitTextStroke: '1px #24EF9F', WebkitTextFillColor: "transparent" }} className="text-[200px] text-center font-bold m-0 tracking-[70px] uppercase">crypto</marquee>
                    </div>

                    <div className="container w-full flex flex-col md:flex-row xl:h-5/6 absolute">

                        <div data-aos="fade-right" className="container flex flex-col gap-8 items-center justify-center w-full md:w-7/12 h-full p-5">
                            <div className="container h-fit xl:w-10/12 ms-auto">
                                <h1 className="text-4xl xl:text-6xl font-bold text-center md:text-end text-white capitalize">buy and sell cryptocurrencies at </h1>
                                <h1 className="text-6xl xl:text-8xl font-bold text-center md:text-end text-white capitalize">market price </h1>
                            </div>

                            <p className="text-lg font-semibold md:w-7/12 text-center md:text-right ms-auto text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus vero modi quibusdam eius iusto at, nisi maxime quo quisquam labore nesciunt omnis dignissimos quos commodi cumque possimus expedita corrupti.
                            </p>

                            <div className="container w-fit ms-auto flex">
                                <button className="rounded-tl-3xl px-8 py-3 border-0 bg-[#50ED97] text-lg font-bold text-black">Explore more</button>
                                <button className="rounded-br-3xl px-8 py-3 border-2 border-[#50ED97] text-[#50ED97] border-s-0 text-lg font-bold">Trade now</button>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="container overflow-x-auto w-full md:w-5/12 flex items-center justify-center">
                            <img src="https://crypto-nextjs-five.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroImg.50bc50f1.webp&w=1920&q=75" alt="" className=" w-full ms-auto" />
                        </div>

                    </div>

                </div>

                <div data-aos="fade-right" className="container w-full h-1/6">
                    <div className="container w-4/12 h-[300px] absolute rounded-full blur-[150px] bg-[#00ffff77]"></div>
                </div>

            </div>

        </div>

  )
}
