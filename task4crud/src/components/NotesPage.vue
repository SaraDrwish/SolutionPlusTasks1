<template>
  <div class="note">
    <div class="container">
      <div class="noteBoxes">
        <h2>Notes :</h2>

        <div class="bigNoteConteiner" v-for="div in divs" :key="div.id">
          <!-- //// -->
          <div class="popOverlay">
            <showPop v-if="showPopupp" />
          </div>
          <!-- ////// -->

          <ul class="ul-head">
            <li>tilte</li>
            <li>decs</li>
            <li>complete</li>
          </ul>
          <ul class="ul-content">
            <li>title : {{ title }}</li>
            <li>desc : {{ desc | shorten }}</li>
            <li>complete : {{ completed }}</li>
          </ul>
          <div class="btns-box-container">
            <ul class="ul-CRUD-ptns">
              <li>
                <span @click="openPop"> edit </span>
                <span @click="addDiv(div.id)"> add </span>
                <span @click="delDiv(div.id)"> delete </span>
                <span @click="showPopupp = !showPopupp"> show </span>
              </li>
            </ul>
          </div>
        </div>
        <!-- ----- -->
      </div>
    </div>
  </div>
</template>

<script>
import showPop from "./showPop.vue";
import shorten from "../filters/shorten";
export default {
  name: "NotesPage",
  components: {
    showPop,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      index: 0,
      divs: [3],
      showPopupp: false,
      title: "tiltetil 1",
      desc: `decsaaaaaaaaaaaa aaaaa aa aaa aww aawa a a aw a sww `,
      completed: false ? " yes" : " no ",
    };
  },

  methods: {
    openPop: () => {
      console.log("Edit : openPop btn has been clikced");
    },
    delDiv(index) {
      this.divs.splice(index, 1);
    },
    addDiv() {
      this.divs.push({
        id: this.index,
        // name: "div" + this.index,
      });
      this.index++;
    },
  },

  mounted: () => {
    console.log("mounted log");
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  list-style: none;
}

.noteBoxes {
  width: 90%;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 1rem auto;
  background-color: rgb(123, 82, 98);
  padding: 2rem 1rem;
  color: rgb(226, 198, 209);
  border-radius: 2rem;

  .bigNoteConteiner {
    position: relative;
    width: 90%;
    text-transform: capitalize;
    margin: 1rem auto;
    padding: 2rem 1rem;
    background-color: rgb(194, 157, 170);
    border-radius: 2rem;

    .ul-head {
      li {
        margin: auto;
        color: orange;
        text-align: center;
      }
    }
  }
  .ul-CRUD-ptns {
    li {
      width: 40%;
      display: flex;
      margin: auto;
      border-radius: 0.4rem;
      background: unset;
      justify-content: space-evenly;
    }
    span {
      cursor: pointer;
      color: rgb(23, 46, 47);
      font-weight: 500;
      padding: 0.8rem;
      transition: all 0.4s ease-in;
      border: 1px solid rgb(181, 203, 204);
      background-color: rgb(255, 177, 143);
      margin: 0.4rem;
      border-radius: 0.4rem;
    }
    :hover {
      color: rgb(124, 154, 144);
    }
  }
  li {
    word-wrap: break-word;
    width: 28%;
    margin: 1rem;
    padding: 1rem;
    background: rgb(92, 79, 79);
    text-align: left;
    border-radius: 2rem;
  }
}
</style>
