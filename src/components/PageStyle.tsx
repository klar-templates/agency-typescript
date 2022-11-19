export default function PageStyle(data: any) {
  return (
    <Style theme={data.theme} />
  );
 
  function Style({theme}: any) {
    const themeStyle = `
      <!-- Theme CSS -->
      <style>
        /*
        * Start Bootstrap - Agency v3.3.7+1 (http://startbootstrap.com/template-overviews/agency)
        * Copyright 2013-2016 Start Bootstrap
        * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
        */
        body {
          overflow-x: hidden;
          font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }
        .text-muted {
          color: #777777;
        }
        .text-primary {
          color: #fed136;
        }
        p {
          font-size: 14px;
          line-height: 1.75;
        }
        a,
        a:hover,
        a:focus,
        a:active,
        a.active {
          outline: none;
        }
        a {
          color: #fed136;
        }
        a:hover,
        a:focus,
        a:active {
          color: #fec503;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
          text-transform: uppercase;
          font-weight: 700;
        }
        ::-moz-selection {
          text-shadow: none;
          background: #fed136;
        }
        ::selection {
          text-shadow: none;
          background: #fed136;
        }
        img::selection {
          background: transparent;
        }
        img::-moz-selection {
          background: transparent;
        }
        .btn:focus,
        .btn:active,
        .btn.active,
        .btn:active:focus {
          outline: none;
        }
        .btn-primary {
          color: white;
          background-color: #fed136;
          border-color: #fed136;
          font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
          text-transform: uppercase;
          font-weight: 700;
        }
        .btn-primary:hover,
        .btn-primary:focus,
        .btn-primary:active,
        .btn-primary.active,
        .open .dropdown-toggle.btn-primary {
          color: white;
          background-color: #fec503;
          border-color: #f6bf01;
        }
        .btn-primary:active,
        .btn-primary.active,
        .open .dropdown-toggle.btn-primary {
          background-image: none;
        }
        .btn-primary.disabled,
        .btn-primary[disabled],
        fieldset[disabled] .btn-primary,
        .btn-primary.disabled:hover,
        .btn-primary[disabled]:hover,
        fieldset[disabled] .btn-primary:hover,
        .btn-primary.disabled:focus,
        .btn-primary[disabled]:focus,
        fieldset[disabled] .btn-primary:focus,
        .btn-primary.disabled:active,
        .btn-primary[disabled]:active,
        fieldset[disabled] .btn-primary:active,
        .btn-primary.disabled.active,
        .btn-primary[disabled].active,
        fieldset[disabled] .btn-primary.active {
          background-color: #fed136;
          border-color: #fed136;
        }
        .btn-primary .badge {
          color: #fed136;
          background-color: white;
        }
        .btn-xl {
          color: white;
          background-color: #fed136;
          border-color: #fed136;
          font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
          text-transform: uppercase;
          font-weight: 700;
          border-radius: 3px;
          font-size: 18px;
          padding: 20px 40px;
        }
        .btn-xl:hover,
        .btn-xl:focus,
        .btn-xl:active,
        .btn-xl.active,
        .open .dropdown-toggle.btn-xl {
          color: white;
          background-color: #fec503;
          border-color: #f6bf01;
        }
        .btn-xl:active,
        .btn-xl.active,
        .open .dropdown-toggle.btn-xl {
          background-image: none;
        }
        .btn-xl.disabled,
        .btn-xl[disabled],
        fieldset[disabled] .btn-xl,
        .btn-xl.disabled:hover,
        .btn-xl[disabled]:hover,
        fieldset[disabled] .btn-xl:hover,
        .btn-xl.disabled:focus,
        .btn-xl[disabled]:focus,
        fieldset[disabled] .btn-xl:focus,
        .btn-xl.disabled:active,
        .btn-xl[disabled]:active,
        fieldset[disabled] .btn-xl:active,
        .btn-xl.disabled.active,
        .btn-xl[disabled].active,
        fieldset[disabled] .btn-xl.active {
          background-color: #fed136;
          border-color: #fed136;
        }
        .btn-xl .badge {
          color: #fed136;
          background-color: white;
        }
        .block {
          padding: 100px 0;
        }
        section .section-heading {
          font-size: 40px;
          margin-top: 0;
          margin-bottom: 15px;
        }
        section .section-subheading {
          font-size: 16px;
          font-family: "Droid Serif", "Helvetica Neue", Helvetica, Arial, sans-serif;
          text-transform: none;
          font-style: italic;
          font-weight: 400;
          margin-bottom: 75px;
        }
        @media (min-width: 768px) {
          .block {
            padding: 150px 0;
          }
        }
      </style>
      
      <!-- Style CSS -->
      <style>
        /* Base */
        body {
          background-color: ${theme.colors.bg_color};
          color: ${theme.colors.text_color};
          font-family: "${theme.typography.text_font_family}","Helvetica Neue",Helvetica,Arial,sans-serif;
          font-size: ${theme.typography.type_base_size}px;
        }
        h1, h2, h3, h4, h5, h6 {
          color: ${theme.colors.title_text_color};
          font-family: "${theme.typography.title_font_family}","Helvetica Neue",Helvetica,Arial,sans-serif;
        }
        body h3.section-subheading {
          color: ${theme.colors.subtitle_text_color};
          font-family: "${theme.typography.subtitle_font_family}","Helvetica Neue",Helvetica,Arial,sans-serif;
          font-style: italic;
        }
        p {
          color: ${theme.colors.text_color};
        }
        a {
          color: ${theme.colors.link_text_color};
        }
        body a:hover,
        body a:focus,
        body a:active {
          color: ${theme.colors.link_text_hover_color};
        }
        /* Global */
        @media (min-width: 768px) {
          .block {
            padding-top: ${theme.block.padding_top}px;
            padding-bottom: ${theme.block.padding_bottom}px;
          }
        }
        /* Buttons */
        .btn-primary,
        .btn-primary:hover,
        .btn-primary:focus,
        .btn-primary:active {
          background-color: ${theme.colors.primary_color};
          border-color: ${theme.colors.primary_color};
        }
        .text-primary {
          color: ${theme.colors.primary_color};
        }
        ::selection {
          color: ${theme.colors.selection_text_color};
          background: ${theme.colors.selection_bg_color};
        }
      </style>`;
    return <div dangerouslySetInnerHTML={{__html: themeStyle}} />;
  }
}