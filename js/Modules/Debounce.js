export default function Debounce (callback, time){
    let timer;
    return (...args) => {
       if(timer) clearTimeout(timer);

       timer = setTimeout(() => {
        callback(...args);
        timer = null
       }, time);
    }
}