import { Link } from 'react-router-dom';

export default function Footer(data: any) {
  const {_id, _type, copyright_text, social_links, quick_links, style, image } = data.block;
  return (
    <footer id={_type}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span
            className="copyright"
            data-field-string="copyright_text"
            dangerouslySetInnerHTML={{__html: copyright_text}}
          />
        </div>
        <div className="col-md-4" style={{position: 'static'}}>
          <ul className="list-inline social-buttons">
            {social_links.map((item: any, i: any) => <li key={i}>
                <a
                  href={item.link}
                  data-field-string-ui-widget-icon="social_links[{{loop.index0}}].icon"
                  data-field-string-format-uri="social_links[{{loop.index0}}].link"
                  data-placement="bottom"
                ><i className={`fa fa-${item.icon}`}></i></a>
              </li>
            )}
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            {quick_links.map((item: any, i: any) => <li key={i}>
                <a
                  href={item.link}
                  data-field-string="quick_links[{{loop.index0}}].title"
                  data-field-string-format-uri="quick_links[{{loop.index0}}].link"
                  data-placement="bottom"
                >{ item.title }</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
    <Style id={_id} type={_type} style={style} image={image} />
  </footer>
  );
 
  function Style({id, style}: any) {
    const themeStyle = `
      <!-- Theme CSS -->
      <style>
      footer {
        padding: 25px 0;
        text-align: center;
      }
      footer span.copyright {
        line-height: 40px;
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        text-transform: none;
      }
      footer ul.quicklinks {
        margin-bottom: 0;
        line-height: 40px;
        font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        text-transform: none;
      }
      footer ul.social-buttons {
        margin-bottom: 0;
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
      </style>

      <!-- Style CSS -->
      <style>
      #${_type} {
        background-color: ${style.block.bg_color};
        padding-top: ${style.block.padding_top}px;
        padding-bottom: ${style.block.padding_bottom}px;
      }
      #${_type} ul.social-buttons li a:hover,
      #${_type} ul.social-buttons li a:focus,
      #${_type} ul.social-buttons li a:active {
        background-color: ${style.social_links_hover_bg_color};
      }
      </style>`;
    return <div dangerouslySetInnerHTML={{__html: themeStyle}} />;
  }
}