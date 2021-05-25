/**
 * @jest-environment jsdom
 */

import {pushToHistory} from '../scripts/router.js'

test('entry state', () => {
    let his = pushToHistory('entry', 2);
    expect(JSON.stringify(his.state)).toBe("{\"page\":\"entry2\"}");
});
test('settings state', () => {
    let his = pushToHistory('settings');
    expect(JSON.stringify(his.state)).toBe("{\"page\":\"settings\"}");
});

test('length of history stack', () => {
    let initial = History.length;
    pushToHistory('entry', 2);
    pushToHistory('settings');
    let his = pushToHistory('error', 2);
    expect(his.length).toBe(6);
});

