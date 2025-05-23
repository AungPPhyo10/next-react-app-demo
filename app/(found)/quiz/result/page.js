'use client'

import {Suspense} from 'react';
import {useSearchParams, notFound} from 'next/navigation';
import {getQuizResult, RESULT_MAP, CONCLUSION_PART_1, CONCLUSION_PART_2, CONCLUSION_PART_3} from '../data';

export default function Page() {
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();    

    const selections = queryString.split('&').map(
        queryStringSelection => queryStringSelection.split('=')[1]
    )
    const selectionMap = {}
    selections.forEach(selection => {
        selectionMap[selection] = selectionMap[selection] ? selectionMap[selection]+1 : 1
    })

    const result = getQuizResult({selectionMap})
    const resultData = RESULT_MAP[result];
    if (!resultData) notFound();

    return (
        <div>
            {CONCLUSION_PART_1}
            {resultData.blurb}
            {CONCLUSION_PART_2}
            <br/>
            <Suspense fallback={<div>Loading...</div>}>
                <resultData.Embed/>
            </Suspense>
            <br/>
            <div>
                <a href={resultData.playlistLink} target="_blank" className="link">Save this playlist</a>
            </div>
            <br/>
            {CONCLUSION_PART_3}
        </div>
    )
}