
<template>
    <form @submit.prevent>
        <h4>Posts creating</h4>
        <my-input
          v-model="post.title" 
          type="text" 
          placeholder="Posts name"
        />
        <my-input 
          v-model="post.body" 
          type="text" 
          placeholder="Posts text"
        />
        <my-button 
          style="margin-top: 10px"
          @click="createPost">
            Create post
        </my-button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
}
</script>
<style scope>


  form {
    display: flex;
    flex-direction: column;
  }

</style>