<script>
  import { boothStore } from "../../stores/data";

  import { recordPayment } from "../../services/service";

  import Button from "../shared/Button.svelte";

  // input 항목들
  let fields = { id: "", item: "", price: "", refund: false };
  let errors = { item: "", price: "" };

  const submitHandler = () => {
    let valid = true;

    // 상품 설명 검사하기
    // 그냥 설명이 없으면 오류 보여주는 거
    if (fields.item.length < 1) {
      valid = false;
      errors.item = "상품 설명이 없습니다";
    } else {
      errors.item = "";
    }

    // 금액 검증하기
    // 1회에 5만원 이상의 거래는 불가능하다.
    if (
      fields.price > 50000 ||
      fields.price < 0 ||
      !Number.isInteger(fields.price)
    ) {
      valid = false;
      errors.price = "금액은 0부터 5만원까지의 자연수만 입력 가능합니다.";
    } else {
      errors.price = "";
    }

    // 거래 추가하기
    if (valid) {
      const payment = {
        _id: $boothStore._id,
        ...fields
      };

      console.log(payment);
      recordPayment(payment);

      fields = { id: "", item: "", price: "", refund: false };
      errors = { item: "", price: "" };
    }
  };
</script>

<style>
  form {
    width: 400px;
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
    margin: 16px auto;
  }
  .error {
    font-weight: bold;
    font-size: 14px;
    color: #d91b42;
  }
</style>

<form on:submit|preventDefault={submitHandler}>

  <div class="form-field">
    <label for="id">학번</label>
    <input type="text" id="id" bind:value={fields.id} />
  </div>

  <div class="form-field">
    <label for="item">상품 설명</label>
    <input type="text" id="item" bind:value={fields.item} />
    <div class="error">{errors.item}</div>
  </div>

  <div class="form-field">
    <label for="price">금액</label>
    <input type="number" id="price" bind:value={fields.price} />
    <div class="error">{errors.price}</div>
  </div>

  <div class="form-field">
    <label for="refund">환불</label>
    <input type="checkbox" id="refund" bind:checked={fields.refund} />
  </div>

  <Button type="secondary">결제하기</Button>

</form>
