import React, {FC, ReactElement} from 'react'
import * as routerDom from 'react-router-dom'
import {IResorce} from "@/models/IResorce";

interface IProps {
    routers?: IResorce[];
    authed?: boolean;
    authPath?: string;
    extraProps?: any;
    switchProps?: any;
}

/**
 * 加强router-config的功能
 * @param routes        路由列表
 * @param authed        是否已授权
 * @param authPath      授权页面路径
 * @param extraProps    参数传递
 * @param switchProps   参数传递
 * @returns {*}
 */
const renderRoutes: FC<IProps> = (
    {
        routers = [], switchProps = {}, authPath = '/login', authed = false, extraProps = {}
    }
): ReactElement => (
    <routerDom.Switch {...switchProps}>
        {
            routers.map(
                (route, i: number) => (
                    <routerDom.Route
                        key={route.key || i}
                        path={route.path}
                        exact={route.exact}
                        strict={route.strict}
                        render={
                            props => {
                                // 如果需要重定向, 并且是免授权的
                                if (route.redirect && !route.meta?.requiresAuth) {
                                    return <routerDom.Redirect to={{pathname: route.redirect}}/>
                                }
                                // 授权成功后进入组件
                                if (!route.meta?.requiresAuth || authed || route.path === authPath) {
                                    return <route.component {...props} {...extraProps} route={route}/>
                                }
                                return <routerDom.Redirect to={{pathname: authPath, state: {from: props.location}}}/>
                            }
                        }
                    />
                )
            )
        }
    </routerDom.Switch>
)

export {
    renderRoutes
}
