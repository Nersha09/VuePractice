<template>
    <div class="post">
        <div>
            <div>{{ $store.state.likes }}</div>
            <div><strong>Номе поста: </strong>{{post.id}}</div>
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>  
        </div>
        <div class="post__btns">
            <my-button style="margin: 5px" @click='$emit("remove", post)'>Delite</my-button>
        </div>
    </div>

    
</template>
<script>
export default {
    props:{
        post: {
            type: Object,
            required: true
        },
    }
}
</script>
<style scope>
    .post {
        padding: 15px;
        border: 3px dotted rgb(226, 131, 16);
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
</style>