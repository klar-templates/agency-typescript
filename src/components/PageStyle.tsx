export default function PageStyle(data: any) {
  return (
    <Style theme={data.theme} />
  );
 
  function Style({theme}: any) {
    const themeStyle = ``;
    return <div dangerouslySetInnerHTML={{__html: themeStyle}} />;
  }
}