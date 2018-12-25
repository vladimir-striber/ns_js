<template>
  <v-container class="mainContainer">
    <h1 class="display-2">Post some question</h1>
    <form>
      <textarea placeholder="Write some question" class="mainContainer__textarea" v-model="newQuestion" @keydown.enter.prevent="postQuestion"></textarea>
      <p>{{ feedback }}</p>
      <v-btn @click="postQuestion">Post question</v-btn>
    </form>
    <p class="comment" v-for="(question, index) in questionContent" :key="index">{{ question }}</p>
  </v-container>
</template>

<script>

import db from "@/firebase/init"
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
  },
  created() {
    // fetch data from firestore
    db.collection("questions").get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        // console.log(doc.data(), doc.id)
        let quest = doc.data().content
        console.log(quest)
        // quest.id = doc.id
        this.questionContent.unshift(quest)
      })
    })
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
  .mainContainer__textarea {
    height: 150px;
    width: 100%;
    font-size: 20px;
    resize: none;
    border: solid 1px #d4d4d4;
    border-radius: 5px;
    padding: 15px;
  }
  .comment {
    margin: 15px;
    padding: 15px;
    background: #d4d4d4;
    border: solid 1px #d4d4d4;
    border-radius: 5px;
  }
</style>

