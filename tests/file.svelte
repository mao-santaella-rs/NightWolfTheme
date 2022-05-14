<script>
import Book from './book.svelte'
import Button from './button.svelte'
import Purchase from './purchase.svelte'
let title = '';
let pages = 0;
let description = '';
let books =[];
let purchases = [];
function setTitle(event){
  title = event.target.value;
}
function addBook(){
  const newBook = {
    title : title,
    pages : pages,
    description: description
  };
  books = books.concat(newBook)
}
function purchaseBook(event){
  const selectedTitle= event.detail;
  purchases = purchases.concat({
    ...books.find(book => book.title === selectedTitle)
  });
}
</script>

<style>
h1 {
  color: purple;
  
}
section{
  margin: auto;
  width :30rem;
  
}
label,input,textarea{width: 100%}
</style>

<section>
  <li class="page-item" class:active={n == p}><a class="page-link" href={href(n)}>{n}</a></li>
  <div> 
    <label for="title">Title</label>
    <input type="text" id="title" value={title} on:input={setTitle}/>
  </div>
  <div>
    <label for="pages">Pages</label>
    <input type="number" id="pages" value={pages} bind:value={pages}/>
  </div>
  <div>
    <label for="description">Description</label>
    <textarea rows="3" id="description" bind:value ={description}/>
  </div>

  <Button on:click={addBook}>ADD Book</Button>
</section>

<section>
{#if books.length === 0}
  <p>
     Add a new book 
  </p>
  {:else}
  {#each books as book}
    <Book 
      bookTitle={book.title} 
      bookPages={book.pages} 
      bookDescription={book.description}
      on:buy={purchaseBook}
    />
  {/each}
{/if}

</section>

<hr>

<section>
  <Purchase books ={purchases} > </Purchase> 
</section>

<script lang="ts" context="module">
	import Navbar from '$/components/layout/navbar.svelte';
</script>

<script lang="ts">
</script>

<div>
	<Navbar />
	<main class="test-class">
		<slot />
	</main>
</div>

<style lang="scss" global>
</style>