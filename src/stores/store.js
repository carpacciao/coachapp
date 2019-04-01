import Vuex from 'vuex'
import { SessionModule } from './session'

export default new Vuex.Store({
  modules: {
    session: SessionModule
  }
})
