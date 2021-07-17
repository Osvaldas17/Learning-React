import React, {useContext, useEffect, useState} from 'react'
import {ApiContext} from "../Context/Context";
import {useParams,useHistory} from "react-router-dom";

export default function AllCharactersInThisEpisode() {


    const [charactersInEpisode, setCharactersInEpisode] = useState([])
    const {loading, episodes,setReceivedData,receivedData} = useContext(ApiContext)
    const history = useHistory()
    const {id} = useParams();

    const selectedEp = episodes.find((el) => el.id === Number(id))
    const {characters} = selectedEp

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    },[])

    useEffect(() => {
        if (characters) {
            Promise.all(
                characters.map((url) =>
                    fetch(url)
                        .then(res => res.json())
                        .then(res => res)
                        .catch((e) => {
                            console.log(e)
                        })
                )
            ).then(res => {
                    setCharactersInEpisode([...res])
                }
            );
        }
    }, [characters]);

    useEffect(() => {
        let allData = [...receivedData,...charactersInEpisode]
        let uniqueArray = allData.filter((thing, index, self) =>
            index === self.findIndex((el) => (
                el.id === thing.id
            ))
        )
        console.log('uniqueArray',uniqueArray)
        setReceivedData([...uniqueArray])
    },[charactersInEpisode])

    const handleProceed = (id) => {
        history.push(`/ApiContextLearning/extraData/${id}`)
    };
    console.log('rec Data',receivedData,)
    console.log('allCharactersInEpisode',charactersInEpisode)

    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <div className='locationWrapper1'>
            <div>
                <h1 className='overHeaderEpisodesText'>
                    Characters that appeared in: <br/><span className='selectedEp'>{selectedEp.episode} '{selectedEp.name}'</span>
                </h1>
            </div>
            <div className='inhabitantsCon'>
                {charactersInEpisode.map((e) =>
                    <div key={e.id} className='inhabitantsSubCon'>
                        <div className='p-10'>
                            <div className='p-5'>Name: {e.name}</div>
                            <div className='p-5'>Gender: {e.gender}</div>
                            <div className='p-5'>Species: {e.species}</div>
                            <div className='p-5'>Status: {e.status}</div>
                            <div
                                onClick={() => handleProceed(e.id)}
                                className='p-5 description2'>Location:<br/> {e.location.name}</div>
                        </div>
                        <div>
                            <img className='inhabitantsImg' src={e.image} alt=""/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}