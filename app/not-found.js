import {notFound} from 'next/navigation'

// Fallback logic function - Triggers 404 page 
// Can be used in other components to force 404 even when the route exists(dynamic route)
export default function NotFound() {
    // return (
    //     <div>404 - Not Found</div>
    // )
    notFound();
}