export default function debounce(f, ms) {
  let debounceStatus = false;
  let timerID = null;

  return () => {
    if (debounceStatus) {
      clearTimeout(timerID);
    }
    if (!debounceStatus) {
      debounceStatus = true;
    }
    timerID = setTimeout(() => {
      debounceStatus = false;
      f();
    }, ms);
  };
}
