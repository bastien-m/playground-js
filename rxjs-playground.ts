import { Subject, concat, merge, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const $s0 = new Subject();
const $s1 = new Subject();

concat($s0, $s1)
    .pipe(
        switchMap(value => {
            console.log(value);
            return of(true)
        })
    )
    .subscribe(value => console.log(`last value ${value}`))

merge($s0, $s1)
    .pipe(
        switchMap(value => {
            console.log(value);
            return of(true)
        })
    )
    .subscribe(value => console.log(`last value ${value}`))


$s0.next({filter: '10'});
$s1.next([1,2,3]);
