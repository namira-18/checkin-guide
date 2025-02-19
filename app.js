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

            {/* Rest of your component code */}
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckInGuide />);
