import React from 'react';

const CheckInGuide = () => {
  // Sample data - replace with your actual data source
  const bookingData = {
    property: "Green Surabaya Homey",
    invoice: "INV-001",
    guestName: "John Doe",
    checkIn: "2024-02-20",
    checkOut: "2024-02-22",
    roomNumber: "101"
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2 text-blue-800">Panduan Check-In</h1>
        <h2 className="text-xl mb-2">{bookingData.property}</h2>
        <p className="text-gray-600">Selamat Datang! 🏡</p>
      </header>

      {/* Booking Details */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 className="font-bold mb-2 text-blue-800">Detail Booking:</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center"><span className="mr-2">📋</span> Invoice: {bookingData.invoice}</div>
          <div className="flex items-center"><span className="mr-2">👤</span> Tamu: {bookingData.guestName}</div>
          <div className="flex items-center"><span className="mr-2">📅</span> Check-in: {bookingData.checkIn}</div>
          <div className="flex items-center"><span className="mr-2">📅</span> Check-out: {bookingData.checkOut}</div>
        </div>
      </div>

      {/* Check-in Time */}
      <section className="mb-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="font-bold mb-2 text-blue-800">📌 Waktu Check-In & Check-Out</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center"><span className="mr-2">⏰</span> Check-in: 14.00</div>
          <div className="flex items-center"><span className="mr-2">⏰</span> Check-out: 12.00</div>
        </div>
        <p className="text-sm text-gray-600 mt-2">🔹 Early check-in/late check-out: Hubungi kami</p>
      </section>

      {/* Check-in Process */}
      <section className="mb-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="font-bold mb-2 text-blue-800">🛎 Proses Check-In</h2>
        <div>
          <h3 className="font-semibold">1️⃣ Konfirmasi Identitas</h3>
          <ul className="list-disc ml-6">
            <li>Tunjukkan pesan ini</li>
            <li>KTP/Paspor/SIM</li>
            <li>Bukti Menikah/KTP satu alamat (untuk pasangan)</li>
          </ul>
        </div>
      </section>

      {/* Facilities */}
      <section className="mb-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="font-bold mb-2 text-blue-800">📡 Fasilitas Guesthouse</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center"><span className="mr-2">✔</span> WiFi: Saat check-in</div>
          <div className="flex items-center"><span className="mr-2">✔</span> Dapur Bersama: 07.00-20.00</div>
          <div className="flex items-center"><span className="mr-2">✔</span> Ruang Santai</div>
          <div className="flex items-center"><span className="mr-2">✔</span> Laundry (biaya tambahan)</div>
          <div className="flex items-center"><span className="mr-2">✔</span> Parkir (kunci ganda)</div>
        </div>
      </section>

      {/* Rules */}
      <section className="mb-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="font-bold mb-2 text-blue-800">📜 Aturan Guesthouse</h2>
        <div className="space-y-2">
          <div className="flex items-center"><span className="mr-2">❌</span> Dilarang merokok dalam kamar</div>
          <div className="flex items-center"><span className="mr-2">🔇</span> Jaga ketenangan setelah 21.00</div>
          <div className="flex items-center"><span className="mr-2">🔑</span> Kunci kamar saat keluar</div>
          <div className="flex items-center"><span className="mr-2">♻</span> Buang sampah pada tempatnya</div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-50 p-4 rounded-lg">
        <h2 className="font-bold mb-2 text-blue-800">📞 Butuh bantuan?</h2>
        <p>Hubungi kami melalui WhatsApp di nomor yang tertera pada bukti pemesanan.</p>
        <p className="mt-4 text-center font-semibold">Selamat beristirahat! 😊</p>
      </section>
    </div>
  );
};

export default CheckInGuide;
