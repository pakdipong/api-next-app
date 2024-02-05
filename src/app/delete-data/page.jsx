'use client'

import { deleteForm } from './deleteDataByID'
import Link from 'next/link'

export default function deletePage() {
    return (
        <div>
            <Link href="/"><h3>Home</h3></Link>
            <h1>Delete a footballer data by ID</h1>
            <form action={deleteForm}>
                <b>ID : </b><input type='text' name='id' /><>  </>
                <button> Dlete </button>
            </form>
        </div>
    )
}