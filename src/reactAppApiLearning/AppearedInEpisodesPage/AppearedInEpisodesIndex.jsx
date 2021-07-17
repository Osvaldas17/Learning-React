import React,{useState,useEffect,useContext} from 'react'
import {ApiContext} from "../Context/Context";
import {useParams,useHistory} from "react-router-dom";

export default function AppearedInEpisodes() {

    const history = useHistory()
    const {loading,episodes,setEpisodeArr,receivedData} = useContext(ApiContext)
    const {id} = useParams();

    let el = receivedData.find((e) => e.id === Number(id)
    )

    const {episode} = el

    console.log('character', el)

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    },[])

    useEffect(() => {
        if (episode) {
            Promise.all(
                episode.map((url) =>
                    fetch(url)
                        .then(res => res.json())
                        .then(res => res)
                        .catch((e) => {
                            console.log(e)
                        })
                )
            ).then(res => {
                    setEpisodeArr([...res])
                }
            );
        }
    }, []);

    console.log('episodes', episodes)

    const handleProceed2 = (id) => {
        history.push(`/ApiContextLearning/AppearedInEpisodes/AllCharactersInThisEpisode/extraData/${id}`)
        console.log(id)
    };

    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <div className='episodesCon'>
            <div className='inhabitantsCon'>
                    <div key={el.id} className='inhabitantsSubCon'>
                        <div className='p-10'>
                            <div className='p-5'>Name: {el.name}</div>
                            <div className='p-5'>Gender: {el.gender}</div>
                            <div className='p-5'>Species: {el.species}</div>
                            <div className='p-5'>Status: {el.status}</div>
                        </div>
                        <div>
                            <img className='inhabitantsImg' src={el.image} alt=""/>
                        </div>
                    </div>
            </div>
            <div>
                <h1 className='overHeaderEpisodesText'>
                    Character appeared in these episodes:
                </h1>
            </div>
            <div className='episodesHeader'>
                <div className='w-20'>Air date</div>
                <div className='w-20'>Creation date</div>
                <div className='w-10'>Episode</div>
                <div className='w-30'>Name of episode</div>
                <div className='w-20'>Characters in this ep</div>
            </div>
            {episodes.map((el) =>
                <div key={el.id} className='episodesSubCon'>
                    <span className='w-20'>{el.air_date}</span>
                    <span className='w-20'>{el.created.slice(0,10)}</span>
                    <span className='w-10'>{el.episode}</span>
                    <span className='w-30'>{el.name}</span>
                    <span
                        onClick={() => handleProceed2(el.id)}
                        className='w-20 text-end click-for-more-characters'>{el.characters.length} Characters</span>
                </div>
            )}
        </div>
    )

}