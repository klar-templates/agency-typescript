export default function RenderStyle({ children, id }: any) {
  const style = `<style id=${id}>${children}</style>`;
  return <div dangerouslySetInnerHTML={{ __html: style }} />;
}
