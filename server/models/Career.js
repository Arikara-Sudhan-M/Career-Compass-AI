const { connectDB, getPool } = require("../config/db");

const serializeCareer = (row) => ({
  id: row.id,
  _id: row.id,
  careerName: row.careername,
  category: row.category,
  salaryRange: row.salaryrange,
  futureDemand: row.futuredemand,
  requiredDegree: row.requireddegree || [],
  skills: row.skills || [],
  streamEligibility: row.streameligibility || [],
  description: row.description,
  growthRate: row.growthrate,
  topRecruiters: row.toprecruiters || [],
  workEnvironment: row.workenvironment,
  roadmap: row.roadmap || [],
  learningResources: row.learningresources || [],
  certifications: row.certifications || [],
});

const Career = {
  async find() {
    await connectDB();
    const result = await getPool().query(`
      SELECT
        id,
        career_name AS careerName,
        category,
        salary_range AS salaryRange,
        future_demand AS futureDemand,
        required_degree AS requiredDegree,
        skills,
        stream_eligibility AS streamEligibility,
        description,
        growth_rate AS growthRate,
        top_recruiters AS topRecruiters,
        work_environment AS workEnvironment,
        roadmap,
        learning_resources AS learningResources,
        certifications
      FROM careers
      ORDER BY id
    `);

    return result.rows.map(serializeCareer);
  },

  async findById(id) {
    await connectDB();
    const result = await getPool().query(
      `
        SELECT
          id,
          career_name AS careerName,
          category,
          salary_range AS salaryRange,
          future_demand AS futureDemand,
          required_degree AS requiredDegree,
          skills,
          stream_eligibility AS streamEligibility,
          description,
          growth_rate AS growthRate,
          top_recruiters AS topRecruiters,
          work_environment AS workEnvironment,
          roadmap,
          learning_resources AS learningResources,
          certifications
        FROM careers
        WHERE id = $1
      `,
      [id]
    );

    return result.rows[0] ? serializeCareer(result.rows[0]) : null;
  },

  async deleteAll() {
    await connectDB();
    await getPool().query("DELETE FROM careers");
  },

  async insertMany(items) {
    await connectDB();

    for (const item of items) {
      await getPool().query(
        `
          INSERT INTO careers (
            career_name,
            category,
            salary_range,
            future_demand,
            required_degree,
            skills,
            stream_eligibility,
            description,
            growth_rate,
            top_recruiters,
            work_environment,
            roadmap,
            learning_resources,
            certifications
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        `,
        [
          item.careerName,
          item.category,
          item.salaryRange || null,
          item.futureDemand || null,
          JSON.stringify(item.requiredDegree || []),
          JSON.stringify(item.skills || []),
          JSON.stringify(item.streamEligibility || []),
          item.description || null,
          item.growthRate ?? null,
          JSON.stringify(item.topRecruiters || []),
          item.workEnvironment || null,
          JSON.stringify(item.roadmap || []),
          JSON.stringify(item.learningResources || []),
          JSON.stringify(item.certifications || []),
        ]
      );
    }
  },
};

module.exports = Career;