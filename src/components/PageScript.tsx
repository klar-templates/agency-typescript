export default function PageScript() {
  return (
    <Script />
  );
 
  function Script() {
    const pageScript = ``;
    return <div dangerouslySetInnerHTML={{__html: pageScript}} />;
  }
}