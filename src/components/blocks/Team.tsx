export default function Team(data: any) {
  const {_id, _type, heading, subHeading, team, text, style } = data.block;
  return (
    <Block style={style} blockId={_id} templateId={_type}>
      <Intro heading={heading} subHeading={subHeading} />
      <Members team={team} />
      <Description text={text} />
    </Block>
  );
    
  function Block({style, blockId, templateId, children}: any) {
    // Hydration check
    // if (!window.page) {
    //   return <div>Client</div>
    // }
    return (
      <section id={blockId} className={`${templateId} block`}>
        <div className="container">
          {children}
        </div>
        <Style style={style} blockId={blockId} templateId={templateId} />
      </section>
    );
  }
  function Intro({heading, subHeading}: any) {
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">{heading}</h2>
          <h3 className="section-subheading text-muted">{subHeading}</h3>
        </div>
      </div>
    );
  }
  function Members({team}: any) {
    if (!team) {
      return null;
    }
  
    return (
      <div className="row clearfix" data-field-array="team">
      { team.map((member: any, i: any) => {
        return <TeamMember
            image={member.image}
            name={member.heading}
            position={member.text}
            key={i}
        />
        })
      }
      </div>
    );
  }
  function TeamMember({name, position, image, socialLinks}: any) {
    return (
      <div className="col-sm-4">
        <div className="team-member" data-field-array-item="">
          <img src={image} className="img-responsive img-circle" no-data-placement="top" no-data-inset="true" alt={name} />
          <h4>{name}</h4>
          <p>{position}</p>
          <ul className="list-inline social-buttons">
            <li>
              <a href="#youraccount"><i className="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#youraccount"><i className="fa fa-facebook"></i></a>
            </li>
  
            <li>
              <a href="#youraccount"><i className="fa fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  function Description({text}: any) {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 text-center">
          <p className="large">{text}</p>
        </div>
      </div>
    );
  }
  function Style({blockId, templateId, style}: any) {
    const themeStyle = `
    <!-- Theme CSS -->
    <style>
      .team-member {
        text-align: center;
        padding-bottom: 20px;
        margin-bottom: 30px;
      }
      .team-member img {
        margin: 0 auto;
        border: 7px solid white;
      }
      .team-member h4 {
        margin-top: 25px;
        margin-bottom: 0;
        text-transform: none;
      }
      .team-member p {
        margin-top: 0;
      }
      .team-member ul.social-buttons {
        margin-bottom: 0;
      }
      .team-member ul.social-buttons li a {
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
      .team-member ul.social-buttons li a:hover,
      .team-member ul.social-buttons li a:focus,
      .team-member ul.social-buttons li a:active {
        background-color: #fed136;
      }
    </style>
    
    <!-- Style CSS -->
    <style>
      /* Team */
      #${blockId} {
        background-color: ${style.block.bg_color };
        padding-top: ${style.block.padding_top }px;
        padding-bottom: ${style.block.padding_bottom }px;
      }
      #${blockId} ul.social-buttons li a:hover,
      #${blockId} ul.social-buttons li a:focus,
      #${blockId} ul.social-buttons li a:active {
        background-color: ${style.block.social_links_hover_bg_color};
      }
    </style>`;
    return <div dangerouslySetInnerHTML={{__html: themeStyle}} />;
  }
}