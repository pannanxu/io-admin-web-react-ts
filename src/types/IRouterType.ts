
export interface IRouterType {
    key?: string;
    path: string;
    component: any;
    exact?: true;
    strict?: false;
    redirect?: string;
    meta?: {
        requiresAuth?: false;
        title?: string;
        roles?: string[];
    }
    routers?: IRouterType[];
}
