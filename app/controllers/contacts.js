import Ember from 'ember';

export default Ember.Controller.extend({

  nameFromInput: '',
  phoneFromInput: '',

  nothingThere: Ember.computed.empty('nameFromInput'),

  isShowingPhoneNumber: false,

  actions: {
    toggleShowPhoneNumber() {
      this.toggleProperty('isShowingPhoneNumber');
    },

    addNewContact() {
      var newName = this.get('nameFromInput');
      var newPhone = this.get('phoneFromInput');

      if (Ember.isBlank(newName) || Ember.isBlank(newPhone)) { return };

      var newContact = this.store.createRecord('contact', {
        name: newName,
        phone: newPhone
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
