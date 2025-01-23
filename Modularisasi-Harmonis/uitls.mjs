function splitString(string) {
    if (typeof string !== 'string') {
      return [];
    }
  
    return Array.from(string);
  }
 
// default export
export default function unique(array) {
    const set = new Set(array)
    return Array.from(set.values());
  }
  
  /**
   * TODO:
   * 1. Ekspor fungsi splitString secara named export
   * 2. Ekspor fungsi unique secara default export
   */
   
// named export
export {splitString};  