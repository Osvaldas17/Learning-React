import {createContext} from 'react'

export const ApiContext = createContext({
    receivedData: {},
    setReceivedData: () => {},
    loading: true,
    setLoading: () => {},
    episodes: [],
    setEpisodeArr: () => {},
    allResidents:[],
    setAllResidents: () => {},
    receivedDataForMainPage: [],
    setReceivedDataForMainPage: () => {}
})