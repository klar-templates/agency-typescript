import Button from '../Button';

export default function Card1(data: any) {
  return (
    <article className="antialiased bg-on-surface">
      <div className="">
        {/* <!-- Card --> */}
        <div className="mx-auto">
          <div className="flex flex-col h-full bg-white shadow overflow-hidden">
            {/* <!-- Image --> */}
            <a
              className="block focus:outline-none focus-visible:ring-2"
              href="#0"
            >
              <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  width="320"
                  height="180"
                  alt="Course"
                />
              </figure>
            </a>
            {/* <!-- Card Content --> */}
            <div className="flex-grow flex flex-col p-3 lg:p-4">
              {/* <!-- Card body --> */}
              <div className="flex-grow">
                {/* <!-- Header --> */}
                <header className="mb-3">
                  <a
                    className="block focus:outline-none focus-visible:ring-2"
                    href="#0"
                  >
                    <h3 className="text-[22px] font-bold leading-snug">
                      The Ultimate JavaScript Course åäö
                    </h3>
                  </a>
                </header>
                {/* <!-- Content --> */}
                <div className="mb-8 text-on-surface-variant">
                  <p>
                    The JavaScript course for everyone! Master JavaScript with
                    projects, challenges and theory.
                  </p>
                </div>
              </div>
              {/* <!-- Card footer --> */}
              <div className="flex justify-end space-x-2">
                {/* <a className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a> */}
                <Button
                  {...{
                    to: 'https://www.google.se',
                    type: 'outlined',
                    size: 'sm',
                    target: '_blank',
                  }}
                >
                  Preview
                </Button>
                <Button
                  {...{
                    to: 'https://www.google.se',
                    type: 'filled',
                    size: 'sm',
                    target: '_blank',
                  }}
                >
                  Read more
                </Button>
                {/* <a
                  className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                  href="#0"
                >
                  Read more
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
