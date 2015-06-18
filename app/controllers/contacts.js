import Ember from 'ember';

export default Ember.Controller.extend({

  nameFromInput: '',
  phoneFromInput: '',

  isShowingPhoneNumber: false,

  actions: {
    toggleShowPhoneNumber() {
      this.toggleProperty('isShowingPhoneNumber');
    },

    addNewContact() {
      var nameFromInput = this.get('nameFromInput');
      var phoneFromInput = this.get('phoneFromInput');

      var newContact = this.store.createRecord('contact', {
        name: nameFromInput,
        phone: phoneFromInput
      });

      newContact.save();

      this.set('nameFromInput', '');
      this.set('phoneFromInput', '');

    },

    deleteContact(item) {
      item.destroyRecord();
    }
  }

});
