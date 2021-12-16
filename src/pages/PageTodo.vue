<template>
  <!-- q- :: p for padding or m for margin :: a for all directions of the page or r, l, t, b :: - :: md for medium or sm for small or lg for large -->
  <!-- style and identity > spacing -->
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered
    >
      <!-- now that the task structure no longer has access to the :key, the for directive needs these adjustments: -->
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      >

      </task>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // tasks () {
    /* [tasks/tasks] -> means it will get something from the tasks store module(first tasks)
    wich in this case will be the tasks getter (second tasks) */

    // return this.$store.getters['tasks/tasks']

    /* in the parenthesis the first argument is for specifying the module needed 
    and in the second argument is for an array of the gets the component will use*/
    ...mapGetters('tasks', ['tasks'])
    /* There is another way to do it by maping it directly to the getter: */

  },
  components: {
    'task': require('components/tasks/Task.vue').
      default
  }

  /* when the getters are ready to use the data property is no longer needed, so i'm commenting it */
  // data () {
  //   return {
  //     tasks: [
  //       {
  //         id: 1,
  //         name: 'Go to Heaven',
  //         completed: false,
  //         dueDate: '2021/11/04',
  //         dueTime: '17:30'
  //       },
  //       {
  //         id: 2,
  //         name: 'Go to Hell',
  //         completed: false,
  //         dueDate: '2021/11/25',
  //         dueTime: '13:10'
  //       },
  //       {
  //         id: 3,
  //         name: 'Go to Purgatory',
  //         completed: false,
  //         dueDate: '2021/12/01',
  //         dueTime: '08:00'
  //       },
  //     ]
  //   }
  // },
}

</script>

<style>
</style>
