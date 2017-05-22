import Vue from 'vue'
import prettySize from 'prettysize'
import moment from 'moment'

const filters = [
  {
    filter: 'prettySize',
    func: size => prettySize(size)
  },
  {
    filter: 'prettyDateTime',
    func: date => {
      return moment(date).format('D MMM, YYYY LT')
    }
  }
]

filters.forEach(({ filter, func }) => {
  Vue.filter(filter, func)
})
