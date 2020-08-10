<script>
  import Button from "../shared/Button.svelte";
  import { storeStudentData } from "../../services/service";

  let id;
  const submitHandler = () => {
    if (id) {
      storeStudentData(id);
      id = "";
    }
  };
</script>

<style>
  form {
    width: 320px;
    margin: 0 auto;
    text-align: center;
  }
  input {
    width: 100%;
  }
  .form-field {
    margin: 16px auto;
  }
</style>

<div class="id-form">

  <form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
      <input
        type="text"
        placeholder="학번"
        id="id"
        on:enter={submitHandler}
        bind:value={id} />
    </div>

    <Button>조회하기</Button>
  </form>
</div>
