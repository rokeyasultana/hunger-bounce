import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Table, Thead, Tbody } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { FaTrashAlt } from 'react-icons/fa';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://food-delivery-website-server.vercel.app/users');
            const data = await res.json();
            refetch();
            return data;
        }
    });
    return (
        <div className='mt-10'>
       
            <div className="overflow-x-auto">
  <Table className="table w-full ">
    <Thead className='text-red-500 text-xl'>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </Thead>
    <Tbody className='text-green-700 text-xl'>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user?.role !== 'admin' && <button  className='btn btn-xs  text-green-500 normal-case'>Make Admin</button>}</td>
            <td>{<button>  <FaTrashAlt  color='red'/></button>}</td>
          </tr>)
      }
      
    </Tbody>
  </Table>
</div>
        </div>
    );
};

export default AllUsers;