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
      id="header-1669053487845"
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
          <div
            className="medium-editor-element intro-lead-in text-white text-5xl italic mb-4"
            data-field-string="subtitle"
            data-medium-editor-element="true"
            role="textbox"
            aria-multiline="true"
            data-medium-editor-editor-index="7"
            medium-editor-index="352d0493-24a3-cc4c-444d-7bf82c7e87ba"
            data-placeholder="Type your text"
          >
            Edit everything on this site and if you like it...
          </div>
          <div
            className="medium-editor-element intro-heading text-white text-7xl"
            data-field-string="title"
            data-medium-editor-element="true"
            role="textbox"
            aria-multiline="true"
            data-medium-editor-editor-index="8"
            medium-editor-index="6feeda9b-a28a-d678-103a-dd11e400dd45"
            data-placeholder="Type your text"
          >
            Create an account and start making your own web sites
          </div>
          <a
            href="#services-1669053520380"
            className="medium-editor-element btn"
            data-field-string="link_text"
            data-field-string-format-uri="link"
            data-placement="bottom"
            data-medium-editor-element="true"
            role="textbox"
            aria-multiline="true"
            data-medium-editor-editor-index="9"
            medium-editor-index="cd663e4a-61ec-913f-a6ba-fecb5b3c03c1"
            data-placeholder="Type your text"
          >
            Tell me more
          </a>
        </div>
      </div>
      <div className="bg-black/40 inset-0 absolute"></div>
      <RenderStyle>
        {`
          
          #header-1669053487845 .intro-lead-in {}
          #header-1669053487845 .intro-lead-in {}
          #header-1669053487845 .intro-text {
            padding: 300px 0 200px;
          }
          #header-1669053487845 .intro-lead-in {
            font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-style: italic;
            font-size: 40px;
            line-height: 40px;
            margin-bottom: 25px;
          }
          #header-1669053487845 .intro-heading {
            font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 75px;
            line-height: 75px;
            margin-bottom: 50px;
          }
          #header-1669053487845 .btn {
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
