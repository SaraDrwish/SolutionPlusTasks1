<template>
  <div class="hello">
    <div class="">
      <h1>{{ msg }}</h1>
      <h3>crud notes using vuex and localStorage to save dat</h3>
    </div>
    <div class="container">
      <div class="noteBoxes">
        <h4>Notes :</h4>

        <div class="bigNoteConteiner">
          <ul class="ul-head">
            <li>tilte</li>
            <li>decs</li>
            <li>complete</li>
          </ul>
          <ul class="ul-content">
            <li>tiltetil tetilte tilte</li>
            <li>
              decs decsdecsdecsdec sdecsdecsdecsdecs
              csdecsdecsdecsdecsdecsdecsdecsdecsdecsdecsdecs
              decsdecsdecsdecsdecsdecsdecsdecs decsdecs decsdecsdecsdecsdecs
              decsdecsdecsdecsdecsd ecsdecsdecs decsdecsdecsdecsdecsdecsdecs
            </li>
            <li>complete : no</li>
          </ul>
          <ul class="ul-CRUD-ptns">
            <li>
              <span> edit </span>
              <span> add </span>
              <span> delete </span>
            </li>
            <li>
              <span> edit </span>
              <span> add </span>
              <span> delete </span>
            </li>
            <li>
              <span> edit </span>
              <span> add </span>
              <span> delete </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  list-style: none;
  // word-wrap: break-word;
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
    width: 90%;
    text-transform: capitalize;
    margin: auto;
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
    .ul-CRUD-ptns {
      span {
        cursor: pointer;
        color: rgb(181, 203, 204);
        font-weight: 600;
        padding: 0 1rem;
        transition: all 0.4s ease-in;
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
}
</style>
