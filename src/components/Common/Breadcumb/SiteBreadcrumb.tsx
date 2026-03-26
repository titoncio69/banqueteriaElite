export const SiteBreadcrumb = (props: any) => {
  const { pageTitle, breadcrumbsVideo, scrollTo } = props;

  return (
    <>
      <section className="page-header" style={{ position: "relative", overflow: "hidden" }}>
        {/* VIDEO DE FONDO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src={breadcrumbsVideo}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            zIndex: 0,
            opacity: 0.20, 
          }}
        />

        {/* CONTENIDO DEL HEADER */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="page-header__inner">
            <h2>{pageTitle ? pageTitle : 'Breadcrumbs'}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
              <a href={`#${scrollTo}`}  className="split-btn">↓ Ver más</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
