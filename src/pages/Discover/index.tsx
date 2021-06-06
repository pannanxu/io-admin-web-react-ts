import React, { memo, useState, useEffect } from 'react';

import {getMenusAction} from "@/pages/Discover/store/action";

import {Dispatch} from 'redux'
import {connect, useDispatch, useSelector, shallowEqual} from 'react-redux';
import * as actionTypes from './store/constants'

import {IMenu} from "@/types/IDiscover";

const Discover: React.FC = (): React.ReactElement => {

    let dispatch: Dispatch = useDispatch();

    const {menus = []} = useSelector((state: any) => ({
        menus: state.getIn(['discoverReducer', actionTypes.MENUS_CONSTANTS]) as IMenu[]
    }), shallowEqual)

    useEffect(() => {
        dispatch(getMenusAction());
    }, [])

    return (
        <div>
            {menus[1]?.name}
            Discover
        </div>
    );
};

export default memo(Discover);
