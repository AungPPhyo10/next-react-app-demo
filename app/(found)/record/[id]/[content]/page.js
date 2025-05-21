import { RECORDS, CONTENT_PATHS, RECORDS_MAP } from '../data'

// {id : in-perpetuity-id, content: gear}
export async function generateStaticParams() {
    const recordSegments = [];

    RECORDS.forEach(record => {
        CONTENT_PATHS.forEach(contentPath => {
            recordSegments.push({id: record.id, content:contentPath})
        })
    })

    return recordSegments;
} 

export default function Page({params: {id, content}}) {
    const contentJsx = RECORDS_MAP[id][content];

    return contentJsx;
}