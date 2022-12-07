import Button from '../elements/Button';
import RenderStyle from '../RenderStyle';

export default function Hero3(data: any) {
  const {
    _id,
    _type,
    show_button,
    show_subtitle,
    show_title,
    title,
    subtitle,
    link,
    link_text,
    style,
    image,
  } = data.block;
  return (
    <>
      <header
        id={_id}
        className={`klar-outline ${_type}`}
        data-field-string-file="image"
        data-placement="top"
        data-offset-top="210"
        data-hide-arrow="true"
        data-wrapper="true"
        no-data-inset="true"
      >
        <div className="container">
          <div className="intro-text">
            {show_subtitle && (
              <div
                className="intro-lead-in ont-serif"
                data-field-string="subtitle"
                data-placeholder="Text för lead-in"
              >
                {subtitle}
              </div>
            )}
            {show_title && (
              <div className="intro-heading ont-sans" data-field-string="title">
                {title}
              </div>
            )}
            {show_button && (
              <a
                href="#"
                className="button"
                data-field-string="link_text"
                data-field-string-format-uri="link"
                data-placement="bottom"
              >
                {link_text}
              </a>
            )}
          </div>
        </div>
        <div className="background"></div>
      </header>
      <RenderStyle>
        {`
          #${_id} {
            position: relative;
            background-image: url('${image}');
            margin-top: 0px;
            height: 100vh;
            background-position: 0 0px;
            text-align: center;
            background-size: cover;
          }
          #${_id} .container {
            margin: 0 auto;
          }
          #${_id} .intro-text {
            color: #fff;
            padding: 300px 0 200px;
            position: relative;
            z-index: 1;
            text-align: center;
          }
          #${_id} .intro-lead-in {
            font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-style: italic;
            font-size: 40px;
            line-height: 40px;
            margin-bottom: 25px;
          }
          #${_id} .intro-heading {
            font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 75px;
            line-height: 75px;
            margin-bottom: 50px;
          }
          #${_id} .button {
            display: inline-block;
            margin-bottom: 0;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            font-weight: 700;
            border-radius: 3px;
            font-size: 18px;
            padding: 20px 40px;
            background-color: #e02e3d;
            border-color: #e02e3d;
            color: #ffffff;
          }
          #${_id} .background {
            background-color: rgba(0, 0, 0, 0.4);
            inset: 0;
            position: absolute;
          }
        `}
      </RenderStyle>
    </>
  );
}
