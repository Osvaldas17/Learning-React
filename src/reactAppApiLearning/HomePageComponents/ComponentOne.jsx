import React,{useContext,useEffect} from 'react'
import {ApiContext} from "../Context/Context";
import {useHistory} from "react-router-dom";


export default function Component1() {

    const history = useHistory()

    const {receivedDataForMainPage} = useContext(ApiContext)

    console.log(receivedDataForMainPage)

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    },[])

    const handleProceed = (id) => {
        history.push(`/ApiContextLearning/extraData/${id}`)
        console.log(id)
    };

    const handleProceed2 = (id) => {
        history.push(`/ApiContextLearning/AppearedInEpisodes/extraData/${id}`)
        console.log(id)
    };


    return (
        <div className='mainWrapper1'>
            {receivedDataForMainPage.map((el) =>
                <div key={el.id} className='dataSubWrapper1'>
                    <div className='dataSubWrapper1-1'>
                        <span>Name: <span className='description1'>{el.name}</span></span>
                        <span>Status: <span className='description1'>{el.status}</span></span>
                        <span>Species: <span className='description1'>{el.species}</span></span>
                    </div>
                    <div className='dataSubWrapper1-1'>
                        <span>Appeared in: <span
                            onClick={() => handleProceed2(el.id)}
                            className='description2'>{el.episode.length} Episodes</span>
                        </span>
                        <span>Gender: <span className='description1'>{el.gender}</span></span>
                        <span>Location: <span
                                onClick={() => handleProceed(el.id)}
                                className='description2'>{el.location.name}
                            </span>
                        </span>
                    </div>
                    <div className='dataSubWrapper1-2'><img className='dataSubWrapper1-2-img' src={el.image} alt=""/></div>
                </div>
            )}
        </div>
    )
}
