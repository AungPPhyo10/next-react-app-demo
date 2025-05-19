'use client';       // when hooks are used, need to be a client component
import {useState, useEffect} from 'react';
import getFollowers from './get-followers';

const followerGoal = ({current}) => Math.pow(10,(current+'').length)

export default function Followers () {
    const [goalString, setGoalString] = useState("?/?");

    // run side effects like api data fetch, setTimeOut, etc
    useEffect(() => {
        getFollowers() 
        .then(followers =>  {            
            setGoalString(`${followers}/${followerGoal({current: followers})}`);
        })
    }, [])

    return (
        <div className="indent">
            Follower Progress : {goalString}
        </div>
    )
}