import Link from 'next/link';

export default function SegmentBreadcrumbs({segments, startingSegment, segmentTitlesMap}) {
    return (
        <>
            {segments.map((segment, i) => {
                const href = `${startingSegment}/${segments.slice(0, i+1).join('/')}`
                const isLast = i == segment.length-1;

                return (
                    <span key={segment}>
                        {isLast ? segmentTitlesMap[segment] : (
                            <>
                                <Link className="link" href={href}>{segmentTitlesMap[segment]}</Link>
                                <span>{' > '}</span>
                            </>
                        )}
                    </span>
                )    
            })}
        </>
    )
}