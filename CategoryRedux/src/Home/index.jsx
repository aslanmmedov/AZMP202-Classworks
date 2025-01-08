import React from 'react'
import { useDeleteCategoryByIdMutation, useGetAllCategoriesQuery } from '../services';

const Home = () => {

  const { data: categories, isLoading, isError, refetch } = useGetAllCategoriesQuery();

  const [deleteCategoryById, deleteResponse] = useDeleteCategoryByIdMutation()


  const handleDelete = async (categoryId) => {
    try {
        await deleteCategoryById(categoryId)
    } catch (error) {
        console.log(error);
    }

}
  return (
    <div>


            {categories &&

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((c) => {
                            return (<tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.description}</td>
                                <td>
                                    <button onClick={() => { handleDelete(c.id) }}>Delete</button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>

            }
        </div>
  )
}

export default Home