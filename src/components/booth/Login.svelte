<script>
  import { getBoothData } from "../../services/service";
  import Button from "../shared/Button.svelte";

  let email = "";
  let password = "";
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
  label {
    margin: 10px auto;
    text-align: left;
  }
  .form-field {
    margin: 18px auto;
  }
</style>

<form on:submit|preventDefault={() => getBoothData(email, password)}>

  <div class="form-field">
    <label for="id">아이디</label>
    <input type="text" id="id" bind:value={email} />
  </div>

  <div class="form-field">
    <label for="password">비밀번호</label>
    <input type="password" id="password" bind:value={password} />
  </div>

  <Button>로그인</Button>

</form>
