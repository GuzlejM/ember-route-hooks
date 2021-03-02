import Route from '@ember/routing/route';

export default class FavoritePostsRoute extends Route {
    model() {
        console.log('The model hook just ran!');
        console.log(this.model);
        return 'Hello Ember!';
      }
}
