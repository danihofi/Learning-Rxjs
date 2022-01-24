import './style.css';

import { of, map, take, fromEvent, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

of('World', 'Test')
  .pipe(
    take(2),
    tap(console.log),
    map((name) => `Hello, ${name}!`))
  .subscribe(console.log);


fromEvent(document,'click').subscribe(() => console.log('Clicked'));

// Open the console in the bottom right to see results.
