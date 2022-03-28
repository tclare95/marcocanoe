
export default function BodyWrapper({ children,  classType}) {
  return (
    <div className={classType}>
      <div id="page-wrapper">{children}</div>
    </div>
  );
}
