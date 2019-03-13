const Rxjs = require('rxjs');


const subject = new Rxjs.Subject();
const behaviorSubject = new Rxjs.BehaviorSubject(null);

subject.subscribe(val => console.log(val))

subject.next('hey')
subject.next()


behaviorSubject.next('heyyo')


