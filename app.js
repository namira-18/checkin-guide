import React, { useState, useEffect } from 'react';

const CheckInGuide = () => {
    const [property, setProperty] = useState('Green Surabaya Homey');
    const [guestName, setGuestName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setProperty(params.get('property') || 'Green Surabaya Homey');
        setGuestName(params.get('guest') || '');
        setCheckIn(params.get('checkin') || '');
        setCheckOut(params.get('checkout') || '');
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2 text-blue-800">Panduan Check-In</h1>
                <h2 className="text-2xl mb-2">{property}</h2>
                {guestName && (
                    <p className="text-xl mb-2">Selamat Datang, {guestName}! 🏡</p>
                )}
                <p className="text-gray-600 text-xl">Enjoy Your Stay! 😊</p>
            </header>

            {/* Check-in Time */}
            <section className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h2 className="font-bold mb-2 text-blue-800">📌 Waktu Check-In & Check-Out</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center"><span className="mr-2">⏰</span> Check-in: 14.00</div>
                    <div className="flex items-center"><span className="mr-2">⏰</span> Check-out: 12.00</div>
                </div>
                {(checkIn || checkOut) && (
                    <div className="mt-2 text-gray-600">
                        {checkIn && <p>📅 Tanggal Check-in: {checkIn}</p>}
                        {checkOut && <p>📅 Tanggal Check-out: {checkOut}</p>}
                    </div>
                )}
                <p className="text-sm text-gray-600 mt-2">🔹 Early check-in/late check-out: Hubungi kami</p>
            </section>

            {/* Check-in Process */}
            <section className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h2 className="font-bold mb-2 text-blue-800">🛎 Proses Check-In</h2>
                <div>
                    <h3 className="font-semibold">1️⃣ Konfirmasi Identitas</h3>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Tunjukkan pesan ini</li>
                        <li>KTP/Paspor/SIM</li>
                        <li>Bukti Menikah/KTP satu alamat (untuk pasangan)</li>
                    </ul>
                </div>
            </section>

            {/* Facilities */}
            <section className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h2 className="font-bold mb-2 text-blue-800">📡 3. Fasilitas Guesthouse</h2>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <span className="mr-2">✔</span> 
                        <strong>WiFi</strong>: Saat check-in
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">✔</span> 
                        <strong>Dapur Bersama</strong>: Buka pukul <strong>07.00 - 21.00</strong>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">✔</span> 
                        <strong>Ruang Santai</strong>: Bebas digunakan, harap jaga kebersihan
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">✔</span> 
                        <strong>Laundry</strong>: Tersedia layanan laundry <em>(dengan biaya tambahan)</em>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">✔</span> 
                        Parkir (kunci ganda)
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">✔</span> 
                        Sewa Motor silahkan hubungi kami <em>(harga mulai 70.000/ hari)</em>
                    </div>
                </div>
            </section>

            {/* Rules */}
            <section className="mb-6 bg-gray-50 p-4 rounded-lg">
                <h2 className="font-bold mb-2 text-blue-800">📜 4. Aturan Guesthouse</h2>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <span className="mr-2">❌</span> 
                        <strong>Dilarang merokok</strong> di dalam kamar
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">🔇</span> 
                        <strong>Jaga ketenangan</strong>, terutama setelah pukul <strong>21.00</strong>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">🔑</span> 
                        <strong>Kunci kamar dengan aman</strong> saat keluar
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">♻</span> 
                        <strong>Buang sampah pada tempatnya</strong>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2">🚪</span> 
                        <strong>Check-out tepat waktu</strong> agar tidak dikenakan biaya tambahan
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="bg-blue-50 p-4 rounded-lg">
                <h2 className="font-bold mb-2 text-blue-800">📞 Butuh bantuan?</h2>
                <p>Hubungi kami melalui WhatsApp:</p>
                <p className="font-semibold mt-2">+6281357009680</p>
                
                {/* Closing message */}
                <div className="mt-4 text-center">
                    <p>Terima kasih telah menginap di <strong>{property}</strong>! Kami harap kamu menikmati menginap bersama kami. ✨</p>
                    <p className="font-semibold mt-2">Salam Hangat,</p>
                    <p>Surabaya Homey Team</p>
                </div>
            </section>
        </div>
    );
};

export default CheckInGuide;
