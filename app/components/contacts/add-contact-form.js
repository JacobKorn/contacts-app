import Ember from 'ember';

export default Ember.Component.extend({

  isNameEmpty: Ember.computed.empty('name'),
  isPhoneEmpty: Ember.computed.empty('phone'),

  nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

  capitalName: Ember.computed('name', function() {
    var name = this.get('name');
    return name.toUpperCase();
  }),

  nameChanged: Ember.observer('name', function() {
    this.set('name', this.get('capitalName'));
  }),

  actions: {
    buttonClicked() {
      if (this.get('nothingThere')) { return; }
      var name = this.get('name');
      var phone = this.get('phone');
      var email = this.get('email');

      this.sendAction('action', name, phone, email);

      this.set('name', '');
      this.set('phone', '');
      this.set('email', '');
    }
  }

});
