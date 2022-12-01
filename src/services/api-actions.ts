import { Subject } from 'rxjs';

const apiActions$ = new Subject<'upload' | 'add'>();

export default apiActions$;
