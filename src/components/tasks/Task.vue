<template>
  <q-item
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
</template>

<script>
export default {
  props: ['task', 'id']
}
</script>

<style>
</style>