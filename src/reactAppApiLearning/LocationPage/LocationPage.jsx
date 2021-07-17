import React,{useState,useEffect,useContext} from 'react'
import {ApiContext} from "../Context/Context";

import {useParams,useHistory} from "react-router-dom";

export default function LocationPage() {

    const [location, setLocation] = useState([])


    const {receivedData,setReceivedData, loading,allResidents,setAllResidents} = useContext(ApiContext)
    const {id} = useParams();
    const history = useHistory()

    let el = receivedData.find((e) => e.id === Number(id)
    )
    const {url} = el.location

    const {residents} = location

    console.log('location', location)

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    },[])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setLocation(data))
            .catch((e) => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        if (residents) {
            Promise.all(
                residents.map(url =>
                    fetch(url)
                        .then(res => res.json())
                        .then(res => res)
                        .catch((e) => {
                            console.log(e)
                        })
                )
            ).then(res => {
                console.log('resFromFetch', res)
                setAllResidents([...res])
            });
        }
    }, [location]);

    useEffect(() => {
        let allData = [...receivedData,...allResidents]
        let uniqueArray = allData.filter((thing, index, self) =>
            index === self.findIndex((el) => (
                el.id === thing.id
            ))
        )
        console.log('uniqueArray',uniqueArray)
        setReceivedData([...uniqueArray])
    },[allResidents])

    console.log('rec data',receivedData)

    const handleProceed2 = (id) => {
        history.push(`/ApiContextLearning/AppearedInEpisodes/extraData/${id}`)
        console.log(id)
    };

    console.log('allResidents', allResidents)

    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <div className='locationWrapper1'>
            <div className='locationWrapper1-1'>
                <span className='m-20 position-center'>Location Name: <span className='description1'>{location.name}</span></span>
                <span className='m-20 position-center'>Created: <span className='description1'>{location.created}</span></span>
                <span className='m-20 position-center'>Dimension: <span className='description1'>{location.dimension}</span></span>
                <span className='m-20 position-center'>Type:<span className='description1'>{location.type}</span></span>
            </div>
            <h1 className='h1Inhabitants'>Inhabitants</h1>
            <div className='inhabitantsCon'>
                {allResidents.map((e) =>
                    <div key={e.id} className='inhabitantsSubCon'>
                        <div className='p-10'>
                            <div className='p-5'>Name: {e.name}</div>
                            <div className='p-5'>Gender: {e.gender}</div>
                            <div className='p-5'>Species: {e.species}</div>
                            <div className='p-5'>Status: {e.status}</div>
                            <div
                                onClick={() => handleProceed2(e.id)}
                                className='p-5 description2'>Appeared in: {e.episode.length} Episodes</div>
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