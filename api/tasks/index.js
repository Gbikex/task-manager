import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { rows } = await sql`SELECT * FROM tasks ORDER BY created_at DESC`;
    return res.json(rows);
  }

  if (req.method === "POST") {
    const { title, description, priority, due_date } = req.body;
    const { rows } = await sql`
      INSERT INTO tasks (title, description, priority, due_date)
      VALUES (${title}, ${description}, ${priority}, ${due_date})
      RETURNING *`;
    return res.status(201).json(rows[0]);
  }
}
