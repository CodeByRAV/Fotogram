const dialogRef = document.getElementById("photo-dialog");

function openDialog(event) {
    dialogRef.showModal();
    dialogRef.classList.add("opened");
    event.stopPropagation()
}

function closeDialog(event) {
    dialogRef.close();
    dialogRef.classList.remove("opened");
    event.stopPropagation()
}

function stopProp(event){
    event.stopPropagation()
}