const { connectDB, getPool } = require("../config/db");

const serializeRoadmap = (row) => ({
  id: row.id,
  _id: row.id,
  careerName: row.career_name,
  steps: row.steps || [],
  skills: row.skills || [],
  resources: row.resources || [],
});

const Roadmap = {
  async findOne({ careerName }) {
    await connectDB();
    const result = await getPool().query(
      `
        SELECT id, career_name, steps, skills, resources
        FROM roadmaps
        WHERE career_name = $1
        LIMIT 1
      `,
      [careerName]
    );

    return result.rows[0] ? serializeRoadmap(result.rows[0]) : null;
  },

  async deleteAll() {
    await connectDB();
    await getPool().query("DELETE FROM roadmaps");
  },

  async insertMany(items) {
    await connectDB();

    for (const item of items) {
      await getPool().query(
        `
          INSERT INTO roadmaps (career_name, steps, skills, resources)
          VALUES ($1, $2, $3, $4)
        `,
        [
          item.careerName,
          JSON.stringify(item.steps || []),
          JSON.stringify(item.skills || []),
          JSON.stringify(item.resources || []),
        ]
      );
    }
  },
};

module.exports = Roadmap;