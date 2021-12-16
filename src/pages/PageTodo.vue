<template>
  <!-- q- :: p for padding or m for margin :: a for all directions of the page or r, l, t, b :: - :: md for medium or sm for small or lg for large -->
  <!-- style and identity > spacing -->
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered
    >

      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
        :class="!task.completed ? 'bg-cyan-1' : 'bg-green-12'"
      >
        <q-item-section
          side
          top
        >
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strike' : task.completed }">{{task.name}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <!-- vue components > icon for more info -->
            <div class="column justify-center">
              <q-icon
                class="q-mr-xs"
                name="event"
                size="18px"
              />
            </div>
            <div class="column">
              <!-- class row to make it into a row, justify-end to push the label to the right end of the page -->
              <q-item-label
                class="row justify-end"
                caption
              >
                {{task.dueDate}}
              </q-item-label>
              <q-item-label
                class="row justify-end"
                caption
              >
                <small>{{task.dueTime}}</small>
              </q-item-label>
            </div>
          </div>

        </q-item-section>
      </q-item>
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
