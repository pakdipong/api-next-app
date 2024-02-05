
import connection from '../mysql';

export async function GET() {
  try {
    const [data] = await connection.query('SELECT * FROM footballers');
    return Response.json({footballers: data}, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }

}