const { connectDB, getPool } = require("../config/db");

const serializeUser = (row) => ({
  id: row.id,
  _id: row.id,
  name: row.name,
  email: row.email,
  stream: row.stream,
  password: row.password,
  role: row.role,
  savedCareers: row.saved_careers || [],
});

const User = {
  async findOne({ email }) {
    await connectDB();
    const result = await getPool().query(
      `
        SELECT id, name, email, stream, password, role, saved_careers
        FROM users
        WHERE email = $1
        LIMIT 1
      `,
      [email]
    );

    return result.rows[0] ? serializeUser(result.rows[0]) : null;
  },

  async findById(id) {
    await connectDB();
    const result = await getPool().query(
      `
        SELECT id, name, email, stream, password, role, saved_careers
        FROM users
        WHERE id = $1
        LIMIT 1
      `,
      [id]
    );

    return result.rows[0] ? serializeUser(result.rows[0]) : null;
  },

  async create(userData) {
    await connectDB();
    const { name, email, stream, password, role = "student" } = userData;
    const result = await getPool().query(
      `
        INSERT INTO users (name, email, stream, password, role, saved_careers)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, name, email, stream, password, role, saved_careers
      `,
      [name, email, stream, password, role, JSON.stringify([])]
    );

    return serializeUser(result.rows[0]);
  },

  async addSavedCareer(userId, careerId) {
    await connectDB();
    const currentUser = await this.findById(userId);

    if (!currentUser) {
      return null;
    }

    const alreadySaved = (currentUser.savedCareers || []).includes(careerId);
    if (alreadySaved) {
      return currentUser;
    }

    const updatedCareers = [...(currentUser.savedCareers || []), careerId];

    const result = await getPool().query(
      `
        UPDATE users
        SET saved_careers = $2, updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
        RETURNING id, name, email, stream, password, role, saved_careers
      `,
      [userId, JSON.stringify(updatedCareers)]
    );

    return serializeUser(result.rows[0]);
  },

  async removeSavedCareer(userId, careerId) {
    await connectDB();
    const currentUser = await this.findById(userId);

    if (!currentUser) {
      return null;
    }

    const updatedCareers = (currentUser.savedCareers || []).filter(
      (id) => id !== careerId
    );

    const result = await getPool().query(
      `
        UPDATE users
        SET saved_careers = $2, updated_at = CURRENT_TIMESTAMP
        WHERE id = $1
        RETURNING id, name, email, stream, password, role, saved_careers
      `,
      [userId, JSON.stringify(updatedCareers)]
    );

    return serializeUser(result.rows[0]);
  },
};

module.exports = User;