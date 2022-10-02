<template>
    <div class="page__wrapper">
        <div 
          v-for="pageNumber in totalePages"
          :key="page"
          class="pages"
          :class="{
            'carrent__page': page === pageNumber
          }"
          @click="chengePage(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'my-pogination',
    methods: {
      ...mapActions({
        chengePage: 'post/chengePage'
      })
    },
    computed: {
      ...mapState({
        page: state => state.post.page,
        totalePages:state => state.post.totalePages,


      })
    }
  }
</script>
<style scoped>
    .page__wrapper {
        display: flex;
        margin-top: 10px;
      }
      .pages {
        border: 1px solid rgb(226, 131, 16);
        padding: 10px;
      }
      .carrent__page {
        border: 2px solid rgb(226, 131, 16);
        background: rgb(226, 131, 16);
        box-shadow:  0 3px 5px black;
      }
</style>