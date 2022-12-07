import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Header2(data: any) {
  // console.log(window.klarContext.data.pages);
  const { _id, _type, logo_text, style } = data.block;

  return (
    <header className="klar-outline g-background relative z-10 lg:px-8">
      <div className="py-6 mx-auto container">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Link to={window.siteConfig.publicPath} className="-m-1.5 p-1.5">
              <span
                style={{ pointerEvents: 'none' }}
                className="r-only text-2xl font-bold ext-primary-dark text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              >
                {logo_text}
              </span>
              {/* <span className="r-only text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Your logo</span> */}
              {/* <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
              {/* <img className="h-8" src="https://demo.kaliumtheme.com/main/wp-content/uploads/2015/03/99c8d4a6236909e8ca6595f17d3beb42.png" alt="" /> */}
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-12">
            {window.klarContext.data.pages.map((page: any, i: any) => (
              <li
                key={i}
                className={
                  page._id ===
                  (window.klarContext.currentPage &&
                    window.klarContext.currentPage._id)
                    ? 'font-semibold list-none whitespace-nowrap text-primary-dark'
                    : 'font-semibold text-on-background hover:text-gray-900 list-none whitespace-nowrap'
                }
              >
                <Link to={i === 0 ? window.siteConfig.publicPath : page._path}>
                  {page._menu_item_name}
                </Link>
              </li>
            ))}
            {/* {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold text-on-background hover:text-gray-900"
              >
                {item.name}
              </a>
            ))} */}
          </div>
          {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Log in
            </a>
          </div> */}
        </nav>
        <div>
          <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
