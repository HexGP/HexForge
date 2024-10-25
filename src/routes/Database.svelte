<script lang="ts">
    import { onMount } from 'svelte';
    import { db, connectToDatabase } from '../lib/database';
  
    let people = [];
  
    onMount(async () => {
      await connectToDatabase();
  
      // Query SurrealDB
      try {
        people = await db.select('person');
        console.log(people);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    });
  </script>
  
  <main>
    <h1>People from SurrealDB</h1>
    <ul>
      {#each people as person}
        <li>{person.name} - {person.age} years old</li>
      {/each}
    </ul>
  </main>