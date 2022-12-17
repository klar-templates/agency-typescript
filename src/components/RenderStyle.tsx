export default function RenderStyle({ children, id }: any) {
  let style = `<style>${children}</style>`;
  if (id) {
    let style = `<style id=${id}>${children}</style>`;
  }
  return <div dangerouslySetInnerHTML={{ __html: style }} />;
}
