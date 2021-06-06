import React, {memo} from 'react';
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

import {renderRoutes} from "@/utils/renderRoutes";
import {IRouterType} from "@/types/IRouterType";

interface IRoute {
    routers: IRouterType[]
}

interface IProps {
    route: IRoute
}

const Layout: React.FC<IProps> = ({route}): React.ReactElement => {
    return (
        <div>
            <Header/>
            <Main>
                {renderRoutes({routers: route.routers})}
            </Main>
            <Footer/>
        </div>
    );
};

export default memo(Layout);
