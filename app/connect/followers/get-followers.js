'use server';

export default async function getFollowers() {
    const response = await fetch('https://spotify-api-wrapper.appspot.com/artist/david-kando', {next: {revalidate: 60}})        // re-fetch every 60 seconds
    const json = await response.json()
    
    if (json) {
        // console.log(json)
        return json.artists.items[0].followers.total;
    } else
        throw new Error('Error fetching follower count')
}