import RenderScript from './RenderScript';

export default function PageScript() {
  if (
    window.releaseReactApp &&
    window.klarContext.data.pages[0]._id !== window.klarContext.currentPage._id
  ) {
    return null;
  }
  // const pageScript = `
  //   console.log('Från page-script-komponenten');
  // `;
  const pageScript = ``;
  return <RenderScript>{pageScript}</RenderScript>;
}
