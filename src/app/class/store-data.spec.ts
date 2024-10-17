import { StoreData } from './store-data';

describe('StoreData', () => {
  it('should create an instance', () => {
    expect(new StoreData('title','name',['sillone','skilltwo'])).toBeTruthy();
  });
});
