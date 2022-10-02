<template>
  <div class="app">
    <my-input 
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Seaching..."
      />
    <div class="app__btns">
      <my-button @click="showDialog">
        Posts creating
      </my-button>
      
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions" 
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list 
      :posts='sortedAndSearchedPosts'
      @remove="removePost"
    />
    <my-pogination/>
</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyPogination from '@/components/UI/MyPogination.vue'
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

export default {
  data() {
    return {
        dialogVisible: false,

    }
  },
  components: {
    PostForm,
    PostList,
    MyPogination

  },
  methods: {
    ...mapMutations({
      // setPage: 'post/setPage',
      setSearchQuery:'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      // chengePage:'post/chengePage'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
  mounted() {
    this.fetchPosts() 
  },
  computed: {
    ...mapState({
        posts: state => state.post.posts,
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        // limit: state => state.post.limit,
        sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
  .app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 15px 0
  }

  .app {
    margin: 20px;
  }
  .page__wrapper {
    display: flex;
    margin-top: 10px;
  }
  .pages {
    border: 1px solid rgb(226, 131, 16);
    padding: 10px;
    cursor: pointer;
  }
  .carrent__page {
    border: 2px solid rgb(226, 131, 16);
    background: rgb(226, 131, 16);
    box-shadow:  0 3px 5px black;
  }

</style>
