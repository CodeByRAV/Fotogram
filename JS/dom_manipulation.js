const dialogRef = document.getElementById("photo-dialog");

function openDialog(event) {
    console.log("open clicked");
    dialogRef.showModal();
    dialogRef.classList.add("opened");
    event.stopPropagation()
}

function closeDialog(event) {
    console.log("close clicked");
    dialogRef.close();
    dialogRef.classList.remove("opened");
    event.stopPropagation()
}

function stopProp(event){
    event.stopPropagation()
}
    
// function selectImg(index) {
// 
// const titleRef = document.getElementById("photo-details");
// titleRef.textContent = `${currentTitles[currentIndex]}`
// }
