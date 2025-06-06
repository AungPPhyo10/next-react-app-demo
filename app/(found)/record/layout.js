'use client';       // will be using hooks

import {usePathname, useSelectedLayoutSegments} from 'next/navigation';
import LayoutStructure from '../../../components/layout-structure';
import {RECORDS_MAP, findIdByPathname, SEGMENT_TITLES_MAP} from './[id]/data';
import SegmentBreadcrumbs from '../../../components/segment-breadcrumbs';

/** NOTES
 * generateStaticParams() and generateMetadata are Server components, cannot be used in client components
 * 
 */

export default function Layout({children}) {
    const pathName = usePathname();     // find out path name
    const segments = useSelectedLayoutSegments();       // get the segment array returned back
    console.log(segments);

    const id = findIdByPathname(pathName);      // custom path
    console.log(id);

    return (
        <LayoutStructure title={<SegmentBreadcrumbs segments={segments} startingSegment="/record" segmentTitlesMap={SEGMENT_TITLES_MAP} />} >
            <div className="flex flex-col items-center">{children}</div>
        </LayoutStructure>
    )
    
}