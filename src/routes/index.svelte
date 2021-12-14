<script>
  import TodoItem from "$lib/todo-item.svelte";

  const title = "Todo";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="todos">
  <h1>{title}</h1>

  <form action="" method="" class="new">
    <input
      type="text"
      name="text"
      aria-label="Add a todo"
      placeholder="+ tap to add a todo"
    />
  </form>

  <TodoItem />
  <TodoItem />
  <TodoItem />
</div>

<style>
  .todos {
    width: 100%;
    max-width: 42rem;
    margin: 4rem auto 0 auto;
  }
  
  .new {
    margin: 0 0 0.5rem 0;
  }

  .new input {
    font-size: 28px;
    width: 100%;
    padding: 0.5em 1em 0.3em 1em;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
  }

  .todos :global(input) {
    border: 1px solid transparent;
  }
</style>
