export default function KlarEditBlock({ id, type, children, isInKlar }: any) {
  if (window.prodConfig) {
    return children;
  }

  if (!window.klarContext.isInKlar && !isInKlar) {
    return children;
  }

  return (
    <div
      data-id={id}
      data-template-id={type}
      className={`${type} js-klar-block js-block klar-block`}
    >
      {children}
    </div>
  );
}
