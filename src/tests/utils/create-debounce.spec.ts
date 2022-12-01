import createDebounce from '../../utils/create-debounce';

it('should debounce any function when calling it with debounce() wrapper', () =>
    new Promise(done => {
        const debounce = createDebounce();
        let x = 1;
        debounce(() => {
            x = 2;
            expect(x).toEqual(2);
            done(true);
        });
        expect(x).toEqual(1);
    }));
