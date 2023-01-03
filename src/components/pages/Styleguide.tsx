import Layout from '../system/Layout';
import Nunjucks from '../system/Nunjucks';
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
      <div
        className="
        grid-gap
        bg-primary
        bg-primary-50
        bg-primary-100
        bg-primary-200
        bg-primary-300
        bg-primary-400
        bg-primary-500
        bg-primary-600
        bg-primary-700
        bg-primary-800
        bg-primary-900
        text-primary
        text-primary-50
        text-primary-100
        text-primary-200
        text-primary-300
        text-primary-400
        text-primary-500
        text-primary-600
        text-primary-700
        text-primary-800
        text-primary-900
        border-primary
        border-primary-50
        border-primary-100
        border-primary-200
        border-primary-300
        border-primary-400
        border-primary-500
        border-primary-600
        border-primary-700
        border-primary-800
        border-primary-900

        dark:bg-primary
        dark:bg-primary-50
        dark:bg-primary-100
        dark:bg-primary-200
        dark:bg-primary-300
        dark:bg-primary-400
        dark:bg-primary-500
        dark:bg-primary-600
        dark:bg-primary-700
        dark:bg-primary-800
        dark:bg-primary-900
        dark:text-primary
        dark:text-primary-50
        dark:text-primary-100
        dark:text-primary-200
        dark:text-primary-300
        dark:text-primary-400
        dark:text-primary-500
        dark:text-primary-600
        dark:text-primary-700
        dark:text-primary-800
        dark:text-primary-900
        dark:border-primary
        dark:border-primary-50
        dark:border-primary-100
        dark:border-primary-200
        dark:border-primary-300
        dark:border-primary-400
        dark:border-primary-500
        dark:border-primary-600
        dark:border-primary-700
        dark:border-primary-800
        dark:border-primary-900

        bg-neutral
        bg-neutral-50
        bg-neutral-100
        bg-neutral-200
        bg-neutral-300
        bg-neutral-400
        bg-neutral-500
        bg-neutral-600
        bg-neutral-700
        bg-neutral-800
        bg-neutral-900
        text-neutral
        text-neutral-50
        text-neutral-100
        text-neutral-200
        text-neutral-300
        text-neutral-400
        text-neutral-500
        text-neutral-600
        text-neutral-700
        text-neutral-800
        text-neutral-900
        border-neutral
        border-neutral-50
        border-neutral-100
        border-neutral-200
        border-neutral-300
        border-neutral-400
        border-neutral-500
        border-neutral-600
        border-neutral-700
        border-neutral-800
        border-neutral-900

        dark:bg-neutral
        dark:bg-neutral-50
        dark:bg-neutral-100
        dark:bg-neutral-200
        dark:bg-neutral-300
        dark:bg-neutral-400
        dark:bg-neutral-500
        dark:bg-neutral-600
        dark:bg-neutral-700
        dark:bg-neutral-800
        dark:bg-neutral-900
        dark:text-neutral
        dark:text-neutral-50
        dark:text-neutral-100
        dark:text-neutral-200
        dark:text-neutral-300
        dark:text-neutral-400
        dark:text-neutral-500
        dark:text-neutral-600
        dark:text-neutral-700
        dark:text-neutral-800
        dark:text-neutral-900
        dark:border-neutral
        dark:border-neutral-50
        dark:border-neutral-100
        dark:border-neutral-200
        dark:border-neutral-300
        dark:border-neutral-400
        dark:border-neutral-500
        dark:border-neutral-600
        dark:border-neutral-700
        dark:border-neutral-800
        dark:border-neutral-900

        bg-black
        bg-white
        dark:bg-black
        dark:bg-white

        hidden
        "
      >
        Hello
      </div>
    </Layout>
  );
}
