<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<style>
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    justify-content: center;
  }
  li {
    margin: auto 16px;
    font-size: 24px;
    color: #333;
    cursor: pointer;
  }
  .active {
    color: #ff4000;
  }
  @media screen and (max-width: 640px) {
    /*
    화면 크기가 줄어들면 가로 방향의 메뉴바를 세로로 변경한다.
    */
    ul {
      flex-direction: column;
    }
    li {
      margin-bottom: 15px;
    }
  }
</style>

<div class="tabs noselect">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>
