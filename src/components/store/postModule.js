import axios from "axios"

export const postModule = {
    state: () => ({
        posts: [],
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalePages: 0,
        sortOptions: [
            {value: 'title', name: 'by name'},
            {value: 'body', name: 'by description'}
        ]
        //это само состояние. тут описываются даннные, которые есть в приложении, рекомендуется объявлять в виде функции которвя возврашает объект
    }),
    getters: {
        //некоторые computed свойства (делают подсчет, кэшируют данные), геттеры всегда что-то возвращают
            sortedPosts(state) {
              return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
              )
            },
            sortedAndSearchedPosts(state, getters) {
              return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
            }
    },
    mutations: {
       // менять состояние напрямую нельзя. для этого есть МУТАЦИИ - это функции которые меняют значение какого-то поля в состоянии
       setPosts(state, posts) {
        state.posts = posts
       },
       setSelectedSort(state, selectedSort) {
        state.selectedSort = selectedSort
       },
       setSearchQuery(state, searchQuery) {
        state.searchQuery = searchQuery
       },
       setPage(state, page) {
        state.page = page
       },
       setLimit(state, limit) {
        state.limit = limit
       },
       setTotalePages(state, totalePages) {
        state.totalePages = totalePages
       }, setSortOptions(state, sortOptions) {
        state.sortOptions = sortOptions
       }
    },
    actions: {
        //это функции, которые внутри себя используюь мутации, сохраняет данные в состоянии
        async fetchPosts({state, commit}) {
            try{
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params: {
                  _page: state.page,
                  _limit: state.limit
                }
              });
              //так как напрямую состояние менять нельзя, вызываем мутацию, чтобы это сделать. мутации вызываются через функ commit
              commit('setTotalePages', Math.ceil(response.headers['x-total-count'] / state.limit))
              commit('setPosts', response.data) 
            } catch(e) {
              alert('Error')
            }
          },
          chengePage({dispatch, commit}, pageNumder) {
           
            commit('setPage', pageNumder)
            dispatch('fetchPosts')
           
          }
    },
    namespaced: true
}