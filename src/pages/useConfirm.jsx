const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") return;
  if (typeof rejection !== "function") return;

  const confirmAction = () => {
    if(confirm(message)){
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction;
}

const Ex06 = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}

export default Ex06;