export default function KlarEditBlock({id, type, children}: any) {
  if (!window.klarContext.isInKlar) {
    return children;
  }
  
  return (
    <div data-id={id} data-template-id={type} className={`${type} js-klar-block js-block klar-block`}>
      {children}
    </div>
  );
}