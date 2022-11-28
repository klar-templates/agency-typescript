import Button from '../elements/Button';

export default function Hero3(data: any) {
  const {_id, _type, show_button, show_subtitle, show_title, title, subtitle, link, link_text, style, image } = data.block;
  return (
    <div className="mt-10 flex gap-4 p-16">
      <Button {...{to: 'https://www.google.se', type: 'filled-inverse', size: 'lg', target: '_blank'}}>Filled inverse xl</Button>
      <Button {...{to: 'https://www.google.se', type: 'filled-primary', size: 'lg', target: '_blank'}}>Filled primary large</Button>
      <Button {...{to: 'https://www.google.se', type: 'filled-tonal', size: 'lg', target: '_blank'}}>Filled tonal lg</Button>
    </div>
  );
}