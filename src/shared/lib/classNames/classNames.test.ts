import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('test', () => {
        expect(classNames({ className: 'className' })).toBe('className')
    })

    test('with additional classNames', () => {
        expect(classNames({ className: 'className', additional: ['test1', 'test2'] })).toBe('className test1 test2')
    })

    test('with additional classNames and mods', () => {
        expect(classNames({
            className: 'className',
            mods: {
                hoverable: true,
                visible: false
            },
            additional: ['test1', 'test2']
        })).toBe('className test1 test2 hoverable')
    })
})
