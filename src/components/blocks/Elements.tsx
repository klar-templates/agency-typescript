import Button from '../Elements/Button';

export default function Hero3(data: any) {
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
    <div className="p-16 container mx-auto">
      <div className="mt-10 flex gap-4">
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'elevated',
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled',
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'tonal',
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'outlined',
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled-inverse',
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'text',
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
      </div>

      <div className="mt-10 flex gap-4">
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'elevated',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'tonal',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'outlined',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled-inverse',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'text',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
      </div>

      <div className="mt-10 flex gap-4">
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'elevated',
            size: 'sm',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled',
            size: 'sm',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'tonal',
            size: 'sm',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'outlined',
            size: 'sm',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled-inverse',
            size: 'sm',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'text',
            size: 'sm',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
      </div>

      <div className="mt-10 flex gap-4">
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'elevated',
            rounded: true,
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled',
            rounded: true,
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'tonal',
            rounded: true,
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'outlined',
            rounded: true,
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'filled-inverse',
            rounded: true,
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
        <Button
          {...{
            to: 'https://www.google.se',
            type: 'text',
            rounded: true,
            size: 'lg',
            target: '_blank',
          }}
        >
          Live preview
        </Button>
      </div>
    </div>
  );
}
