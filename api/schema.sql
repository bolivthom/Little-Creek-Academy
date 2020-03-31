CREATE TABLE users (
    uid SERIAL PRIMARY KEY,
    school_id VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    postion VARCHAR(255),
    date_created DATE,
    last_login DATE
)

