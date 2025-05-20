import {Suspense} from 'react';
import {RECORDS, RECORDS_MAP} from './data'
import Player from './player';

export async function generateStaticParams() {
    return RECORDS.map(record => ({id : record.id}))
} 

export default function Page({params}) {
    const {id} = params;
    const {date, blurb, Embed} = RECORDS_MAP[id]
    
    return (
        <>
            <div className="text-justify">{blurb}</div>  
            <div className="text-sm text-slate-600 mb-[10px]">Release Date : {date}</div>
            <Suspense fallback={<div>Loading player...</div>}>
                <Player embed={<Embed />} />
            </Suspense>
        </>
    )
}