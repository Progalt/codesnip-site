import "./Styles.css";
import UserNav from "./Components/UserNav";
import HomeClient from "./homeClient";

import { Source_Code_Pro } from 'next/font/google'
import { createClient } from "./utils/supabase/server";
import Card, { CardDescription, CardHeader, CardTitle } from "./progui/Card";

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
})
 
function Dividor() {
  return <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#232333]"/>;
}

export default async function Home() {

  return (
    <main className="bg-gradient-mobile w-full min-h-screen flex flex-col relative">
      {/* <div className="background-svg opacity-40 md:opacity-50 bg-[length:200%] md:bg-[length:100%] lg:bg-[length:80%] xl:bg-[length:50%]" /> */}
      <nav className="hidden md:block w-full top-0 sticky backdrop-blur-xl backdrop-saturate-150 z-50">
        <UserNav/>
        <Dividor />
      </nav>
      <nav className=" md:hidden absolute w-full">
        <UserNav />
      </nav>

      <div className="mt-12 md:mt-0 flex flex-col flex-grow justify-between transition-transform duration-150">
        <section className="w-full flex flex-col justify-start items-center">
          
          <section className="px-5 w-full md:w-[80%] lg:w-[70%] 2xl:w-[40%]">
              <section className="h-[calc(100vh_-_64px)]  flex flex-col justify-center items-start">
                <header className=" md:mb-14">
                  <h1 className="text-4xl md:text-6xl font-semibold">
                    Quickly get <br />problems to test <br />your
                    <span className={"font-extrabold text-brand-500 bg-gradient-to-b from-[#5DFDCB] to-brand-500 text-transparent bg-clip-text"}> coding skills.
                    </span>
                  </h1>
                
                  <h2 className="md:text-xl text-lg mt-8 text-slate-300">Select a difficulty and a language and start coding!<br />No sign up needed, just code. </h2>

                </header>

                <HomeClient />
                        
              </section>
            
            <section id="challenge" className="mt-20">
              <div className="mb-2 text-center w-36 py-1 rounded-full bg-[#FF705B]/20 text-[#FF705B] text-sm">Fancy a challenge?</div>
              <h2 className="text-3xl md:text-4xl font-semibold">Complete a <span className="font-extrabold  bg-gradient-to-tl from-[#FFB457] to-[#FF705B] text-transparent bg-clip-text">Daily challenge.</span></h2>
              <h3 className="mt-5 md:text-xl text-slate-300 text-lg">
                Take on a fresh challenge daily that isn&apos;t in the main question pool.
              </h3>
              <p className="mt-3 text-slate-300 text-lg md:text-xl">Questions are new for the day then get added to the question pool so you can always come back to it later.</p>
            </section>
            
            <section className="mt-10 mb-10 flex flex-row justify-center items-center">
              <div className="border-2 border-slate-800 rounded-xl shadow-[0_0_20px_0] shadow-brand-500/50 p-2 px-8 bg-[#13131d] font-semibold">Coming Soon</div>
            </section>
          </section>

        </section>
      <footer className="flex-shrink-0 mb-6 mt-6">
          <section className="flex flex-row justify-center items-center">
            <p className="text-slate-300">You can view the source on</p>
            <a href="https://github.com/Progalt/portfolio-react" target="_blank" className="ml-1 text-[#FF705B] hover:text-white transition-all duration-150">Github</a>
          </section>
          <p className="mt-3 flex flex-row justify-center items-center text-slate-300 text-sm">Copyright © 2024, Henry Gronow</p>
        </footer>
      </div>
     
    </main>
  );
}  