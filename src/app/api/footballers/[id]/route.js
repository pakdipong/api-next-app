
import connection from '../../mysql'

export async function GET(request, { params }) {
    const id = Number(params.id);
    const sql = "SELECT * FROM footballers WHERE id =?"
    try {
        const [data] = await connection.query(sql, [id])
        if (data.length === 0) {
            return Response.json(
                { message: "Not Found" },
                { status: 404 })
        }
        return Response.json({footballers: data}, { status: 200 })
    } catch (error) {
        console.error(error);
        return Response.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )
    }

}