import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
        <div className="space-x-4">
          <Link href="/admin">Home</Link>
          <Link href="/admin/add-template">Add Template</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
