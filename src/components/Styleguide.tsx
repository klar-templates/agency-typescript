import Nunjucks from './blocks/bootstrap/Nunjucks';
import Container from './elements/layout/Container';
import Section from './elements/layout/Section';
import Grid from './elements/layout/Grid';

const Components: any = {};

export default function Styleguide(data: any) {
  console.log(data);
  const blockData = {
    block: { _type: 'styleguide', _id: 'styleguide-123456' },
    theme: data.theme,
  };
  return (
    <Section type="normal">
      <Container>
        <h1 className="pt-4 text-4xl">Styleguide</h1>
        <div className="">
          <Nunjucks {...blockData} />
        </div>
      </Container>
    </Section>
  );
}
