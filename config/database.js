module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
<<<<<<< HEAD
      port: env.int('DATABASE_PORT', 5432),
=======
      port: env.int('DATABASE_PORT', 5434),
>>>>>>> f3b22dcf1305886da1aa62f9e1cb28b7a7ce5ec6
      database: env('DATABASE_NAME', 'ecuries-persevere'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'root'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
