import createDebounce from './create-debounce';

it('should work', () =>
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
