import Link from "next/link";
import users from "../../../../data/users";

const UserId = ({ params }) => {
    const { id } = params;
    const user = users.find(user => user.id === id) || null;

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="m-10 p-10 bg-gray-200">
            <img src={user.avatar} className="w-50 h-50  mx-auto" />
            <br />
            <p className="text-center">ID: {user.id}</p>
            <p className="text-center">First Name: {user.first_name}</p>
            <p className="text-center">Last Name: {user.last_name}</p>
            <p className="text-center">Job: {user.job_title}</p>
            <p className="text-center">Description: {user.description}</p>
            <Link href="/users" passHref>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded m-2 mx-auto block">Select User</button>
            </Link>
        </div>
    );
};

export default UserId;