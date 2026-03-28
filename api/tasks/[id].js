import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { title, status, priority } = req.body;
    const { rows } = await sql`
      UPDATE tasks SET title=${title}, status=${status}, priority=${priority}
      WHERE id=${id} RETURNING *`;
    return res.json(rows[0]);
  }

  if (req.method === "DELETE") {
    await sql`DELETE FROM tasks WHERE id=${id}`;
    return res.status(204).end();
  }
}
