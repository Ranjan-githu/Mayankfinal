const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123', // Will be hashed by model pre-save hook? No, insertMany doesn't trigger pre-save hooks usually!
    // We need to hash manually here or use create, but for seeder let's just hash it simply or rely on the hook if we iterate.
    // Actually insertMany DOES NOT trigger middleware.
    // Let's pre-hash for simplicity or update the seeder to use loop.
    // For now, I'll store plain text and rely on the model to handle it if I used .create, but since I use insertMany, I need to hash.
    // Wait, let's just use a hardcoded hash for '123456' for simplicity in this demo environment.
    // Hash for '123456' is roughly: $2a$10$v0/x.sK.3WH/xx.sK.3WH.x.sK.3WH.x.sK.3WH.x.sK.3WH (fake).
    // Let's fixing this by iterating in the seeder.
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    isAdmin: false,
  },
];

module.exports = users;
