<script>
  import Button from "../shared/Button.svelte";
  import { fetchStudentData } from "../../services/service";

  let id;
  const submitHandler = () => {
    if (id) {
      fetchStudentData(id);
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
