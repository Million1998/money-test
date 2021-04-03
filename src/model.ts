const localStorageKeyName = 'recordList';
const model = {
  clone(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },
  save(date: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(date));
  }
};

export default model;