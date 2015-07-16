import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('contact');
  },
  actions: {
    addNewContact(name, phone, email) {

      var newContact = this.store.createRecord('contact', {
        name: name,
        phone: phone,
        email: email
      });

      newContact.save();
    }
  }
});
