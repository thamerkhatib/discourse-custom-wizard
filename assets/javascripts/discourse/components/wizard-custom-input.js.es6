export default Ember.Component.extend({
  noneKey: 'admin.wizard.select_field',
  noneValue: 'admin.wizard.none',
  inputKey: 'admin.wizard.key',
  inputValue: 'admin.wizard.value',

  actions: {
    add() {
      if (!this.get('inputs')) {
        this.set('inputs', Ember.A());
      }
      this.get('inputs').pushObject(Ember.Object.create());
    },

    remove(input) {
      this.get('inputs').removeObject(input);
    }
  }
});
