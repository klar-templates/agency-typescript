import Layout from '../system/Layout';
import Nunjucks from '../blocks/Nunjucks';
import Container from '../elements/layout/Container';
import Section from '../elements/layout/Section';
import Grid from '../elements/layout/Grid';

const Components: any = {};

export default function Styleguide(data: any) {
  const blockData = {
    block: { _type: 'styleguide', _id: 'styleguide-123456' },
    theme: data.theme,
  };
  return (
    <Layout {...data}>
      <Section type="normal">
        <Container>
          <h1 className="pt-4 text-4xl">Styleguide</h1>
          <Nunjucks {...blockData} />
        </Container>
      </Section>
    </Layout>
  );
}
