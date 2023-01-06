import RenderScript from './RenderScript';

export default function PageScript() {
  if (
    window.releaseReactApp &&
    window.klarContext.data.pages[0]._id !== window.klarContext.currentPage._id
  ) {
    return null;
  }
  let pageScript = ``;
  if (window.templateJs) {
    pageScript = window.templateJs;
  }
  if (!pageScript) {
    return null;
  }
  return <RenderScript>{pageScript}</RenderScript>;
}
