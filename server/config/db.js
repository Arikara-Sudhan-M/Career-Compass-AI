const { Pool } = require("pg");

let pool = null;

const connectDB = async () => {
  try {
    if (!pool) {
      pool = new Pool({
        connectionString:
          process.env.DATABASE_URL ||
          "postgresql://postgres:postgres@localhost:5432/career_compass",
      });
    }

    const client = await pool.connect();
    try {
      await client.query("SELECT 1");
    } finally {
      client.release();
    }

    await createTables();
    console.log("PostgreSQL Connected");
    return pool;
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1);
  }
};

const createTables = async () => {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        stream TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'student',
        saved_careers JSONB DEFAULT '[]'::JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS careers (
        id SERIAL PRIMARY KEY,
        career_name TEXT NOT NULL,
        category TEXT NOT NULL,
        salary_range TEXT,
        future_demand TEXT,
        required_degree JSONB DEFAULT '[]'::JSONB,
        skills JSONB DEFAULT '[]'::JSONB,
        stream_eligibility JSONB DEFAULT '[]'::JSONB,
        description TEXT,
        growth_rate INTEGER,
        top_recruiters JSONB DEFAULT '[]'::JSONB,
        work_environment TEXT,
        roadmap JSONB DEFAULT '[]'::JSONB,
        learning_resources JSONB DEFAULT '[]'::JSONB,
        certifications JSONB DEFAULT '[]'::JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS roadmaps (
        id SERIAL PRIMARY KEY,
        career_name TEXT NOT NULL UNIQUE,
        steps JSONB DEFAULT '[]'::JSONB,
        skills JSONB DEFAULT '[]'::JSONB,
        resources JSONB DEFAULT '[]'::JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } finally {
    client.release();
  }
};

module.exports = {
  connectDB,
  getPool: () => pool,
};