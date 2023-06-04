"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headmoji.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">👾 Hey!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven "}</span> 
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Dallas, TX. I like solving complex problems with creative solutions. 🎮  | ⚽️ | ♟️
          </p>
          <div className="flex justify-center lg:justify-start pt-2 space-x-2 lg:pt-0">

              <a className = "text-xl hover:text-red-500" href="/ramprasadhkumar.pdf" target="_blank" rel="noreferrer">
              {/* <svg xmlns="http://www.w3.org/2000/svg" class = "h-10 w-10 mr-4" fill="currentColor" stroke-width="0.9" width="24" height="24" viewBox="0 0 24 24"><path d="M12.37 5.379l-5.64 5.64c-.655.655-1.515.982-2.374.982-1.855 0-3.356-1.498-3.356-3.356 0-.86.327-1.721.981-2.375l5.54-5.539c.487-.487 1.125-.731 1.765-.731 2.206 0 3.338 2.686 1.765 4.259l-4.919 4.919c-.634.634-1.665.634-2.298 0-.634-.633-.634-1.664 0-2.298l3.97-3.97.828.828-3.97 3.97c-.178.177-.178.465 0 .642.177.178.465.178.642 0l4.919-4.918c1.239-1.243-.636-3.112-1.873-1.874l-5.54 5.54c-.853.853-.853 2.24 0 3.094.854.852 2.24.852 3.093 0l5.64-5.64.827.827zm.637-5.379c.409.609.635 1.17.729 2h7.264v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-8.062c-.63.075-1 .13-2-.133v10.195h10.189c3.163 0 9.811-7.223 9.811-9.614v-14.386h-9.993zm4.993 6h-3.423l-.793.793-.207.207h4.423v-1zm0 3h-6.423l-1 1h7.423v-1zm0 3h-9.423l-.433.433c-.212.213-.449.395-.689.567h10.545v-1z"/></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" className = "h-10 w-10 mr-4" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M8.847 17.875c.191-.211.548-.431.801-.559-.152.3-.366.619-.544.792-.36.353-.556.095-.257-.233zm7.062-12.098c2.047-.478 4.805.28 6.091 1.179-1.494-1.997-5.23-5.708-7.432-6.882 1.156 1.168 1.563 4.235 1.341 5.703zm-4.769 10.21c.328-.109 1.036-.274 1.213-.315-.02-.021-.528-.544-.695-.832-.134.335-.509 1.127-.518 1.147zm.64-4.008c-.057-.278-.263-.299-.326.024-.057.296.029.771.129 1.061.113-.237.255-.805.197-1.085zm10.22-.979v13h-20v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.42 8.256 3zm-6.98 4.413c-.526-.077-1.272.009-1.797.093-.385-.325-.866-.817-1.233-1.472.253-.652.415-1.168.483-1.536.354-1.919-1.979-2.072-1.729-.012.066.549.222 1.082.464 1.588-.286.709-.651 1.508-1.018 2.232-.811.307-1.396.627-1.742.954-1.212 1.143.295 2.661 1.438 1.014.274-.395.581-.955.811-1.396.717-.253 1.551-.475 2.33-.618.509.39 1.322.896 1.972.896 1.239.001 1.417-1.538.021-1.743zm-.104.704c-.2-.03-.488-.03-.829-.002.235.158.558.323.911.33.412.008.377-.26-.082-.328z"/></svg>
              </a>

              <a className = "text-xl hover:text-gray-500" href="https://github.com/ramprasadhkumar" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className = "h-10 w-10 mr-4" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>

              <a className = "text-xl hover:text-linkedin-blue" href="https://linkedin.com/in/ramprasadhkumar" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className = "h-10 w-10 mr-4" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

              <a className = "text-xl hover:text-google-red" href="mailto:ramprasadhkumar@gmail.com" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className = "h-10 w-10 mr-4" width="24" height="24" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"/></svg>
              </a>

              <a className = "text-xl hover:text-steam-blue" href="https://steamcommunity.com/id/donorover/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className = "h-10 w-10 mr-4" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0 6.627-5.373 12-12 12-5.782 0-10.608-4.091-11.744-9.537l4.764 2.003c.285 1.441 1.56 2.547 3.115 2.534 1.723-.017 3.105-1.414 3.116-3.129l.007-.003 3.602-2.684c2.304.024 4.14-1.833 4.14-4.091 0-2.26-1.834-4.093-4.093-4.093-2.234 0-4.048 1.791-4.09 4.015l-2.64 3.693c-.668-.014-1.269.169-1.791.51l-6.294-2.646c.708-5.953 5.765-10.572 11.908-10.572 6.627 0 12 5.373 12 12zm-16.577 5.477l-1.544-.649c.38.858 1.236 1.461 2.249 1.457 1.346-.012 2.422-1.11 2.41-2.455-.012-1.329-1.104-2.41-2.432-2.41-.287.001-.57.05-.86.16l1.542.648c.898.378 1.319 1.411.941 2.308-.376.896-1.409 1.318-2.306.941zm7.484-5.602c-1.533 0-2.781-1.249-2.781-2.782 0-1.534 1.248-2.782 2.781-2.782 1.534 0 2.781 1.248 2.781 2.782 0 1.533-1.247 2.782-2.781 2.782zm0-.682c1.159 0 2.1-.942 2.1-2.101 0-1.158-.94-2.102-2.1-2.102s-2.102.943-2.102 2.102c.001 1.159.943 2.101 2.102 2.101z"/></svg>
              </a> 

          </div>
        </div>
         
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
