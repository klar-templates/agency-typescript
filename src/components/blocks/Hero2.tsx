export default function Hero2(data: any) {
  const {_id, _type, show_button, show_subtitle, show_title, title, subtitle, link, link_text, style, image } = data.block;
  return (
    <div className="g-background relative">
      <div className="relative mx-auto container px-4 pt-16 sm:px-10 lg:pt-20">
        <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col lg:pb-6">
            <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">Transmit</h1>
            <p className="order-first text-base font-semibold leading-7 text-primary">Podcast template</p>
            <p className="mt-6 text-base leading-7 text-on-surface">You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.</p>
            <div className="flex flex-wrap mt-6">
              <div className="flex items-center text-sm font-medium text-on-surface-variant">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-current text-slate-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                  <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"></ellipse>
                  <ellipse rx="13" ry="5" transform="matrix(-.5 .86603 .86603 .5 16 16)"></ellipse>
                  <circle cx="16" cy="16" r="2"></circle>
                </svg>
                <span className="ml-2.5">React</span>
              </div>
            <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-current text-slate-400" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round">
                <defs>
                  <linearGradient id="next-icon-gradient-a" x1="15.125" y1="18.25" x2="24.25" y2="27.375" gradientUnits="userSpaceOnUse"><stop offset=".24"
                  stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="next-icon-gradient-b" x1="20.5" y1="11.25" x2="20.5" y2="18.25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
                    </linearGradient></defs><path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path>
                    <path d="M12 21.5V12l12.25 14.25" stroke="url(#next-icon-gradient-a)"></path>
                    <path d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z" fill="url(#next-icon-gradient-b)" strokeWidth="0"></path>
              </svg>
              <span className="ml-2.5">Next.js</span>
            </div>
                </div><div className="mt-10 flex gap-4">
                  <a href="https://transmit.tailwindui.com" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank">
                    <span><span className="inline-flex items-center"><span>Live preview</span>
                    <svg viewBox="0 0 20 20" className="ml-1.5 h-5 w-5 fill-slate-400" fillRule="evenodd" clipRule="evenodd">
                      <path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path>
                  </svg></span></span></a><a href="#pricing" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
              <span>Get this template <span aria-hidden="true" className="text-black/25">→</span></span></a>
              </div>
              </div><div className="relative lg:col-span-2">
                <img src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" 
                className="relative z-20 -mb-36 rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"/>
                <div className="z-0 hidden md:block">
                  <div className="absolute -top-4 -right-12 -left-12 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                    </div><div className="absolute -top-12 bottom-0 -left-4 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -top-12 bottom-0 -right-4 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                    <div className="absolute -top-12 right-10 mt-px flex h-8 items-end overflow-hidden">
                  <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                </div><div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
                  </div></div></div><div className="absolute bottom-0 -left-48 flex h-8 items-end overflow-hidden">
                  <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                    <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
      </div>
    </div>
  );
}