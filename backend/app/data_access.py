import pymysql
from pymysql.cursors import DictCursor

class DataAccess:

    def __init__(self, host, user, database):
        self.host = host
        self.user = user
        self.database = database

    def get_connection(self):
        return pymysql.connect(
            host=self.host,
            user=self.user,
            database=self.database,
            cursorclass=DictCursor
        )

    def fetch(self, query, is_all=False):
        # default is to fetch one
        with self.get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(query)
                if is_all:
                    return cursor.fetchall()
                return cursor.fetchone()

    def execute(self, query):
        with self.get_connection() as conn:
            with conn.cursor() as cursor:
                cursor.execute(query)
                conn.commit()
                return cursor.lastrowid
    
