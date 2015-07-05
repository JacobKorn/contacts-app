import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['isShowingPhoneNumber'],

  nameFromInput: '',
  phoneFromInput: '',
  emailFromInput: '',

  isNameEmpty: Ember.computed.empty('nameFromInput'),
  isPhoneEmpty: Ember.computed.empty('phoneFromInput'),

  nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

  isShowingPhoneNumber: false,

  contactsWithEmail: function() {
    var model = this.get('model');
    var filteredModel = model.filterBy('email');
    return filteredModel.get('length');
  }.property('model.@each'),

  capitalName: function() {
    var name = this.get('nameFromInput');
    return name.toUpperCase();
  }.property('nameFromInput'),

  nameChanged: function() {
    this.set('nameFromInput', this.get('capitalName'));

  }.observes('nameFromInput'),

  dasherizedPhone: function() {
    var phone = this.get('phoneFromInput');
    var phoneArray = phone.match(/\d/g);
    if (phoneArray === null) {
      return "";
    } else {
      var dashedPhone = phoneArray.join("").match(/\d{1,4}/g).join("-");
      return dashedPhone;
    }
  }.property('phoneFromInput'),

  phoneChanged: function() {
    this.set('phoneFromInput', this.get('dasherizedPhone'));
  }.observes('phoneFromInput'),


  actions: {
    toggleShowPhoneNumber() {
      this.toggleProperty('isShowingPhoneNumber');
    },

    addNewContact() {
      var newName = this.get('capitalName');
      var newPhone = this.get('phoneFromInput');
      var newEmail = this.get('emailFromInput');

      if (Ember.isBlank(newName) || Ember.isBlank(newPhone)) { return; }

      var newContact = this.store.createRecord('contact', {
        name: newName,
        phone: newPhone,
        email: newEmail
      });

      newContact.save();

      this.set('nameFromInput', '');
      this.set('phoneFromInput', '');
      this.set('emailFromInput', '');

    },

    deleteContact(item) {
      item.destroyRecord();
    }
  }

});
