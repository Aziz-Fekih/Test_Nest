/*
import { Test } from '@nestjs/testing';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';

describe('MongooseModule', () => {
    let app;

    beforeAll(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [
                MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should be able to connect to MongoDB', () => {
        const connection = app.get(getConnectionToken());
        console.log(connection)
        expect(connection.isConnected).toBe(true);
    });
});
*/