const dataTersimpan = localStorage.getItem("tugasSaya");

let daftarTugas = dataTersimpan ? JSON.parse(dataTersimpan) : ["Belajar js", "Membuat To-Do list"];

const inputTugas = document.getElementById("input-tugas");
const tombolTambah = document.getElementById("tombol-tambah");
const wadahTugas = document.getElementById("daftar-tugas");

const renderTugas = () => {
    localStorage.setItem("tugasSaya", JSON.stringify(daftarTugas));

    wadahTugas.innerHTML = "";

    daftarTugas.forEach((tugas, index) => {
        const elemenLi = document.createElement("li");

        elemenLi.innerText = tugas;

        const tombolHapus = document.createElement("button");
        tombolHapus.innerText = "Hapus";

        tombolHapus.addEventListener("click", () => {
            daftarTugas.splice(index, 1);
            renderTugas();
        });

        elemenLi.appendChild(tombolHapus);
        wadahTugas.appendChild(elemenLi);
    });
};

renderTugas();

tombolTambah.addEventListener("click", () => {
    const tugasBaru = inputTugas.value;

    if (tugasBaru === "") {
        alert("Tugas Tidak Boleh kosong!");
        return;
    }
    
    daftarTugas.push(tugasBaru);

    inputTugas.value = "";

    renderTugas();
});