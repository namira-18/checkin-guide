const CheckInGuide = () => {
    const [bookingData, setBookingData] = useState({});
    
    useEffect(() => {
        // Get URL parameters
        const params = new URLSearchParams(window.location.search);
        setBookingData({
            property: params.get('property') || 'Green Surabaya Homey',
            guestName: params.get('guest') || '',
            checkIn: params.get('checkin') || '',
            checkOut: params.get('checkout') || '',
            invoice: params.get('invoice') || '',
            roomType: params.get('roomType') || '',
            roomNumber: params.get('roomNumber') || ''
        });
    }, []);

    // Rest of your component code...
};
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
