export const unloadCallback = (event: BeforeUnloadEvent) => {
  event.preventDefault();
  event.returnValue = "";
  return "";
};