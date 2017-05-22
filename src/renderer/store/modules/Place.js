import ls from '@/fs/ls'
import { remote } from 'electron'

const state = {
  contents: []
}

const mutations = {
  setContents (state, contents) {
    state.contents = contents
  }
}

const actions = {
  getContents ({ commit }, path = remote.app.getPath('home')) {
    return new Promise((resolve, reject) => {
      ls(path).then(contents => {
        commit('setContents', contents)
        resolve()
      }, err => {
        reject(err)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
