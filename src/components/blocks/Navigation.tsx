import { Link } from 'react-router-dom';

export default function Navigation(data: any) {
  const {_id, _type, logo_text, style } = data.block;
  if (!style) {
    return null;
  }
  return (
    <nav id="main-nav" className={`navbar navbar-default navbar-custom navbar-fixed-top ${_type}`}>
      <div className="container">
        <div id={_id} className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            data-field-string="logo_text"
            data-toolbar-buttons="['bold', 'italic', 'underline']"
          >{style.logo.show ? '<img src="${style.logo.image}" alt="Logo" />' : logo_text}</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="hidden">
              <a href="#page-top"></a>
            </li>
            {/* <li className="page-scroll">
              <Link to="/">Startsida</Link>
            </li>
            <li className="page-scroll">
              <Link to="/about">About</Link>
            </li>
            <li className="page-scroll">
              <Link to="/users">Users</Link>
            </li> */}
            {window.klarContext.data.pages.map((page: any, i: any) => 
              <li key={i}>
                <Link
                  className="page-scroll"
                  to={page._path}
                >{page._menu_item_name}</Link>
              </li>
            )}
            {/* {navigation.map((item, index) => 
              <li>
                <a
                  className="page-scroll"
                  href={item.link}
                  target={`${item.open_in_new_page} ? '_blank' : '_self'`}
                  data-field-string={`navigation[${index}].title`}
                  data-field-string-format-uri="navigation[{{loop.index0}}].link"
                  data-placement="bottom"
                >{item.title}</a>
              </li>
            )} */}
          </ul>
        </div>
      </div>
      {style.navbar.show_overlay &&
      <div className="overlay"></div>
      }
      <Style id={_id} style={style} />
    </nav>
    
  );
 
  function Style({id, style}: any) {
    const themeStyle = `
    <!-- Theme CSS -->
    <style>
      .navbar-custom {
        background-color: #222222;
        border-color: transparent;
        margin-bottom: 0;
        top: 0;
      }
      .navbar-custom .container {
        position: relative;
        z-index: 1;
      }
      .navbar-custom .navbar-brand {
        color: #fed136;
        font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
      }
      .navbar-brand > img {
        max-width: 100%;
      }
      .navbar-custom .navbar-brand:hover,
      .navbar-custom .navbar-brand:focus,
      .navbar-custom .navbar-brand:active,
      .navbar-custom .navbar-brand.active {
        color: #fec503;
      }
      .navbar-custom .navbar-collapse {
        border-color: rgba(255, 255, 255, 0.02);
      }
      .navbar-custom .navbar-toggle {
        background-color: #fed136;
        border-color: #fed136;
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        color: white;
        font-size: 12px;
      }
      .navbar-custom .navbar-toggle:hover,
      .navbar-custom .navbar-toggle:focus {
        background-color: #fed136;
      }
      .navbar-custom .nav li a {
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 1px;
        color: white;
      }
      .navbar-custom .nav li a:hover,
      .navbar-custom .nav li a:focus {
        color: #fed136;
        outline: none;
      }
      .navbar-custom .navbar-nav > .active > a {
        border-radius: 0;
        color: white;
        background-color: #fed136;
      }
      .navbar-custom .navbar-nav > .active > a:hover,
      .navbar-custom .navbar-nav > .active > a:focus {
        color: white;
        background-color: #fec503;
      }
      .navbar-custom .overlay {
        background-color: #000000;
        height: 100%;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
        width: 100%;
      }
      @media (min-width: 768px) {
        .navbar-custom {
          background-color: transparent;
          padding: 25px 0;
          -webkit-transition: padding 0.3s;
          -moz-transition: padding 0.3s;
          transition: padding 0.3s;
          border: none;
        }
        .navbar-custom .navbar-brand {
          font-size: 2em;
          -webkit-transition: all 0.3s;
          -moz-transition: all 0.3s;
          transition: all 0.3s;
        }
        .navbar-custom .navbar-nav > .active > a {
          border-radius: 3px;
        }
        .navbar-custom.affix {
          background-color: #222222;
          padding: 10px 0;
        }
        .navbar-custom.affix .navbar-brand {
          font-size: 1.5em;
        }
      }
    </style>

    <!-- Style CSS -->
    <style>
      /* Block */
      .navbar-custom {
        background-color: ${style.navbar.bg_color};
        border-bottom: solid ${style.navbar.border_bottom_width}px ${style.navbar.border_bottom_color};
        ${style.navbar.sticky ? 'position: absolute;' : ''}
      }
      @media (min-width: 768px) {
        .navbar-custom {
          background-color: ${style.navbar.transparent ? 'transparent' : style.navbar.bg_color};
          padding-top: ${style.navbar.padding_top}px;
          padding-bottom: ${style.navbar.padding_bottom}px;
        }
        /* Margin top next block */
        .navbar-custom + *,
        [data-id="{{ block_id}"] + * {
          margin-top: ${style.navbar.margin_top_next_block}px;
        }
      } 
      .navbar-custom.affix {
        background-color: ${style.navbar.bg_color};
      }
      .navbar-custom.affix .overlay {
        opacity: 1;
      }
      .navbar-custom .overlay {
        background-color: ${style.navbar.overlay_bg_color};
        opacity: ${style.navbar.overlay_opacity/100};
      }
      /* Logo */
      .navbar-custom .navbar-brand {
        color: ${style.logo.text_color};
        font-family: "${style.logo.font_family}","Helvetica Neue",Helvetica,Arial,sans-serif;
      }
      {block.style.logo.show &&
        @media (min-width: 768px) {
          .navbar-custom .navbar-brand {
            padding-top: ${style.logo.padding_top}px;
            width:${style.logo.width}px;
          }
        } 
      }
      .navbar-custom .navbar-brand:hover {
        color: ${style.logo.text_hover_color};
      }
      .navbar-custom .navbar-brand:active {
        color: ${style.logo.text_active_color};
      }
      .navbar-custom .navbar-brand:focus {
        color: ${style.logo.text_focus_color};
      }
      /* Navigation */
      .navbar-custom .nav li a {
        color: ${style.navigation.text_color};
      }
      .navbar-custom .nav li a:hover {
        color: ${style.navigation.text_hover_color};
      }
      .navbar-custom .nav li a:focus {
        color: ${style.navigation.text_focus_color};
      }
      .navbar-custom .nav li a {
        background-color: ${style.navigation.bg_text_color};
      }
      .navbar-custom .nav li a:hover {
        background-color: ${style.navigation.bg_text_hover_color};
      }
      .navbar-custom .navbar-nav > .active > a,
      .navbar-custom .navbar-nav > .active > a:hover {
        background-color: ${style.navigation.bg_text_active_color};
      }
      .navbar-custom .navbar-nav > .active > a:focus {
        background-color: ${style.navigation.bg_text_focus_color};
      }
      .navbar-custom .navbar-toggle {
        background-color: ${style.navigation.mobile_menu_button_bg_color};
        border-color: ${style.navigation.mobile_menu_button_bg_color};
      }
      .navbar-custom .navbar-toggle:hover {
        background-color: ${style.navigation.mobile_menu_button_hover_bg_color};
        border-color: ${style.navigation.mobile_menu_button_hover_bg_color};
      }
      .navbar-custom .navbar-toggle:focus {
        background-color: ${style.navigation.mobile_menu_button_focus_bg_color};
        border-color: ${style.navigation.mobile_menu_button_focus_bg_color};
      }
    </style>`;
    return <div dangerouslySetInnerHTML={{__html: themeStyle}} />;
  }
}