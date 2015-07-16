import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  actions: {
    delete() {
      $('#confirmation-modal').modal('toggle');
    },
    deleteSure() {
      var item = this.get('item');
      item.destroyRecord();
      $('#confirmation-modal').modal('toggle');
    }

  }

});
