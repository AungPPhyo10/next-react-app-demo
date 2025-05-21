import {Suspense} from 'react';
import {RECORDS, RECORDS_MAP} from './data'
import Player from './player';
import Link from 'next/link';   

export async function generateStaticParams() {
    return RECORDS.map(record => ({id : record.id}))
}

export const dynamicParams = false;     // include this to show 404 errors for this route too

export async function generateMetadata({params}) {
    const {id} = params;
    const {title} = RECORDS_MAP[id];

    return {title:`${title} - David Kando`}
}

export default function Page({params}) {
    const {id} = params;
    const {date, blurb, Embed} = RECORDS_MAP[id]
    
    return (
        <>
            <div className="text-justify">{blurb}</div>  
            <div className="text-sm text-slate-600 mb-[10px]">Release Date : {date}</div>
            <div className="flex justify-between w-[144px] text-2xl m-2 mb-4">
                <Link className="link" href={`/record/${id}/lyrics`}>Lyrics</Link>
                <Link className="link" href={`/record/${id}/gear`}>Gear</Link>
            </div>
            <Player embed={<Embed />} />
        </>
    )
}