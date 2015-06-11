import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {name: 'Jack Nicholson', phone: '1234-1234-1234'},
      {name: 'Angelina Jolie', phone: '2345-2345-2345'}
    ]
  }
});
