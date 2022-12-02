export default function RenderStyle({ children }: any) {
  const style = `<style>${children}</style>`;
  return <div dangerouslySetInnerHTML={{ __html: style }} />;
}
