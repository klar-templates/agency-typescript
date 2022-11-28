import Card from '../elements/Card';

export default function Cards1(data: any) {
  const {_id, _type, show_button, show_subtitle, show_title, title, subtitle, link, link_text, style, image } = data.block;
  return (
    <section className="container mx-auto grid grid-cols-4 gap-8 py-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </section>
  );
}