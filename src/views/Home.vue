<template>
  <v-container class="mainContainer">
    <h1 class="display-2">Post some question</h1>
    <form>
      <input type="text" placeholder="Write some question" class="mainContainer__input" v-model="newQuestion" @keydown.enter.prevent="postQuestion">
      <p>{{ feedback }}</p>
      <v-btn @click="postQuestion">Post question</v-btn>
    </form>
    <p class="comment" v-for="(question, index) in questionContent" :key="index">{{ question }}</p>
  </v-container>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      newQuestion: null,
      questionContent: [],
      feedback: null
    }
  },
  methods: {
    postQuestion() {
      // console.log(this.question)
      if(this.newQuestion) {
        this.questionContent.unshift(this.newQuestion)
        this.newQuestion = null
        this.feedback = null
        // console.log(this.questionContent)
      } else {
        this.feedback = "Write some question..."
      }
    }
  }   
};
</script>

<style lang="scss" scoped>
  .mainContainer {
    form {
      margin-bottom: 25px;
      // height: 200px;
    }
  }
  h1 {
    color: #333;
    margin-bottom: 25px;
  }
  .mainContainer__input {
    height: 200px;
    width: 100%;
    font-size: 20px;
  }
  .comment {
    margin: 15px;
    padding: 15px;
    background: #d4d4d4;
    border: solid 1px #d4d4d4;
    border-radius: 5px;
  }
</style>

