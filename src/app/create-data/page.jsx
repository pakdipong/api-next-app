'use client'

import { createForm } from './create'
import Link from 'next/link'

export default function createPage() {
    return (
        <div>
            <Link href="/"><h3>Home</h3></Link>
            <h1>Create a footballer data</h1>
            <form action={createForm}>
                <p>Name : <input type='text' name='name' /></p>
                <p>Position : <input type='text' name='position' /></p>
                <p>Club : <input type='text' name='club' /></p>
                <p>Country : <input type='text' name='country' /></p>
                <p><button>Create</button></p>
            </form>
        </div>
    )
}