const { neon } = require('@neondatabase/serverless');

const url = 'postgresql://neondb_owner:npg_j0wMJ7zucarT@ep-icy-fire-b4fgydet-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require';
const sql = neon(url);

async function main() {
  console.log('Connecting to Neon PostgreSQL...');
  await sql`
    CREATE TABLE IF NOT EXISTS lead_inquiries (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      property_type TEXT NOT NULL,
      location_area TEXT NOT NULL,
      configuration TEXT NOT NULL,
      budget_range TEXT NOT NULL,
      preferred_timeline TEXT NOT NULL,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'NEW',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `;
  console.log('Table lead_inquiries is ready!');

  // Migrate any previous customer inquiries into Neon so nothing is lost!
  const previousInquiries = [
    {
      id: "dadc5784-4c12-469e-bb9a-0d1107957bef",
      fullName: "Ravi kisan ",
      email: "ravi@gmail.com",
      phone: "7536943588",
      propertyType: "Turnkey Fitout",
      locationArea: "Mumbai ",
      configuration: "Custom Scope",
      budgetRange: "On Discussion",
      preferredTimeline: "Immediate",
      message: "Looking for complete 3BHK turnkey interior execution",
      status: "NEW",
      createdAt: "2026-10-07T12:07:52.681Z",
      updatedAt: "2026-10-07T12:07:52.681Z"
    },
    {
      id: "99f2f3dd-ad55-42df-acc3-99a96b9c34be",
      fullName: "Shifa Aliya",
      email: "shifa.aliya.mba2026@atlasskilltech.university",
      phone: "+91 92031 62115",
      propertyType: "Turnkey Fitout",
      locationArea: "Jabalpur ",
      configuration: "Custom Scope",
      budgetRange: "On Discussion",
      preferredTimeline: "Immediate",
      message: "Turnkey luxury villa inquiry",
      status: "NEW",
      createdAt: "2026-10-01T20:19:05.933Z",
      updatedAt: "2026-10-03T09:14:36.598Z"
    }
  ];

  for (const item of previousInquiries) {
    await sql`
      INSERT INTO lead_inquiries (
        id, full_name, email, phone, property_type, location_area, configuration,
        budget_range, preferred_timeline, message, status, created_at, updated_at
      ) VALUES (
        ${item.id}, ${item.fullName}, ${item.email}, ${item.phone},
        ${item.propertyType}, ${item.locationArea}, ${item.configuration},
        ${item.budgetRange}, ${item.preferredTimeline}, ${item.message},
        ${item.status}, ${item.createdAt}, ${item.updatedAt}
      )
      ON CONFLICT (id) DO NOTHING;
    `;
    console.log(`Seeded inquiry: ${item.fullName}`);
  }

  const rows = await sql`SELECT id, full_name, phone, status FROM lead_inquiries;`;
  console.log('Live inquiries in Neon database:', rows);
}

main().catch(console.error);
