import Section from '../elements/layout/Section';
import Container from '../elements/layout/Container';
import Grid from '../elements/layout/Grid';
import Card from '../elements/Card';

export default function Cards1(data: any) {
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
    <Section type="normal">
      <Container>
        <Grid columns="1,2,3,4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
    </Section>
  );
}
