import React, {useEffect, useState} from 'react'
import {
    HashRouter as Router, Link, Route, Switch,
} from "react-router-dom";
import {ApiContext} from "./Context/Context";
import './style.scss'
import Component1 from "./HomePageComponents/ComponentOne";
import LocationPage from "./LocationPage/LocationPage";
import InfiniteScroll from "react-infinite-scroll-component";
import AppearedInEpisodes from "./AppearedInEpisodesPage/AppearedInEpisodesIndex";
import AllCharactersInThisEpisode from "./AppearedInEpisodesPage/AllCharactersInThisEpisode";



export default function ApiContextLearning() {


    const [receivedDataForMainPage,setReceivedDataForMainPage] = useState([])
    const [receivedData, setReceivedData] = useState([])
    const [loading, setLoading] = useState(true)
    const [fetchPage, setFetchPage] = useState(2)
    const [episodes, setEpisodeArr] = useState([])
    const [allResidents, setAllResidents] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://rickandmortyapi.com/api/character?page=1')
            .then((response) => response.json())
            .then(data => setReceivedDataForMainPage([...data.results]))
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        let allData = [...receivedData,...receivedDataForMainPage]
        let uniqueArray = allData.filter((thing, index, self) =>
            index === self.findIndex((el) => (
                el.id === thing.id
            ))
        )
        console.log('uniqueArray',uniqueArray)
        setReceivedData([...uniqueArray])
    },[receivedDataForMainPage])


    function fetchMoreData() {
        fetch(`https://rickandmortyapi.com/api/character?page=${fetchPage}`)
            .then((response) => response.json())
            .then((data) => setReceivedDataForMainPage([...receivedDataForMainPage, ...data.results]))
        setFetchPage((x) => x + 1)
    }

    console.log('recDataMain', receivedDataForMainPage)
    console.log('rec Data',receivedData)

    if (loading) {
        return <p>Data is loading...</p>;
    }
    return (
        <Router>
            <ApiContext.Provider value={{
                receivedData: receivedData,
                setReceivedData: setReceivedData,
                loading: loading,
                setLoading: setLoading,
                episodes: episodes,
                setEpisodeArr: setEpisodeArr,
                allResidents: allResidents,
                setAllResidents: setAllResidents,
                receivedDataForMainPage: receivedDataForMainPage,
                setReceivedDataForMainPage: setReceivedDataForMainPage
            }}>
                <div className='hyperMegaMainWrapper'>
                    <div>
                        <div className='logo-wrapper'>
                            <img className='logo'
                                 src="https://rickandmorty-yersondev.netlify.app/static/media/title.9d0061ea.png"
                                 alt=""/>
                        </div>
                        <div>
                            <Link className='link-a' to='/ApiContextLearning'><i className="fas fa-home">Home</i></Link>
                        </div>
                        <Switch>
                            <Route
                                path='/ApiContextLearning/AppearedInEpisodes/AllCharactersInThisEpisode/extraData/:id'>
                                <AllCharactersInThisEpisode/>
                            </Route>
                            <Route path='/ApiContextLearning/AppearedInEpisodes/extraData/:id'>
                                <AppearedInEpisodes/>
                            </Route>
                            <Route path='/ApiContextLearning/extraData/:id'>
                                <LocationPage/>
                            </Route>
                            <Route path='/ApiContextLearning'>
                                <InfiniteScroll
                                    dataLength={receivedDataForMainPage.length}
                                    next={fetchMoreData}
                                    hasMore={true}
                                    loader={<h4>Loading...</h4>}
                                >
                                    <Component1/>
                                </InfiniteScroll>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </ApiContext.Provider>
        </Router>
    )
}