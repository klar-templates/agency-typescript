import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from '../../utils/classNames';

export default function Header3(data: any) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { _id, _type, logo_text, style } = data.block;

  let backgroundImage;

  if (style.gradient && style.gradient !== 'none' && !style.transparent) {
    let direction;
    if (style.gradient === 'bg-gradient-to-t') {
      direction = 'top';
    } else if (style.gradient === 'bg-gradient-to-tr') {
      direction = 'top right';
    } else if (style.gradient === 'bg-gradient-to-r') {
      direction = 'right';
    } else if (style.gradient === 'bg-gradient-to-br') {
      direction = 'bottom right';
    } else if (style.gradient === 'bg-gradient-to-b') {
      direction = 'bottom';
    } else if (style.gradient === 'bg-gradient-to-bl') {
      direction = 'bottom left';
    } else if (style.gradient === 'bg-gradient-to-l') {
      direction = 'left';
    } else if (style.gradient === 'bg-gradient-to-tl') {
      direction = 'top left';
    }
    backgroundImage = `linear-gradient(to ${direction}, ${style.gradient_from}, ${style.gradient_to}`;
  }

  const classes: any = classNames({
    'klar-outline relative z-10': true,
    'bg-background': !style.transparent && style.gradient === 'none',
    dark: style.darkmode,
    'drop-shadow-sm': style.shadow === 'drop-shadow-sm',
    'drop-shadow': style.shadow === 'drop-shadow',
    'drop-shadow-md': style.shadow === 'drop-shadow-md',
    'drop-shadow-lg': style.shadow === 'drop-shadow-lg',
    'drop-shadow-xl': style.shadow === 'drop-shadow-xl',
    'drop-shadow-2xl': style.shadow === 'drop-shadow-2xl',
    // 'bg-none': style.gradient === 'bg-none',
    // 'bg-gradient-to-t': style.gradient === 'bg-gradient-to-t',
    // 'bg-gradient-to-tr': style.gradient === 'bg-gradient-to-tr',
    // 'bg-gradient-to-r': style.gradient === 'bg-gradient-to-r',
    // 'bg-gradient-to-br': style.gradient === 'bg-gradient-to-br',
    // 'bg-gradient-to-b': style.gradient === 'bg-gradient-to-b',
    // 'bg-gradient-to-bl': style.gradient === 'bg-gradient-to-bl',
    // 'bg-gradient-to-l': style.gradient === 'bg-gradient-to-l',
    // 'bg-gradient-to-tl': style.gradient === 'bg-gradient-to-tl',
    'border border-color-outline': false,
  });

  const styles = {
    backgroundColor:
      style.bg_color &&
      !style.transparent &&
      style.bg_color !== 'transparent' &&
      style.gradient === 'none'
        ? style.bg_color
        : '',
    borderBottom: `${style.border_bottom_width}px solid ${
      style.border_bottom_color && style.border_bottom_color !== 'transparent'
        ? style.border_bottom_color
        : 'var(--outline)'
    }`,
    marginBottom: `${style.margin_bottom}px`,
    backgroundImage: backgroundImage,
  };

  if (!style.border_bottom_width) {
    styles['borderBottom'] = 'none';
  }

  return (
    <header className={classes} style={styles}>
      <div className="py-6 container-fluid container-padding-x mx-auto">
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:shrink" aria-label="Global">
            <Link
              to={window.siteConfig.publicPath}
              className="font-logo js-klar-logo text-primary dark:text-primary r-only text-2xl font-bold ext-gray-800 transition-colors duration-300 transform lg:text-3xl"
              data-field-string="logo_text"
            >
              {logo_text}
              {/* <span className="r-only text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Your logo</span> */}
              {/* <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
              {/* <img className="h-8" src="https://demo.kaliumtheme.com/main/wp-content/uploads/2015/03/99c8d4a6236909e8ca6595f17d3beb42.png" alt="" /> */}
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuVisible(true)}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden font-display md:flex md:min-w-0 md:shrink md:justify-end md:gap-x-12">
            {window.klarContext.data.pages.map((page: any, i: any) => (
              <li key={i}>
                <Link
                  to={i === 0 ? window.siteConfig.publicPath : page._path}
                  className={
                    page._id ===
                    (window.klarContext.currentPage &&
                      window.klarContext.currentPage._id)
                      ? 'font-semibold list-none whitespace-nowrap text-primary dark:text-primary'
                      : 'font-semibold text-neutral-900 hover:text-primary dark:text-neutral-200 dark:hover:text-primary list-none whitespace-nowrap'
                  }
                >
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
          </ul>
          {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Log in
            </a>
          </div> */}
        </nav>
        {mobileMenuVisible && (
          <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-4 py-6 md:hidden dark:bg-neutral-900">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                {/* <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a> */}
                <Link
                  to={window.siteConfig.publicPath}
                  className="js-klar-logo text-primary-dark dark:text-primary text-2xl font-bold lg:text-3xl"
                  style={{
                    fontFamily:
                      '"Kaushan Script","Helvetica Neue",Helvetica,Arial,sans-serif',
                  }}
                  data-field-string="logo_text"
                >
                  {logo_text}
                  {/* <span className="r-only text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Your logo</span> */}
                  {/* <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
                  {/* <img className="h-8" src="https://demo.kaliumtheme.com/main/wp-content/uploads/2015/03/99c8d4a6236909e8ca6595f17d3beb42.png" alt="" /> */}
                </Link>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    onClick={() => setMobileMenuVisible(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 font-display">
                  {window.klarContext.data.pages.map((page: any, i: any) => (
                    <li key={i} className={'block'}>
                      <Link
                        to={i === 0 ? window.siteConfig.publicPath : page._path}
                        className={
                          page._id ===
                          (window.klarContext.currentPage &&
                            window.klarContext.currentPage._id)
                            ? '-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 text-primary-dark dark:text-primary'
                            : '-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10 dark:text-white'
                        }
                      >
                        {page._menu_item_name}
                      </Link>
                    </li>
                  ))}
                  {/* {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))} */}
                </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
