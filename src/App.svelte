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
    padding: 4em;
    max-width: 240px;
    margin: 0 auto;
  }
  .container {
    margin: 3em;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
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
