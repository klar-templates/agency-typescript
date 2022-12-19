import { Link } from 'react-router-dom';
import Container from '../elements/layout/Container';
import Grid from '../elements/layout/Grid';

export default function Footer(data: any) {
  const {
    _id,
    _type,
    copyright_text,
    social_links,
    quick_links,
    style,
    image,
  } = data.block;
  return (
    <footer className="text-center lg:text-left">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div>
            <span
              className="copyright"
              data-field-string="copyright_text"
              dangerouslySetInnerHTML={{ __html: copyright_text }}
            />
          </div>
          <div className="social-buttons-wrapper lg:text-center">
            <ul className="social-buttons">
              {social_links.map((item: any, i: any) => (
                <li key={i}>
                  <a
                    href={item.link}
                    data-field-string-ui-widget-icon={`social_links[${i}].icon`}
                    data-field-string-format-uri={`social_links[${i}].link`}
                    data-placement="bottom"
                  >
                    <i className={`fa fa-${item.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:text-right">
            <ul className="quicklinks font-display">
              {quick_links.map((item: any, i: any) => (
                <li key={i}>
                  <a
                    href={item.link}
                    data-field-string={`quick_links[${i}].title`}
                    data-field-string-format-uri={`quick_links[${i}].link`}
                    data-placement="bottom"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Style id={_id} type={_type} style={style} image={image} />
    </footer>
  );

  function Style({ id, style }: any) {
    const themeStyle = `
      <!-- Theme CSS -->
      <style>
      footer {
        padding: 25px 0;
      }
      footer .copyright {
        line-height: 40px;
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        text-transform: none;
      }
      footer .social-buttons-wrapper {
        min-height: 1px;
      }
      footer ul.social-buttons {
        display: flex;
        list-style: none;
        justify-content: center;
        gap: 10px;
      }
      footer ul.social-buttons li {
        
      }
      footer ul.social-buttons li a {
        display: block;
        background-color: #222222;
        height: 40px;
        width: 40px;
        border-radius: 100%;
        font-size: 20px;
        line-height: 40px;
        color: white;
        outline: none;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
      }
      footer ul.social-buttons li a:hover,
      footer ul.social-buttons li a:focus,
      footer ul.social-buttons li a:active {
        background-color: #fed136;
      }
      footer ul.quicklinks {
        margin-bottom: 0;
        line-height: 40px;
        text-transform: uppercase;
        text-transform: none;
      }
      footer ul.quicklinks li {
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
      }
      </style>

      <!-- Style CSS -->
      <style>
      footer {
        background-color: ${style.block.bg_color};
        padding-top: ${style.block.padding_top}px;
        padding-bottom: ${style.block.padding_bottom}px;
      }
      footer .social-buttons li a:hover,
      footer .social-buttons li a:focus,
      footer .social-buttons li a:active {
        background-color: ${style.social_links_hover_bg_color};
      }
      </style>`;
    return <div dangerouslySetInnerHTML={{ __html: themeStyle }} />;
  }
}
