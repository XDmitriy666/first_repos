import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";

export const useActionCreator = (action) => {
    const dispatch = useDispatch
    return useMemo(() => {
        return bindActionCreators(action, dispatch)
    }, [action, dispatch])
}