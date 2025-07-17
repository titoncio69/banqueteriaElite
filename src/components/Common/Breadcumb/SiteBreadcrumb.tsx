    

export const SiteBreadcrumb = (props: any) => {
    const { pageTitle, breadcrumbsImg } = props;

    const breadcrumbsImgStyle = {
        backgroundImage: `url(${breadcrumbsImg})`
    }

    return (
        <>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={breadcrumbsImgStyle}></div>
                <div>
                    <div className="page-header__inner">
                        <h2>{pageTitle ? pageTitle : 'Breadcrumbs'}</h2>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                            <a href="#nosotros" className="split-btn">↓ Ver más</a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
