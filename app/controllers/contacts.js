import Ember from 'ember';

export default Ember.Controller.extend({

  isShowingPhoneNumber: false,

  actions: {
    toggleShowPhoneNumber() {
      this.toggleProperty('isShowingPhoneNumber');
    },

    submit() {
      var nameFromInput = this.get('name');
      var phoneFromInput = this.get('phone');

      var newContact = this.store.createRecord('contact', {
        name: nameFromInput,
        phone: phoneFromInput
      });

      newContact.save();

      this.set('name', '');
      this.set('phone', '');

    }
  }

});
