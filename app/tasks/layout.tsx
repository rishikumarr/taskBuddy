import React from "react";

interface LayoutProps{
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return(
        <>
            {children}
            <div id="modal"></div>
        </>
    )
}

export default Layout;