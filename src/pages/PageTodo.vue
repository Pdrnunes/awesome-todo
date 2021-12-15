<template>
  <!-- q- :: p for padding or m for margin :: a for all directions of the page or r, l, t, b :: - :: md for medium or sm for small or lg for large -->
  <!-- style and identity > spacing -->
  <q-page class="q-pa-md">
    <q-list bordered>

      <q-item
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
      >
        <q-item-section
          side
          top
        >
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>
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
export default {
  data () {
    return {
      tasks: [
        {

          id: 1,
          name: 'Go to Heaven',
          completed: false,
          dueDate: '2021/11/04',
          dueTime: '17:30'
        },
        {
          id: 2,
          name: 'Go to Hell',
          completed: false,
          dueDate: '2021/11/25',
          dueTime: '13:10'
        },
        {
          id: 3,
          name: 'Go to Purgatory',
          completed: false,
          dueDate: '2021/12/01',
          dueTime: '08:00'
        },
      ]
    }
  },
}

</script>

<style>
</style>
