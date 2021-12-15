function changeData() {
    const data = "https://google.com";
    let searchData = document.getElementById("searchInput").value;
    document.getElementById('frame').src = searchData;
}
