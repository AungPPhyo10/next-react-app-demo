import {Suspense} from 'react';         // fallback logic UI to load long-loading components
import Spinner from '../../../../components/spinner'

function Loading() {
    return (
        <div className="w-[300px] h-[325px] bg-slate-300 rounded flex justify-center items-center">
            <Spinner/>
        </div>
    )
}

export default function Player({embed}) {
    return (
        <div className="w-[300px] h-[325px]">
            <Suspense fallback={<Loading/>}>{embed}</Suspense>
        </div>
    )
}