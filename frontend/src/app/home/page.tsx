
"use client"
import Link from 'next/link';

const HomePage = () => {
    return (
        <div align='center'>
            <div>
                <Link href="/adminlogin">
                    <button>Admin</button>
                </Link>
                <Link href="/login">
                    <button>User</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
