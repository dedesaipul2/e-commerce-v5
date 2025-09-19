function logout() {
  if(confirm("Apakah Anda yakin ingin keluar?")) {
    alert("Anda sudah keluar dari akun.");
    window.location.href = "#"; // arahkan ke halaman login contoh /pages/login/login.html
  }
}