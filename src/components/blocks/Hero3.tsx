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
    <header
      id={_id}
      className="relative h-screen bg-[url('https://raw.githubusercontent.com/klar-templates/agency/master/img/header-bg.jpg')]"
      style={{ backgroundSize: 'cover' }}
      data-field-string-file="image"
      data-placement="top"
      data-offset-top="210"
      data-hide-arrow="true"
      data-wrapper="true"
      no-data-inset="true"
    >
      <div className="container mx-auto">
        <div className="intro-text relative z-10 text-center">
          <div className="intro-lead-in" data-field-string="subtitle">
            {subtitle}
          </div>
          <div className="intro-heading" data-field-string="title">
            {title}
          </div>
          <a
            href="#"
            className="button"
            data-field-string="link_text"
            data-field-string-format-uri="link"
            data-placement="bottom"
          >
            {link_text}
          </a>
        </div>
      </div>
      <div className="bg-black/40 inset-0 absolute"></div>
      <RenderStyle>
        {`
          #${_id} .intro-lead-in {}
          #${_id} .intro-lead-in {}
          #${_id} .intro-text {
            color: #fff;
            padding: 300px 0 200px;
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
            background-color: #e02e3d;
            border-color: #e02e3d;
            color: #ffffff;
            color: white;
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
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
            border-radius: 4px;
            background-color: #fed136;
            border-color: #fed136;
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
        `}
      </RenderStyle>
    </header>
  );
}
