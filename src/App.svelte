<script>
  import Header from "./components/layouts/Header.svelte";
  import Footer from "./components/layouts/Footer.svelte";

  import Tabs from "./components/shared/Tabs.svelte";

  import Booth from "./components/booth/Booth.svelte";
  import Student from "./components/student/Student.svelte";

  // tabs
  let items = ["학생 메뉴", "부스 메뉴"];
  let activeItem = "학생 메뉴";
  const tabChangeHandler = event => (activeItem = event.detail);
</script>

<style>
  main {
    text-align: center;
    padding: 3em;
    margin: 0 auto;
    max-width: none;
  }
  .container {
    margin: 2em;
  }
  @media screen and (max-width: 640px) {
    main {
      padding: 1em;
    }
  }
</style>

<main>
  <Header />

  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  <div class="container">
    {#if activeItem === '학생 메뉴'}
      <Student />
    {:else if activeItem === '부스 메뉴'}
      <Booth />
    {/if}
  </div>

  <Footer />
</main>
