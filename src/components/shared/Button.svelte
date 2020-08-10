<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .flat {
    box-shadow: none;
  }
  .primary {
    background: #ff4000;
    color: azure;
  }
  .secondary {
    background: #44dd99;
    color: azure;
  }
  .plain {
    color: #ff4000;
    background: inherit;
    box-shadow: none;
  }
  .primary.inverse {
    color: #ff4000;
    background: azure;
    border: 2px solid #ff4000;
  }
  .secondary.inverse {
    color: #44dd99;
    background: azure;
    border: 2px solid #44dd99;
  }
</style>

<button class:flat class:inverse class={type} on:click>
  <slot />
</button>
