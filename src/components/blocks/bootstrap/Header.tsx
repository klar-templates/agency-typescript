export default function Header(data: any) {
  const {_id, _type, show_button, show_subtitle, show_title, title, subtitle, link, link_text, style, image } = data.block;
  return (
    <header
      id={_id}
      className={`${_type} klar-outline`}
      data-field-string-file="image"
      data-placement="top"
      data-offset-top="210"
      data-hide-arrow="true"
      data-wrapper="true"
      no-data-inset="true">
      <div className="container">
        <div className="intro-text">
          { show_subtitle &&
            <div
              className="intro-lead-in"
              data-field-string="subtitle"
            >{subtitle}</div>
          }
          {show_title &&
            <div
              className="intro-heading"
              data-field-string="title"
            >{title}</div>
          }
          {show_button &&
            <a
              href={link }
              className="page-scroll btn btn-xl"
              data-field-string="link_text"
              data-field-string-format-uri="link"
              data-placement="bottom"
            >{link_text}</a>
          }
        </div>
      </div>
      {style.show_overlay &&
        <div className="overlay"></div>
      }
      <Style id={_id} style={style} image={image} />
    </header>
  );
 
  function Style({id, style}: any) {
    const themeStyle = `
    <!-- Theme CSS -->
    <style>
    #${id} {
      color: white;
      background-image: url('../img/header-bg.jpg');
      background-repeat: no-repeat;
      background-attachment: scroll;
      background-position: center center;
      background-position: 0 0;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;
      -o-background-size: cover;
      text-align: center;
      position: relative;
    }
    #${id} .intro-text {
      padding-top: 100px;
      padding-bottom: 50px;
      position: relative;
      z-index: 1;
    }
    #${id} .intro-text .intro-lead-in {
      font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-style: italic;
      font-size: 22px;
      line-height: 22px;
      margin-bottom: 25px;
    }
    #${id} .intro-text .intro-heading {
      font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 50px;
      line-height: 50px;
      margin-bottom: 25px;
    }
    #${id} .overlay {
      background-color: #000000;
      height: 100%;
      left: 0;
      opacity: 1;
      position: absolute;
      top: 0;
      width: 100%;
    }
    @media (min-width: 768px) {
      #${id} {
        
      }
      #${id} .intro-text {
        padding-top: 300px;
        padding-bottom: 200px;
      }
      #${id} .intro-text .intro-lead-in {
        font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-style: italic;
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 25px;
      }
      #${id} .intro-text .intro-heading {
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 75px;
        line-height: 75px;
        margin-bottom: 50px;
      }
    }
    </style>

    <!-- Style CSS -->
    <style>
    #${id} {
      background-image: url(${image});
      background-position: 0 ${style.bg_image_position_top}px;
      text-align: ${style.text_align};
    }
    #${id} .intro-text .intro-lead-in {
      color: ${style.subtitle_text_color};
    }
    #${id} .intro-text .intro-heading {
      color: ${style.title_text_color};
    }
    #${id} .btn-xl,
    #${id} .btn-xl:hover,
    #${id} .btn-xl:focus,
    #${id} .btn-xl:active {
      background-color: ${style.button_bg_color};
      border-color: ${style.button_bg_color};
      color: ${style.button_text_color};
    }
    #${id} .overlay {
      background-color: ${style.overlay_bg_color};
      opacity: ${style.overlay_opacity/100};
    }
    @media (min-width: 768px) {
      #${id} {
        margin-top: ${style.margin_top}px;
        ${style.full_screen ? 'height: 100vh;': ''}
      }
      #${id} .intro-text {
        margin-top: ${style.margin_top}px;
        padding-top: ${style.padding_top}px;
        padding-bottom: ${style.padding_bottom}px;
      }
    }
    </style>`;
    return <div dangerouslySetInnerHTML={{__html: themeStyle}} />;
  }
}