
import { createStore } from 'redux'
import { learningRedux } from './reducer'

export const store = createStore(learningRedux)