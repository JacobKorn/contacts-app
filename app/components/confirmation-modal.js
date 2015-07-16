import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    yes() {
      this.sendAction()
    }
  }

});
