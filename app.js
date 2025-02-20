import React, { useState, useEffect } from 'react';

const CheckInGuide = () => {
    const [property, setProperty] = useState('Green Surabaya Homey');
    const [guestName, setGuestName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const propertyParam = params.get('property');
        const guestParam = params.get('guest');
        const checkInParam = params.get('checkin');
        const checkOutParam = params.get('checkout');

        if (propertyParam) setProperty(propertyParam);
        if (guestParam) setGuestName(guestParam);
        if (checkInParam) setCheckIn(checkInParam);
        if (checkOutParam) setCheckOut(checkOutParam);
    }, []);

    return (
        <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-4 px-3 sm:py-8 sm:px-4">
            <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-blue-600 text-white text-center py-4 px-4 sm:py-6">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">Panduan Check-In</h1>
                    <h2 className="text-lg sm:text-xl font-semibold">{property}</h2>
                    {guestName && (
                        <p className="text-base sm:text-lg mt-2">Hai {guestName}, Selamat Datang! 🏡</p>
                    )}
                </div>

                {/* Booking Details */}
                <div className="p-4 sm:p-6 bg-blue-50">
                    <div className="grid grid-cols-2 gap-4">
                        {checkIn && (
                            <div>
                                <span className="font-semibold text-blue-800">Check-In:</span>
                                <p className="text-gray-700 text-sm sm:text-base">{checkIn}</p>
                            </div>
                        )}
                        {checkOut && (
                            <div>
                                <span className="font-semibold text-blue-800">Check-Out:</span>
                                <p className="text-gray-700 text-sm sm:text-base">{checkOut}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Check-in Times */}
                <div className="p-4 sm:p-6 border-b">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Waktu Check-In & Check-Out</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="font-bold">Check-in:</span>
                            <p className="text-sm sm:text-base">Pukul 14.00</p>
                        </div>
                        <div>
                            <span className="font-bold">Check-out:</span>
                            <p className="text-sm sm:text-base">Pukul 12.00</p>
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                        🚪 Untuk early check-in/late check-out, silakan hubungi kami
                    </p>
                </div>

                {/* Facilities */}
                <div className="p-4 sm:p-6 border-b">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">🏠 Fasilitas Guesthouse</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">🌐</span>
                            <strong>WiFi</strong>: Tersedia saat check-in
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">🍳</span>
                            <strong>Dapur Bersama</strong>: Buka pukul <strong>07.00 - 21.00</strong>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">🛋️</span>
                            <strong>Ruang Santai</strong>: Bebas digunakan, harap jaga kebersihan
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">🧺</span>
                            <strong>Laundry</strong>: Tersedia layanan laundry <em>(dengan biaya tambahan)</em>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">🏍️</span>
                            <strong>Parkir</strong>: Parkir (kunci ganda)
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">🛵</span>
                            <strong>Sewa Motor</strong>: Silahkan hubungi kami <em>(harga mulai 70.000/ hari)</em>
                        </li>
                    </ul>
                </div>

                {/* House Rules */}
                <div className="p-4 sm:p-6 border-b">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">📜 Aturan Guesthouse</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="mr-3 text-red-500">🚭</span>
                            <strong>Dilarang merokok</strong> di dalam kamar
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-blue-500">🤫</span>
                            <strong>Jaga ketenangan</strong>, terutama setelah pukul <strong>21.00</strong>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">🔐</span>
                            <strong>Kunci kamar dengan aman</strong> saat keluar
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-green-500">♻️</span>
                            <strong>Buang sampah pada tempatnya</strong>
                        </li>
                        <li className="flex items-center">
                            <span className="mr-3 text-blue-500">⏰</span>
                            <strong>Check-out tepat waktu</strong> agar tidak dikenakan biaya tambahan
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="p-4 sm:p-6 bg-blue-50 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">📞 Butuh Bantuan?</h3>
                    <p className="mb-4 text-sm sm:text-base">Hubungi kami melalui WhatsApp:</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-600">+6281357009680</p>

                    {/* Closing Message */}
                    <div className="mt-4 sm:mt-6 border-t pt-4">
                        <p className="text-sm sm:text-base">Terima kasih telah menginap di <strong>{property}</strong>! Kami harap kamu menikmati menginap bersama kami. ✨</p>
                        <p className="font-semibold mt-2 text-sm sm:text-base">Salam Hangat,</p>
                        <p className="text-sm sm:text-base">Surabaya Homey Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckInGuide;
