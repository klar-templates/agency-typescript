export default function Card(data: any) {
  return (
    <article className="bg-background text-on-background md: md: md: lg: xl:">
      <a
        className="block focus:outline-none focus-visible:ring-2 mb-4"
        href="#0"
      >
        <figure className="relative h-0 pb-[56.25%] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW0lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            width="320"
            height="180"
            alt="Course"
          />
        </figure>
      </a>
      <div>
        <header>
          <div className="mb-2">
            <ul className="flex gap-2 flex-wrap text-xs font-medium">
              <li>
                <a
                  className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Engineering
                </a>
              </li>
            </ul>
          </div>
          <h3 className="text-2xl lg:text-2xl font-bold leading-tight mb-2">
            <a
              className="hover:text-on-surface-variant transition duration-150 ease-in-out"
              href="#0"
            >
              Designing a functional workflow at home.
            </a>
          </h3>
        </header>
        <p className=" text-on-surface-variant flex-grow">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
        </p>
        <footer className="flex items-center mt-4">
          <a href="#0">
            <img
              className="rounded-full flex-shrink-0 mr-4"
              src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
              width="40"
              height="40"
              alt="Author 04"
            />
          </a>
          <div className="">
            <a
              className="font-medium text-on-surface hover:text-on-surface-variant transition duration-150 ease-in-out"
              href="#0"
            >
              Chris Solerieu
            </a>
            <span className="text-on-surface"> - </span>
            <span className="text-on-surface-variant">Jan 19, 2020</span>
          </div>
        </footer>
      </div>
    </article>
  );
}
