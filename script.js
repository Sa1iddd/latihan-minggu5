document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('positionError').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value.trim();

    let valid = true;

    if (!name) {
        document.getElementById('nameError').textContent = 'Nama harus diisi';
        valid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email harus diisi';
        valid = false;
    }

    if (!phone) {
        document.getElementById('phoneError').textContent = 'Telepon harus diisi';
        valid = false;
    }

    if (!position) {
        document.getElementById('positionError').textContent = 'Jabatan harus diisi';
        valid = false;
    }

    if (valid) {
        alert('Data pegawai berhasil dikirim!');
    } else {
        alert('Form ada yang salah');
    }
});
