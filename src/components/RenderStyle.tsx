export default function RenderStyle({ children, id }: any) {
  console.log(children);
  if (window.releaseReactApp) {
    window.reactCss += children;
  }
  if (window.production) {
    return null;
  }
  let style = `<style>${children}</style>`;
  if (id) {
    style = `<style id=${id}>${children}</style>`;
  }
  return <div dangerouslySetInnerHTML={{ __html: style }} />;
}
