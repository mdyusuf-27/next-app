"use client"
import Link from 'next/link';
import users from "../../../data/users";

const userList = () => {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="flex flex-wrap justify-center">
                    {users.map((user) => (
                        <Link key={user.id} href={`/users/${user.id}`} passHref>
                            <div key={user.id} className="bg-gray-200 p-4 rounded-lg shadow-md m-2 w-40 h-[250px] cursor-pointer">
                                <img src={user.avatar} alt={`Avatar of ${user.username}`} className="w-24 h-24 rounded-full mx-auto my-auto" />
                                <div className="p-4">
                                    <h2 className="text-center font-bold">{user.username}</h2>
                                    <p className="text-center text-sm">{user.job_title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}
export default userList;

